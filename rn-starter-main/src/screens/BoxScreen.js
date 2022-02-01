import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'stretch', //always assigned to parent element
        flexDirection: 'column', //always assigned to parent element
        justifyContent: 'center', //always assigned to parent element
        height: 200
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1, //always assigned to parent element
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1, //always assigned to parent element
        alignSelf: 'flex-start',
        // position: 'absolute'
        top: 10
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1, //always assigned to parent element
    }
});

export default BoxScreen;