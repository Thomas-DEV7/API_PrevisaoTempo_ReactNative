import react from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity  } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.texto}>Buscar Tempo</Text>
      </View>
      <Text>Cidade: </Text>
      <TextInput
        style={styles.input}
        placeholder="ex: Carapicuíba"
      />
      <TouchableOpacity  style={styles.btn}>
        <Text style={styles.txtBtn}>
          Buscar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'steelblue',
    fontSize: 30,
    marginBottom: '5%'
  },
  input:{
    width: '80%',
    borderBottomWidth: 1,
    borderColor: 'Black',
    margin: '5%',
  },
  btn: {
    backgroundColor: 'steelblue',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: '30%'
  },
  txtBtn:{
    color: 'white',
    fontSize: 20,
  }
});
