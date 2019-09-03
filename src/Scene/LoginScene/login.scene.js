import React, { PureComponent } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

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
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login Screen</Text>
                <Text>{this.props.user ? this.props.user.display_name : null}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { RequestLogin })(LoginScene);