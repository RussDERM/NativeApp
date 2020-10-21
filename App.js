import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <Text style={[styles.colorBox, { color: 'black' }]}>Color Boxes</Text>
        <Text style={[styles.Cyan, styles.colorBox]}>Cyan: #2aa198</Text>
        <Text style={[styles.colorBox, { backgroundColor: '#268bd2' }]}>
          Blue: #268bd2
        </Text>
        <Text style={[styles.colorBox, { backgroundColor: '#d33682' }]}>
          Magenta: #d33682
        </Text>
        <Text style={[styles.colorBox, { backgroundColor: '#cb4b16' }]}>
          Orange: #cb4b16
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingVertical: 10,
    color: 'white',
  },
  Cyan: {
    backgroundColor: 'cyan',
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

export default App;
