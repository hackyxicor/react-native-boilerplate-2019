import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScene extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ padding: 10, backgroundColor: 'red' }} >
                    <Text>Login Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScene;