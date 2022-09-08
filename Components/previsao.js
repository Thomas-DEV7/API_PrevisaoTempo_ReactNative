import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Tempo(props) {
  let data = props.data;

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>CIDADE: {data.city_name}</Text>
        <Text style={styles.texto}>DESCRIÇÃO: {data.description}</Text>
        <Text style={styles.texto}>HORA: {data.time}</Text>
        <Text style={styles.texto}>VENTO: {data.wind_speedy}</Text>
        <Text style={styles.texto}>TEMPERATURA: {data.temp}°C</Text>
        <Text style={styles.texto}>DATA: {data.date}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    marginTop: 10
  },
});