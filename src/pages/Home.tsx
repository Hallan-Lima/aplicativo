<<<<<<< HEAD:src/pages/Home.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>pagina hsadfome</Text>
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  const handlePress = () => {
    // Adicione o código que você deseja executar quando o botão for pressionado
    console.log('Botão pressionado!');
  };
  
  return (
    <View style={styles.container}>
      <Text>ola mundo!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Clique aquia</Text>
      </TouchableOpacity>
>>>>>>> f6e3d2ab699e7ec7c0eaecca47b4073b96cb4d52:App.js
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF', // Cor do botão
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    textAlign: 'center',
  },
});
