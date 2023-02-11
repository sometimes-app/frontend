import React, { Children } from "react";
import { Text, View, StyleSheet} from 'react-native';

const Startup = () => {
    return (
        <View sty>
            <Text>
                Sometimes...
            </Text>
            <Helper>
                <View>
                    <Text style="display:flex;">
                        Nathahn!!!
                    </Text>
                </View>
            </Helper>
        </View>
    )
}

const Helper = (props) => {
    return (
        <View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Startup;