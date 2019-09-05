import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen</Text>
                    <MagicMove.Image
                        style={{ width: 200, height: 200 }}
                        id="myView"
                        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ padding: 10, backgroundColor: 'red' }} >
                        <Text>Login Screen</Text>
                    </TouchableOpacity>
                </View>
            </MagicMove.Scene >
        )
    }
}

export default HomeScene;