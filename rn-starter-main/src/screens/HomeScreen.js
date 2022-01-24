import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => {
          navigation.navigate('Components')
          console.log('Button Pressed')
        }}
        title='Go to Components Demo'
      />
      <Button
        onPress={() => {
          navigation.navigate('List')
          console.log('List Pressed')
        }}
        title='Go to List Demo'
      />
      <Button
        onPress={() => {
          navigation.navigate('Image')
          console.log('List Pressed')
        }}
        title='Go to Image Demo'
      />
      <Button
        onPress={() => {
          navigation.navigate('Counter')
          console.log('Counter Pressed')
        }}
        title='Go to Counter'
      />
      <Button
        onPress={() => {
          navigation.navigate('Color')
          console.log('Counter Pressed')
        }}
        title='Go to Color Demo'
      />
      <Button
        onPress={() => {
          navigation.navigate('Square')
          console.log('Counter Pressed')
        }}
        title='Go to Square Demo'
      />
      {/* <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate('List')
          console.log('List Pressed')
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
