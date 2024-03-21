import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item{
    id: string;
    nome: string;
    preco: string;
    lista_ingredientes: string;
    image: any;
}

const dados: Item[] = [
    {id: "1" , nome:"ੈ♡˳𝘼𝙢𝙚𝙧𝙞𝙘𝙖𝙣 𝘾𝙤𝙛𝙛𝙚𝙚" , preco:"R$13,70" , lista_ingredientes: "𝙘𝙖𝙛𝙚 𝙚𝙨𝙥𝙧𝙚𝙨𝙨𝙤, 𝙖𝙜𝙪𝙖 𝙦𝙪𝙚𝙣𝙩𝙚", image: require('./assets/images/caafe.png') },
    {id: "2" , nome:"ੈ♡˳𝘾𝙖𝙥𝙪𝙘𝙘𝙞𝙣𝙤" , preco:"R$11,45" , lista_ingredientes: "𝙘𝙖𝙛𝙚́ 𝙚𝙨𝙥𝙧𝙚𝙨𝙨𝙤, 𝙡𝙚𝙞𝙩𝙚 𝙦𝙪𝙚𝙣𝙩𝙚, 𝙚𝙨𝙥𝙪𝙢𝙖 𝙙𝙤 𝙡𝙚𝙞𝙩𝙚", image:require('./assets/images/capuccino.png') },
    {id: "3" , nome:"ੈ♡˳𝙈𝙖𝙩𝙘𝙝𝙖" , preco:"R$15,00" , lista_ingredientes: "𝙘𝙝𝙖 𝙫𝙚𝙧𝙙𝙚, 𝙘𝙖𝙨𝙘𝙖 𝙙𝙚 𝙡𝙖𝙧𝙖𝙣𝙟𝙖, 𝙢𝙖𝙩𝙘𝙝𝙖, 𝙥𝙚𝙩𝙖𝙡𝙖𝙨 𝙙𝙚 𝙘𝙚𝙣𝙩𝙖𝙪𝙧𝙚𝙖, 𝙧𝙤𝙨𝙖 𝙚 𝙜𝙞𝙧𝙖𝙨𝙨𝙤𝙡, 𝙖𝙧𝙤𝙢𝙖𝙨 𝙣𝙖𝙩𝙪𝙧𝙖𝙞𝙨 𝙙𝙚 𝙢𝙤𝙧𝙖𝙣𝙜𝙤, 𝙣𝙖𝙩𝙖, 𝙗𝙚𝙧𝙜𝙖𝙢𝙤𝙩𝙖 𝙚 𝙗𝙖𝙪𝙣𝙞𝙡𝙝𝙖", image:require('./assets/images/matcha.png') },
    {id: "4" , nome:"ੈ♡˳𝙈𝙞𝙡𝙠 𝘾𝙤𝙛𝙛𝙚𝙚" , preco:"R$3,68" , lista_ingredientes: "𝙘𝙖𝙛𝙚 𝙚𝙨𝙥𝙧𝙚𝙨𝙨𝙤, 𝙡𝙚𝙞𝙩𝙚 𝙫𝙖𝙥𝙤𝙧𝙞𝙯𝙖𝙙𝙤", image:require('./assets/images/cafeleite.png') },
    {id: "5" , nome:"ੈ♡˳𝙀𝙨𝙥𝙧𝙚𝙨𝙨𝙤 𝘾𝙤𝙛𝙛𝙚𝙚" , preco:"R$5,90" , lista_ingredientes: "𝙜𝙧𝙖̃𝙤 𝙙𝙚 𝙘𝙖𝙛𝙚 𝙢𝙤𝙞𝙙𝙤, 𝙖𝙜𝙪𝙖 𝙦𝙪𝙚𝙣𝙩𝙚", image: require('./assets/images/espresso.png') },
    {id: "6" , nome:"ੈ♡˳𝘽𝙧𝙤𝙬𝙣𝙞𝙚" , preco:"R$11,90" , lista_ingredientes: "𝙗𝙖𝙧𝙧𝙖 𝙙𝙚 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚, 𝙢𝙖𝙧𝙜𝙖𝙧𝙞𝙣𝙖, 𝙘𝙖𝙘𝙖𝙪 𝙚𝙢 𝙥𝙤́, 𝙤𝙫𝙤𝙨, 𝙖𝙘̧𝙪𝙘𝙖𝙧, 𝙛𝙖𝙧𝙞𝙣𝙝𝙖 𝙙𝙚 𝙩𝙧𝙞𝙜𝙤, 𝙣𝙤𝙯𝙚𝙨", image: require('./assets/images/brownie.png')},
    {id: "7" , nome:"ੈ♡˳𝙄𝙘𝙚𝙙 𝙏𝙚𝙖" , preco:"R$4,90" , lista_ingredientes: "𝙖𝙜𝙪𝙖, 𝙘𝙝𝙖́ 𝙢𝙖𝙩𝙩𝙚, 𝙖𝙘̧𝙪𝙘𝙖𝙧, 𝙜𝙚𝙡𝙤, 𝙡𝙞𝙢𝙖𝙤", image: require('./assets/images/cha.png') },
    {id: "8" , nome:"ੈ♡˳𝘾𝙝𝙚𝙚𝙨𝙚𝙘𝙖𝙠𝙚" , preco:"R$17,97" , lista_ingredientes: "𝙢𝙖𝙣𝙩𝙚𝙞𝙜𝙖,𝙧𝙞𝙘𝙤𝙩𝙖, 𝙖𝙘̧𝙪𝙘𝙖𝙧 𝙧𝙚𝙛𝙞𝙣𝙖𝙙𝙤, 𝙧𝙖𝙨𝙥𝙖𝙨 𝙙𝙚 𝙡𝙞𝙢𝙖𝙤, 𝙤𝙫𝙤𝙨,𝙗𝙖𝙪𝙣𝙞𝙡𝙝𝙖, 𝙡𝙚𝙞𝙩𝙚 𝙘𝙤𝙣𝙙𝙚𝙣𝙨𝙖𝙙𝙤, 𝙖𝙜𝙪𝙖, 𝙢𝙤𝙧𝙖𝙣𝙜𝙤, 𝙜𝙚𝙡𝙖𝙩𝙞𝙣𝙖 𝙨𝙚𝙢 𝙨𝙖𝙗𝙤𝙧", image: require('./assets/images/cheesecake.png')},
    {id: "9" , nome:"ੈ♡˳𝘾𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚 𝙋𝙞𝙚" , preco:"R$15,70" , lista_ingredientes: "𝙤𝙫𝙤𝙨, 𝙛𝙖𝙧𝙞𝙣𝙝𝙖 𝙙𝙚 𝙩𝙧𝙞𝙜𝙤, 𝙛𝙚𝙧𝙢𝙚𝙣𝙩𝙤 𝙚𝙢 𝙥𝙤,𝙖𝙘̧𝙪𝙘𝙖𝙧, 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚 𝙚𝙢 𝙥𝙤", image: require('./assets/images/torta.png')},
    {id: "10" ,nome:"ੈ♡˳𝘾𝙝𝙞𝙘𝙠𝙚𝙣 𝙎𝙖𝙣𝙙𝙬𝙞𝙘𝙝" , preco:"R$7,90" , lista_ingredientes: "𝙛𝙧𝙖𝙣𝙜𝙤 𝙙𝙚𝙨𝙛𝙞𝙖𝙙𝙤, 𝙩𝙤𝙢𝙖𝙩𝙚, 𝙨𝙖𝙡, 𝙥𝙖𝙤 𝙙𝙚 𝙛𝙤𝙧𝙢𝙖, 𝙢𝙖𝙞𝙤𝙣𝙚𝙨𝙚, 𝙨𝙖𝙡𝙨𝙖, 𝙘𝙚𝙗𝙤𝙡𝙞𝙣𝙝𝙖, 𝙘𝙚𝙗𝙤𝙡𝙖, 𝙘𝙚𝙣𝙤𝙪𝙧𝙖, 𝙢𝙞𝙡𝙝𝙤", image:require('./assets/images/sanduiche.png') },
    {id: "11", nome:"ੈ♡˳𝘾𝙝𝙚𝙚𝙨𝙚 𝘽𝙧𝙚𝙖𝙙" , preco:"R$2,30 " , lista_ingredientes: "𝙥𝙤𝙡𝙫𝙞𝙡𝙝𝙤 𝙖𝙯𝙚𝙙𝙤, 𝙥𝙤𝙡𝙫𝙞𝙡𝙝𝙤 𝙙𝙤𝙘𝙚, 𝙦𝙪𝙚𝙞𝙟𝙤 𝙧𝙖𝙡𝙖𝙙𝙤, 𝙤𝙫𝙤, 𝙖𝙜𝙪𝙖, 𝙤𝙡𝙚𝙤, 𝙡𝙚𝙞𝙩𝙚, 𝙨𝙖𝙡", image:require('./assets/images/paodequeijo.png') },
    {id: "12", nome: "ੈ♡˳𝙂𝙧𝙞𝙡𝙡𝙚𝙙 𝙝𝙖𝙢 𝙖𝙣𝙙 𝙘𝙝𝙚𝙚𝙨𝙚", preco: "R$8,50", lista_ingredientes: "𝙥𝙧𝙚𝙨𝙪𝙣𝙩𝙤 𝙢𝙖𝙜𝙧𝙤, 𝙥𝙖̃𝙤 𝙙𝙚 𝙛𝙤𝙧𝙢𝙖, 𝙦𝙪𝙚𝙞𝙟𝙤 𝙥𝙧𝙖𝙩𝙤, 𝙢𝙖𝙧𝙜𝙖𝙧𝙞𝙣𝙖", image :require('./assets/images/grilled.png')},
    {id: "13", nome: "ੈ♡˳𝘾𝙡𝙤𝙪𝙙 𝙋𝙞𝙚𝙘𝙚 𝙨𝙤𝙙𝙖", preco: "R$7,79", lista_ingredientes: "𝙧𝙖𝙨𝙥𝙖𝙨 𝙙𝙚 𝙣𝙪𝙫𝙚𝙢, 𝙜𝙚𝙡𝙤, 𝙗𝙤𝙡𝙞𝙣𝙝𝙖𝙨 𝙙𝙚 𝙣𝙪𝙫𝙚𝙢 𝙘𝙤𝙣𝙜𝙚𝙡𝙖𝙙𝙖𝙨,𝙪𝙢 𝙛𝙞𝙤 𝙙𝙚 𝙘𝙖𝙗𝙚𝙡𝙤 𝙙𝙚 𝙤𝙜𝙧𝙤", image :require('./assets/images/blue.png')},
    {id: "14", nome: "ੈ♡˳𝘾𝙤𝙤𝙠𝙞𝙚 𝙢𝙖𝙙𝙚 𝙞𝙣 𝙛𝙖𝙞𝙧𝙮𝙡𝙖𝙣𝙙", preco: "R$10,60", lista_ingredientes: "𝙛𝙖𝙧𝙞𝙣𝙝𝙖 𝙙𝙚 𝙩𝙪𝙡𝙞𝙥𝙖, 𝙚𝙨𝙥𝙞𝙧𝙧𝙤 𝙙𝙚 𝙪𝙣𝙞𝙘𝙤𝙧𝙣𝙞𝙤, 𝙖𝙘̧𝙪𝙘𝙖𝙧 𝙚𝙭𝙩𝙧𝙖𝙞𝙙𝙤 𝙙𝙖𝙨 𝙘𝙖𝙫𝙚𝙧𝙣𝙖𝙨 𝙛𝙖𝙙𝙞𝙨𝙩𝙞𝙘𝙖𝙨", image :require('./assets/images/espirro.png')},
    {id: "15", nome: "ੈ♡˳𝙐𝙣𝙞𝙘𝙤𝙧𝙣 𝙏𝙚𝙖𝙧𝙨 𝙎𝙤𝙙𝙖", preco: "R$7,90", lista_ingredientes: "𝙡𝙖𝙜𝙧𝙞𝙢𝙖 𝙙𝙚 𝙪𝙣𝙞𝙘𝙤𝙧𝙣𝙞𝙤 𝙜𝙖𝙨𝙚𝙞𝙛𝙞𝙘𝙖𝙙𝙖, 𝙚𝙨𝙥𝙞𝙧𝙧𝙤 𝙙𝙚 𝙛𝙖𝙙𝙖 𝙚 𝙖𝙜𝙪𝙖 𝙙𝙚 𝙛𝙖𝙞𝙧𝙮𝙩𝙤𝙥𝙞𝙖", image :require('./assets/images/sooda.png')},
   
];

const renderItem = ({item}: {item: Item}) => (
 
    <TouchableOpacity style={ styles.item}>
    <Text style={styles.itemText}>{ item.nome }</Text>
    <Image style={styles.foto} source={ item.image} />
    <Text style={styles.itemText}>{ item.preco }</Text>
    <Text style={styles.itemText}>{ item.lista_ingredientes }</Text>
    
    </TouchableOpacity>
);
function PaginaInicial(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/certo.png')} style={styles.fundoBg}>
            <StatusBar backgroundColor="#490959" barStyle= 'light-content'/>
 <View style={styles.header}> 

            <Image style={styles.logo} source={require('./assets/images/logo.png')} />
        </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    />
                    </ImageBackground>
                    <View style={styles.footer}>
                        <TouchableOpacity>
                            <Image
                        source={require('./assets/images/hoome.png')}
                        style={styles.footerIcon}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            source={require('./assets/images/order.png')}
                            style={ styles.footerIcon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            source={require('./assets/images/search.png')}
                            style={ styles.footerIcon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            source={require('./assets/images/person.png')}
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
        backgroundColor: '#C88FDB',
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
    }
});


export default PaginaInicial