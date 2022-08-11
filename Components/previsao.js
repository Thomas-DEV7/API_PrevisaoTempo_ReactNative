import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Tempo(props) {
  let data = props.data;
  let forecast = data.forecast[0];

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Cidade: {data.city_name}</Text>
        <Text style={styles.texto}>MIN: {forecast.min}</Text>
        <Text style={styles.texto}>MAX: {forecast.max}</Text>
        <Text style={styles.texto}>DESCRIÇÃO: {data.description}</Text>
        <Text style={styles.texto}>SUB-DESCRIÇÃO: {forecast.description}</Text>
        <Text style={styles.texto}>DATA: {forecast.date}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    marginTop: 10
  },
});