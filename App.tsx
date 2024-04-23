import React from "react";
import PaginaInicial from "./src/paginainicial";
import Login from "./src/login";
import CadastroProduto from "./src/screens/CadastroProduto";
import cadastroCliente from "./src/CadastroCliente";
import CadastroCliente from "./src/CadastroCliente";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stak = createStackNavigator();

function App():React.ReactElement{

  return(
    <NavigationContainer>
      <Stak.Navigator>
        <Stak.Screen 
        name='paginaInicial' 
        component={PaginaInicial}
        options={{ headerShown: false}}
        />
         <Stak.Screen 
        name='paginaInicial' 
        component={PaginaInicial}
        options={{ headerShown: false}}/>
        <Stak.Screen name='CadastroCliente' component={CadastroCliente}
          options={{ headerShown: false }}/>        
      </Stak.Navigator>
      </NavigationContainer>
    //<PaginaInicial/>
    //<CadastroProduto />
    //<Login/>
    //<CadastroProduto />
    //<CadastroCliente/>
    );
}


export default App;