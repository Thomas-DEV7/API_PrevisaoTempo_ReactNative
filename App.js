import react, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/axios';

export default function App() {

  const [dados, setDados] = useState("");

  async function carregaDados(){
    const response = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=cd8b7e55&city_name=mongagua,SP');
    setDados(response.data.forecast[0]);

  }
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
      <TouchableOpacity  style={styles.btn} onPress={carregaDados}>
        <Text style={styles.txtBtn}>
          Buscar
        </Text>
        
      </TouchableOpacity>
      <Tempo/>
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
