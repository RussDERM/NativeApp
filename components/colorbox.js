import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text]}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

// const styles = StyleSheet.create({
//   colorBoxText: {
//     fontWeight: 'bold',
//     color: 'white',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   colorBox: {
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // padding: 10,
//     borderRadius: 3,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'white',
//   },
// });

export default ColorBox;
