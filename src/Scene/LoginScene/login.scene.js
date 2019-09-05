import React, { PureComponent } from "react";
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import * as MagicMove from 'react-native-magic-move';

import StringConstants from "../../Utils/i18n.util";
import { RequestLogin } from '../../Actions/user.actions';

class LoginScene extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.RequestLogin();
    }

    render() {
        return (
            <MagicMove.Scene>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <MagicMove.Image
                        style={{ width: 360, height: 300 }}
                        id="myView"
                        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                    />
                    <Text>{StringConstants('hello')}</Text>
                </View>
            </MagicMove.Scene>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { RequestLogin })(LoginScene);