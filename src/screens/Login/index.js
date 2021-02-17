import React from 'react'
import {Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

function Login({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.img}
                source={require('../../../assets/icon.png')}
            />
            <TextInput
                style={styles.input}
                placeholder="Informe seu email"
                textContentType="emailAddress"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"
            
            />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.botaoTexto}>Login</Text>
            </TouchableOpacity>
            

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red"
    },

    img: {
        width:120,
        height:120,
        borderRadius:100,
    },

    input:{
        marginTop:15,
        width:300,
        backgroundColor:"white",
        fontSize:16,
        fontWeight:'bold',
        borderRadius:30,
        justifyContent:"center",
        padding:10
    },

    botao: {
        width:200,
        height:42,
        backgroundColor:"orange",
        marginTop:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        color:"white"
    },

    botaoTexto: {
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }
})
export default Login