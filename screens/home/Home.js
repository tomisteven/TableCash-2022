import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {
    useFonts,
    JosefinSans_400Regular

} from '@expo-google-fonts/josefin-sans';
import {
    Jost_500Medium,
    Jost_400Regular
} from "@expo-google-fonts/jost"
import {
    JosefinSlab_400Regular
} from "@expo-google-fonts/josefin-slab"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Home =  (props) => {


    let [fontsLoaded] = useFonts({
       JosefinSans_400Regular,
         Jost_400Regular,
         JosefinSlab_400Regular
    });
    

    Font.loadAsync({
        'josefin': JosefinSans_400Regular,
        'jost': Jost_400Regular,
        'slab' : JosefinSlab_400Regular
        
      }).then(() => {
        SplashScreen.hideAsync();
      }).catch(() => {
        SplashScreen.preventAutoHideAsync();
      }).done();

    return (
        <>
        <View style={styles.purple}></View>
        <View style={styles.container}>
            {
                fontsLoaded ? (
                    <>
                    <View style={styles.home_title}>
                <Image style={styles.home_img} source={require('../../assets/avatar.png')} />
                <Text style={styles.home_title_text}><Text style={{fontWeight:"300"}}>Hola,</Text> Tomas!</Text>
            </View>
            
                <LinearGradient  start={{x:0.3, y:1.4}} colors={[ '#D8D4DB', '#C6C2D1','#C4B6EC']} style={styles.home_panel_gastos}>
                    <View style={styles.panel_title}>
                        <Text style={styles.panel_title_text}>Gastos Generales</Text>
                    </View>
                    <View style={styles.panel_gastos_generales}>
                        <View style={styles.panel_gastos}>
                            <Text style={styles.panel_gastos_text}>$ 21.000</Text>
                        </View>
                        <View style={styles.panel_mes_anio}>
                            <TouchableHighlight style={styles.panel_mes}>
                                <Text style={styles.panel_mes_text}>M</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.panel_anio}>
                                <Text style={styles.panel_mes_text}>A</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.panel_saldos}>
                        <View style={styles.panel_saldo_total_restante}>
                            <View style={styles.panel_total}>
                                <Text style={styles.panel_total_text}>Saldo Total</Text>
                                <Text style={styles.panel_total_precio}>$150.000</Text>
                            </View>
                            <View style={styles.panel_total}>
                                <Text style={styles.panel_total_text}>Saldo Restante</Text>
                                <Text style={styles.panel_total_precio}>$80.000</Text>
                            </View>
                        </View>
                        <View style={styles.panel_agregar_1000}>
                            <TouchableHighlight style={styles.panel_1000}>
                                <Text style={styles.panel_agregar_1000_btn_text}>+ $1000</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.panel_1000}>
                                <Text style={styles.panel_agregar_1000_btn_text}>- $1000</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </LinearGradient>
                    
            
            <View style={styles.home_actions_buttons}>
                <View style={styles.action_button_item}>
                    <TouchableHighlight style={styles.action_button_touch}>
                        <Image style={styles.action_button_img} source={require('../../assets/agregarpago.png')} />
                    </TouchableHighlight>
                    <Text style={styles.action_button_title}>Agregar Pago</Text>
                </View>
                <View style={styles.action_button_item}>
                    <TouchableHighlight style={styles.action_button_touch}>
                        <Image style={styles.action_button_img} source={require('../../assets/grafico.png')} />
                    </TouchableHighlight>
                    <Text style={styles.action_button_title}>Ver Grafico</Text>
                </View>
                <View style={styles.action_button_item}>                
                    <TouchableHighlight style={styles.action_button_touch}>
                        <Image style={styles.action_button_img} source={require('../../assets/gastos.png')} />
                    </TouchableHighlight>
                    <Text style={styles.action_button_title}>Gastos</Text>
                </View>
            </View>
            <View style={styles.home_title_list}>
                <Text style={styles.home_title_list_text}>Ultimos Pagos</Text>
            </View>
            <View style={styles.home_list_gastos}></View>
            </>

                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )
            }
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },

    //titulo

    home_title: {
        width: '95%',
        marginTop: 20,
        height: '3%',
        position: 'relative',
        top: 7,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    home_img: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    home_title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    //panel de gastos

    home_panel_gastos: {
        width: '97%',
        height: '22%',
        borderRadius: 30
    },
    panel_title:{},
    panel_title_text: {
        fontSize: 18,
        fontFamily: 'jost',
        color: '#fff',
        marginLeft: 18,
        marginTop: 10
    },
    panel_gastos_generales: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    panel_gastos: {
        width: '50%',
        
    },
    panel_gastos_text: {
        fontSize: 40,
        fontFamily: 'josefin',
        color: '#fff',
        marginLeft: 15,
        marginTop: 10
    },
    panel_mes_anio: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 25
    },
    panel_mes_text: {
        fontSize: 15,
        fontFamily: 'josefin',
        color: '#fff'
    },
    panel_mes: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#33B955',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    panel_anio: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#fff4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

    panel_saldos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    panel_total: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff3',
        borderRadius: 15,
        height: 70,
        margin: 5
    },
    panel_saldo_total_restante: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        width: '50%'
    },
    panel_total_text: {
        fontSize: 15,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'josefin',
        color: '#fff'
    },
    panel_total_precio: {
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'slab',
        color: '#fff',

    },
    panel_agregar_1000: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    panel_1000 : {
        width: 55,
        height: 35,
        borderRadius: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    panel_agregar_1000_btn_text: {
        fontSize: 14,
        fontFamily: 'slab',
        color: '#000'
    },

    //botones de acciones
    home_actions_buttons: {
        width: '95%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15
    },
    action_button_item:{
        width: '25%',
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#82AFF2',  
        borderRadius: 20,
    },
    action_button: {
        width: "23%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_button_touch: {
        width: 60,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    action_button_title: {
        fontSize: 14,
        fontFamily: 'josefin',
        color: '#fff',
        marginTop: 10
    },
    action_button_img: {
        width: 50,
        height: 50,
    },

    //titulo de lista
    home_title_list: {
        width: '95%',
        height: '4%',
    },
    home_title_list_text: {
        fontSize: 22,
        fontFamily: 'josefin',
        color: '#000',
        marginLeft: 18,
        marginTop: 15
    },

    //lista de gastos
    home_list_gastos: {
        width: '98%',
        height: '45%',
        backgroundColor: '#000',
        borderRadius: 10

    },
    purple: {
        width: '100%',
        height: '42%',
        position: 'absolute',
        backgroundColor: '#663DD9',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
})

export default Home