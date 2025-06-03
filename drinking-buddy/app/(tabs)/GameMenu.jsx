import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CustomInput from "../components/CustomInput";



export default function GameMenu() {
    return (
        <View style={[{ flex: 1, backgroundColor: 'rgba(68, 0, 79, 1)', paddingTop: 30 }, styles.center]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require("@/app/assets/images/House.png")} style={[{ width: "100%", height: "90%", marginBottom: 100, }, styles.center ]} >
                {/* <View style={ styles.inputBox }> */}
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 500}
                        style={[ styles.center, { flex: 1, width: "100%", justifyContent: 'flex-end', marginBottom: 100 } ]} 
                    >
                        <Text style={styles.text}>What sounds fun?</Text>
                        <CustomInput
                            placeholder="Type here......"
                            value=""
                            onChangeText={() => { }}
                            secureTextEntry={false}
                            extraStyles={{ width: '80%', height: 60 }}
                        />
                    </KeyboardAvoidingView>
                {/* </View> */}
            </ImageBackground>
            
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        height: "100%",
        width: '80%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 580
    },
   text: {
        color: "white",
        fontSize: 35,
        fontFamily: "jit",
        marginBottom: 15,
    },
});