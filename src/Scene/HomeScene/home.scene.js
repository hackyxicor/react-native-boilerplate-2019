import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import * as MagicMove from 'react-native-magic-move';
class HomeScene extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <MagicMove.Scene>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Home Screen</Text>
                    <MagicMove.View
                        id="myView"
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ padding: 10, backgroundColor: 'red' }} >
                            <Text>Login Screen</Text>
                        </TouchableOpacity>
                    </MagicMove.View>
                </View>
            </MagicMove.Scene>
        )
    }
}

export default HomeScene;