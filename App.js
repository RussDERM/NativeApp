import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/colorbox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36', hue: 'Dark' },
  { colorName: 'Base02', hexCode: '#073642', hue: 'Dark' },
  { colorName: 'Base01', hexCode: '#586e75', hue: 'Dark' },
  { colorName: 'Base00', hexCode: '#657b83', hue: 'Dark' },
  { colorName: 'Base0', hexCode: '#839496', hue: 'Dark' },
  { colorName: 'Base1', hexCode: '#93a1a1', hue: 'Dark' },
  { colorName: 'Base2', hexCode: '#eee8d5', hue: 'Light' },
  { colorName: 'Base3', hexCode: '#fdf6e3', hue: 'Light' },
  { colorName: 'Yellow', hexCode: '#b58900', hue: 'Dark' },
  { colorName: 'Orange', hexCode: '#cb4b16', hue: 'Dark' },
  { colorName: 'Red', hexCode: '#dc322f', hue: 'Dark' },
  { colorName: 'Magenta', hexCode: '#d33682', hue: 'Dark' },
  { colorName: 'Violet', hexCode: '#6c71c4', hue: 'Dark' },
  { colorName: 'Blue', hexCode: '#268bd2', hue: 'Dark' },
  { colorName: 'Cyan', hexCode: '#2aa198', hue: 'Dark' },
  { colorName: 'Green', hexCode: '#859900', hue: 'Dark' },
];

// colors to be rendered

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* Title */}
        <Text style={[styles.header, { color: 'black' }]}>
          S O L A R I Z E D
        </Text>

        {/* Flatlist */}

        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
