import { Post } from "../Services/http.service";
import { LOGIN } from "../Constants/api.constant";

export function LoginCall(username, password) {
    return Post({ url: LOGIN, body: { username: 'himanshu.kushwaha@drivezy.com', password: 'Aa$123456' } });
}