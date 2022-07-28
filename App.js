import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoTitulo}>PREVISÃO DO TEMPO DATENA</Text>
        <View style={styles.imgs}>
        <Image
      style={styles.imgg}
      source={{
        uri: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/05/13/870515956-datena-2-1.jpg',
      }}
      />
      </View>
      </View>
      <View style={styles.blocos}>
        <Text style={styles.texto}>CIDADE:</Text>
        <TextInput
          placeholder='digita sua cidade fi'
          style={styles.input}
          
        />
      </View>
      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        >
          <Text style={styles.btnTexto}>BUSCAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#4281F5',
  },
  imgg:{
    width: 120,
    height: 90,
    margin: 5,
    borderRadius: 20,
  },
  imgs: {
    alignItems: 'center',
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#4281F5',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#4281F5'
  },
  btn: {
    width: 265,
    height: 45,
    backgroundColor: '#4281F5',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnTexto: {
    fontSize: 30,
    color: '#FFF'
  }
});
