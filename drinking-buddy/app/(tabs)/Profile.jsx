import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Profile() {
    return (
        <LinearGradient 
            colors={['rgb(125, 0, 144)', 'rgba(68, 0, 79, 1)', 'rgba(68, 0, 79, 1)', 'rgb(125, 0, 144)', 'rgba(68, 0, 79, 1)']}
            locations={[0, .25, .45, .53, .85, 1]}
            style={[ styles.container, styles.center ]}
        >
            <View style={[ styles.center, { height: '25%',  } ]}>
                <Text style={ styles.text }>Drinks Made:</Text>
                <Text style={[ styles.text, { marginTop: 8, marginBottom: 8 } ]}>0</Text>
                <Text style={ styles.text }>Games Played:</Text>
                <Text style={[ styles.text, { marginTop: 8 } ]}>0</Text>
            </View>

            <View style={[ styles.profilePicView, styles.center ]}>
                <View style={[ styles.pp, styles.center ]}> 
                    <Ionicons name="person" size={90} color="white" />
                </View>
            </View>
            <View style={[ styles.center, styles.cardContainer, ]}>
                    <TouchableOpacity style={[ styles.center, styles.card, { backgroundColor: "#67008B" } ]} >
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between',  }}>
                            <Text style={[ styles.text, { marginLeft: 15 } ]}> Name</Text>
                            {/* <View style={styles.profilePic} /> */}
                            <Text style={[ styles.text, { marginRight: 15 } ]}> Name</Text>
                        </View>
                        <View style={[styles.center, {marginTop: 18}]} >
                            <Text style={[ styles.text, { fontSize: 35 } ]}>
                                [NAME_HERE]
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.card ]} >
                        <View style={{ width: '50%', height: '100%', borderRadius: 20, justifyContent: 'space-between' }}>
                            <Text style={[ styles.text, { fontSize: 20, marginTop: 15, color: 'black' } ]}>Most Recent...</Text>
                            <Text style={[ styles.text, { fontSize: 20, marginBottom: 15, marginLeft: 15, color: 'black' } ]}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.center, styles.card, { overflow: 'hidden', paddingLeft: 0, paddingRight: 0} ]} >
                        <LinearGradient 
                            colors={['#A80BC1', '#67008B']} 
                            style={{ width: '100%', height: '100%' }}
                        >
                            <ImageBackground 
                                source={require('../assets/images/History Background.png')}
                                style={{ width: '100%', height: '100%', marginTop: 5}} 
                            >
                                <Text style={[ styles.text, { color: 'white', marginLeft: 20, marginTop: 10 }]}>History...</Text>
                            </ImageBackground>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },


    container: {
        flex: 1,
        backgroundColor: 'rgba(68, 0, 79, 1)'
    },
    text: {
        color: "white",
        fontSize: 26,
        fontFamily: "jit"
    },
    // profilePic: {
    //     // height: "230%",
    //     height: '215%',
    //     width: "20%",
    //     borderRadius: 35,
    //     // borderWidth: 7,
    //     borderColor: "rgba(68, 0, 79, 1)",
    //     backgroundColor: 'grey',
    //     transform: [{ translateY: '-100%' }, { scale: 2 }],

    // },
    
/************************************
*    Proile Picture 'ABSOLUTE' View 
*************************************/
    profilePicView: {
        position: 'absolute',
        // height: 150,
        height: "17%",
        // width: 150,
        width: "37%",
        borderRadius: 75,
        backgroundColor: 'rgba(68, 0, 79, 1)',
        top: '24%',
        left: '32%',
        zIndex: 1,
    },
    pp: {
        height: '83%',
        width: '83%',
        borderRadius: "50%",
        backgroundColor: 'grey',
    },

/************************************
 *   Profile Cards View
 * ***********************************/
    cardContainer: {
        width: '100%', 
        height: '65%',
        // justifyContent: 'space-around',

        marginBottom: 20,
    },
    card: {
        width: '80%', 
        height: '25%', 
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
});