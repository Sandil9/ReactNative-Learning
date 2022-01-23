import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const greeting = <Text>Hello to you</Text>;
    const userName = 'Sandil';
    return(
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native!
            </Text>
            <Text style={styles.subHeaderStyle}>
                My name is {userName}
            </Text>
            {greeting}
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;