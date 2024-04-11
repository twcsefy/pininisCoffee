import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, Image, Text, View } from "react-native";
import { launchCamera } from "react-native-image-picker";

const CadastroCliente: React.FC = () => {

    const [endereco, setEndereco] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');
    const [password,setPassword] = useState<string>('');

    const CadastrarCliente = async () => {

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
            <StatusBar backgroundColor={'pink'} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>𝙋𝙞𝙣𝙞𝙣𝙞𝙨 𝘾𝙤𝙛𝙛𝙚𝙚</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do cliente"
                    value={nome}
                    onChangeText={setNome} />

                <TextInput style={styles.input}
                    placeholder="endereco do cliente"
                    value={endereco}
                    onChangeText={setEndereco} />

                <TextInput style={styles.input}
                    placeholder="telefone do cliente"
                    value={telefone}
                    onChangeText={setTelefone} />

                <TextInput style={styles.input}
                    placeholder="cpf do cliente"
                    value={cpf}
                    onChangeText={setCpf} />

                <TextInput style={styles.input}
                    placeholder="email do cliente"
                    value={email}
                    onChangeText={setEmail}
                    multiline />

                <TextInput style={styles.input}
                    placeholder="imagem do cliente"
                    value={imagem}
                    onChangeText={setImagem}
                    multiline />

                <TextInput style={styles.input}
                    placeholder="senha do cliente"
                    value={password}
                    onChangeText={setPassword}
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
                        <Text style={styles.imageButtonText}>Cadastrar cliente</Text>
                    </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }, header: {
        backgroundColor: 'pink',
        paddingVertical: 10,
        alignItems: 'center'
    }, headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
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
        backgroundColor: 'pink',
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
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }






});

export default CadastroCliente;
