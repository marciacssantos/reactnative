import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function Navegador(){

    return(
        <View style={styles.nav}>

            <Text style={styles.textNav}> Full Stack Eletro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        width:"100%",
        height:50,
        backgroundColor:"red",
        paddingLeft:10,
        alignItems:"center",
        flexDirection:"row"

    },

    textNav:{
        color: "white",
        fontWeight:"bold",
        alignItems:"center",
        marginLeft:"27%"
    }
})

export default Navegador