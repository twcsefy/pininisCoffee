import axios from "axios";
import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity,Image, Text, View  } from "react-native";
import { launchCamera } from "react-native-image-picker";

const CadastroProduto: React.FC = () => {

    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');


    const cadastrarProduto = async () => {
        try{
            const formData =  new FormData();
            formData.append('nome', nome);
            formData.append('preco', preco);
            formData.append('ingredientes', ingredientes);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + 'jpg'
            });

            console.log(formData)
            const response = await axios.post('http://10.137.11.212:8000/api/cliente', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }catch (error) {
            console.log(error);
        }

    }

    const abrirCamera = () => {
        const options = {
            mediaType:'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }
            else if(response.error){
                console.log('erro ao abrir a camera');
            }
            else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#490959'} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>𝙋𝙞𝙣𝙞𝙣𝙞𝙨 𝘾𝙤𝙛𝙛𝙚𝙚</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome} />

                <TextInput style={styles.input}
                    placeholder="Preco do Produto"
                    value={preco}
                    onChangeText={setPreco} />

                <TextInput style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline />

                    <View style={styles.alinhamentoImagensSelecionada}>
                        {imagem ? <Image source={{uri:imagem}} style={styles.imagemSelecionado} /> : null}
                    </View>

                    <TouchableOpacity style={styles.imageButton}>
                        <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                        <Text style={styles.imageButtonText}>Tirar Foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton}>
                        <Text style={styles.imageButtonText}>Cadastrar Produto</Text>
                    </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }, header: {
        backgroundColor: '#490959',
        paddingVertical: 10,
        alignItems: 'center'
    }, headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '##490959',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop:10

    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionado: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagensSelecionada: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }






});

export default CadastroProduto;
