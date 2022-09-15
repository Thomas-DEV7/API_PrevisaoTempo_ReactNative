import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { Tempo } from './Components/previsao';
import Api from './Components/Api';

export default function App() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('São Paulo')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=cd8b7e55&city_name=${cidade},SP`)
    setDados(response.data);
  
  }

  function limpar(){
    setCidade("");
  } 
  return (
    <ScrollView style={styles.container}>
      <View>
        
        <View style={styles.imgs}>
        <Image
      style={styles.imgg}
      source={{
        uri: 'https://uploads.metropoles.com/wp-content/uploads/2022/02/28203715/Ratinho-4.jpg',
      }}
      />
      <Text style={styles.tittle}>RATINHO TEMPOS</Text>
      </View>
      </View>
      <View style={styles.blocos}>
        <Text style={styles.texto}>CIDADE:</Text>
        <TextInput
          placeholder='nome de sua cidade'
          style={styles.input}
          value={cidade}
          onChangeText={(cidade) => setCidade(cidade)}          
        />
      </View>
      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>BUSCAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btnLimpar}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.blocos}>
        <Tempo  data={dados}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tittle: {
    fontSize: 40,
    textAlign: 'center',
    color: 'purple',
  },
  imgg:{
    width: '100%',
    height: 300
  },
  imgs: {
    alignItems: 'center',
  },
  blocos: {
    fontSize: 20,
    alignItems: 'center'
  },
  texto: {
    color: 'purple',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: '90%',
    height: 35,
    fontSize: 20,
    borderColor: 'purple'
  },
  btn: {
    width: '90%',
    height: 45,
    backgroundColor: 'purple',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnTexto: {
    fontSize: 30,
    color: '#FFF'
  },
  btnLimpar:{
    width: '90%',
    height: 45,
    backgroundColor: 'orange',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  }
});
