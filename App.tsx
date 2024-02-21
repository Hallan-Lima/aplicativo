import Home from './src/pages/Home';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Style } from "./src/style/Style";

export default function App() {
  return (
    <NativeBaseProvider theme={Style}>

      <StatusBar backgroundColor={Style.colors.blue[500]}/> 
      
      <Home/>
    </NativeBaseProvider>
  );
}

