import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import PaginaInicial from "./paginainicial";

interface Item{
    id: string;
    nome: string;
    endereco: string;
    numero: number;
    cpf: number;
}

function Login(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/certo.png')} style={styles.fundoBg}>
            <StatusBar backgroundColor="#490959" barStyle= 'light-content'/>
 <View style={styles.header}> 

            <Image style={styles.logo} source={require('./assets/images/logo.png')} />
        </View>
       
            <View>
                <TextInput style={styles.nome} placeholder="Nome:"></TextInput>
            </View>

            <View>
                <TextInput style={styles.endereco} placeholder="Endereco:"></TextInput>
            </View>

            <View>
                <TextInput style={styles.numero} placeholder="Numero:"></TextInput>
            </View>

            <View>
                <TextInput style={styles.cpf} placeholder="Cpf:"></TextInput>
            </View>
                
                    </ImageBackground>
                    <View style={styles.footer}>
                        

                       
                    </View>
            </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#490959'
    },
    item: {
        borderWidth: 1,
        borderColor: '#490959',
        backgroundColor:"#490959",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 7
    },
    header: {
        backgroundColor:"#000",
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    headerText: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#490959'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#490959',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    foto:{
        width: 320,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#490959'
    },
    itemText: {
        color: '#C88FDB',
        fontSize: 20
    },
    logo: {
        borderWidth: 1,
        borderColor: '#C88FDB',
        width: 370,
        height: 150
    },
    fundoBg: {
        flex: 1,
        justifyContent: 'center'
    },
    nome: {
        backgroundColor: '#C88FDB',
        padding: 10,
        marginVertical: 30,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    endereco: {
        backgroundColor: '#C88FDB',
        padding: 10,
        marginVertical: 30,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    numero: {
        backgroundColor: '#C88FDB',
        padding: 10,
        marginVertical: 30,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    cpf: {
        backgroundColor: '#C88FDB',
        padding: 10,
        marginVertical: 30,
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 3,
    },
});


export default Login;