import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item{
    id: string,
    nome: string,
    preco: string,
    lista_ingredientes: string,
    image: any
}

const dados: Item[] = [
    {id: "1" , nome:"american coffee" , preco:"13,70" , lista_ingredientes: "cafe espresso", image: require('../') },
    {id: "2" , nome:"capuccino" , preco:"15,00" , lista_ingredientes: "", image:"" },
    {id: "3" , nome:"matcha" , preco:"15,00" , lista_ingredientes: "", image:"" },
    {id: "4" , nome:"milk coffee" , preco:"3,68" , lista_ingredientes: "", image:"" },
    {id: "5" , nome:"espresso coffee" , preco:"5,90" , lista_ingredientes: "", image:"" },
    {id: "6" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "7" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "8" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "9" , nome:"" , preco:"" , lista_ingredientes: "", image: ""},
    {id: "10" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "11" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "12" , nome:"" , preco:"" , lista_ingredientes: "", image:"" },
    {id: "13" , nome:"" , preco:"" , lista_ingredientes: "", image: ""},
    {id: "14" , nome:"" , preco:"" , lista_ingredientes: "", image: ""},
    {id: "15" , nome:"" , preco:"" , lista_ingredientes: "", image: ""},
];

const renderItem = ({item}: {item: Item}) => (
 
    <TouchableOpacity style={ styles.item}>
    <Text>{ item.nome }</Text>
    <Text>{ item.preco }</Text>
    <Text>{ item.lista_ingredientes }</Text>
    </TouchableOpacity>
);
function paginainicial(): React.JSX.Element{
    return (
        <View>
            <StatusBar backgroundColor="#c88fdb" barStyle= 'light-content'/>
                <View style={styles.header}>
                <Text style={styles.headerText}></Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={(item) => item.id}
                    />

                    <View style={styles.footer}>
                        <TouchableOpacity>
                            <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            source={require('./assets/images/lupa.png')}
                            styles={ styles.footerIcon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            source={require('./assets/images/ultimo.png')}
                            style={ styles.footerIcon}
                            />
                        </TouchableOpacity>
                    </View>
            </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    item: {
        backgroundColor:"#C88FDB",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 7
    },
    header: {
        backgroundColor:"#C88FDB",
        alignItems: 'center',
        paddingVertical: 0
    },
})