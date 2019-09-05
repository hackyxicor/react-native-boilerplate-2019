import React, { PureComponent } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as MagicMove from 'react-native-magic-move';

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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <MagicMove.View
                        id="myView"
                    >
                        <Text>Login Screen</Text>
                    </MagicMove.View>
                    <Text>{this.props.user ? this.props.user.display_name : null}</Text>
                </View>
            </MagicMove.Scene>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { RequestLogin })(LoginScene);