/****************************************
 * Gateway for all the api calls
 * implements get, post, put, delete calls
 ****************************************/

import { BASE_URL } from '../Constants/global.constant';

const defautlHeaders = {

}

/**
 * Get call implementation
 * All get calls are made through this method
 * @param  {object} obj - contains url, params(optional){proccessed and attached to url}, urlPrefix(optional) { for ex to hit uatapi.justride.in/}
 * obj can have hideLoader to hide loader which is false bydefault and shows loader on every call
 * headers(optional),
 * callback, persist, update
 */
export async function Get(obj) {
    const params = await getNecessaryParams(obj);
    return ApiCall(params);
}

/**
 * Post call implementation
 * All get calls are made through this method
 * @param  {object} obj - contains url, params(optional){proccessed and attached to url}, urlPrefix(optional) { for ex to hit uatapi.justride.in/}
 * obj can have hideLoader to hide loader which is false bydefault and shows loader on every call
 * headers(optional), body(optional)
 */
export async function Post(obj) {
    obj.method = 'POST';
    const params = await getNecessaryParams(obj);
    return ApiCall(params);
}

/**
 * Put call implementation
 * All get calls are made through this method
 * @param  {object} obj - contains url, params(optional){proccessed and attached to url}, urlPrefix(optional) { for ex to hit uatapi.justride.in/}
 * obj can have hideLoader to hide loader which is false bydefault and shows loader on every call
 * headers(optional), body(optional)
 */
export async function Put(obj) {
    obj.method = 'PUT';
    const params = await getNecessaryParams(obj);
    return ApiCall(params);
}

/**
* Delete call implementation
* All get calls are made through this method
* @param  {object} obj - contains url, params(optional){proccessed and attached to url}, urlPrefix(optional) { for ex to hit uatapi.justride.in/}
* obj can have hideLoader to hide loader which is false bydefault and shows loader on every call
* headers(optional)
*/
export async function Delete(obj) {
    obj.method = 'DELETE';
    const params = await getNecessaryParams(obj);
    return ApiCall(params);
}

/**
 * final level method to make api call
 * used for all kind of methods(get, put, post), except delete
 * @param  {string} {url
 * @param  {function} method
 * @param  {object} headers
 * @param  {function} resolve
 * @param  {function} reject}
 */
function ApiCall({ url, method, headers = { r }, body, resolve = defaultResolve, reject = defaultReject, params }) {
    const postDict = {
        headers, method
    };

    if (body) { // if body is attached
        postDict.body = body;
    }
    console.log('url', url, body, method)
    return fetch(url, { headers, body, method, params, credentials: 'same-origin' })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
}


/**
 * prepares params for making api calls
 * including headers, url, params, resolve, reject
 * @param  {object} obj
 */
async function getNecessaryParams(obj) {
    const url = createFinalUrl(obj);
    const method = obj.method || 'GET';
    const headers = await createHeader(obj);

    const resolveFun = obj.hasOwnProperty('resolve') ? obj.resolve : resolve;
    const rejectFun = obj.hasOwnProperty('reject') ? obj.reject : reject;

    const responseObj = {
        url, method, headers, resolve: resolveFun, reject: rejectFun
    };

    if (obj.body) {
        responseObj.body = obj.body;
    }

    return (responseObj);
}

/**
 * takes params along with end point, adds with prefix url and return final url
 * @param  {object} obj
 */
function createFinalUrl(obj) {
    return `${BASE_URL}/${obj.url}`;
}

/**
 * takes extra headers(optional) and extend with default header
 * @param  {object} obj
 */
async function createHeader(obj) {
    const headers = defautlHeaders;

    // if headers are not passed
    if (!obj.headers) {
        return headers;
    }
    // extend default header options with one, passed with obj
    return { ...headers, ...obj.headers };
}

/**
 * default method to pass through on each success api call
 * @param  {object} response
 */
function defaultResolve(response) {
    return response;
}

/**
 * default method to pass through on each failure api call
 * @param  {object} response
 */
function defaultReject(response) {
    return response;
}