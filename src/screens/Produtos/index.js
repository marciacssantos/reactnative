import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Navegador from '../Navegador'

function Produtos(){
    return(
        <View style={styles.contentAll}>
            <Navegador/>
            <Text style={styles.text}>
                Produtos
            </Text>
            
                <ScrollView >
                <View style={styles.content}>
                <View  style={styles.produto}>
                    <Image style={styles.img}
                        source={require('../../../assets/microondas.jpg')}
                    />
                    <Text>Microondas Eletrolux</Text>
                    <TouchableOpacity style={styles.botao} style={styles.botao}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('../../../assets/fogao.jpg')}
                    />
                    <Text>Microondas Eletrolux</Text>
                    <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('../../../assets/geladeira.jpg')}
                    />
                    <Text>Microondas Eletrolux</Text>
                    <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('../../../assets/notebook.jpg')}
                    />
                    <Text>Microondas Eletrolux</Text>
                    <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.produto}>
                    <Image style={styles.img}
                        source={require('../../../assets/tv.jpg')}
                    />
                    <Text>Microondas Eletrolux</Text>
                    <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

            </View>
                </ScrollView>
                

        </View>
    )
}

const styles = StyleSheet.create({
    contentAll:{
        backgroundColor:"white",
        alignItems:"center"
    },

    content:{
        justifyContent:"center",
        alignItems:'center',
        textAlign:"center",
        backgroundColor:"white",
        marginBottom: 150
    },

    text:{
        marginTop:"10%",
        textAlign: "center",
        fontSize:20,
        fontWeight:"bold",
        marginBottom: '10%',
    },

    img:{
        resizeMode:"stretch",
    },
    
    botao:{
        backgroundColor:"orange",
        width:90,
        padding:13,
        marginTop: 20,
        borderRadius:35
        
    },

    textBtn:{
        color:"white",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold"
    },

    produto: {
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:70,
    }
})
export default Produtos