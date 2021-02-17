import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'

import Navegador from '../Navegador'

function Home(){
    return(
        <View>
            <Navegador />
            <View style>
                <Text style={styles.text}>
                    Aqui desenvolvedores tem desconto!!
                </Text>
                <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.img}
                    source={require('../../../assets/banner.png')}
                />
                <Image style={styles.img}
                    source={require('../../../assets/banner1.webp')}
                />

                <Image style={styles.img}
                    source={require('../../../assets/banner2.png')}
                />

                <Image style={styles.img}
                    source={require('../../../assets/banner3.png')}
                />

                <Image style={[styles.img, {marginBottom: "100%"}]}
                    source={require('../../../assets/banner4.png')}
                />
                </ScrollView>
                

                
            </View>
                
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    text:{
        marginTop:"10%",
        textAlign: "center",
        fontSize:20,
        fontWeight:"bold",
        marginBottom: '10%',
    },

    img:{
        
        width:"90%",
        height:200,
        resizeMode:"stretch",
        marginVertical: 15,

    },

    content: {
        alignItems:"center"
    }
})