import React from "react";
import { Text } from "react-native";

export default function Tempo(){
    <>
        <Text style={styles.texto}>Min:{this.props.min}</Text>
        <Text style={styles.texto}>Max:{this.props.max}</Text>
        <Text style={styles.texto}>Descrição: {this.props.description}</Text>
    </>
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginTop: 10,
    },
})