import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";



export default function DrinkMenu() {

    const [text, onChangeText] = useState("");

    return (
        <View style={[styles.container, styles.center]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={[ styles.center ]}>
            <ImageBackground
                source={require('../assets/images/BarBackground.png')}
                style={[ styles.center, { width: '100%', height: '100%'}]}
                resizeMode="cover"
            >
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 500}
                    style={[ styles.center, { flex: 1, width: "100%", justifyContent: 'flex-end', marginBottom: 250  } ]}
                >
                    <Text style={styles.text}>What'll it be?</Text>
                    <CustomInput
                        placeholder="Search for a drink..."
                        value={text}
                        onChangeText={onChangeText}
                        secureTextEntry={false}
                        extraStyles={{ width: '80%', height: 60 }}
                    />
                </KeyboardAvoidingView>
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


    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(68, 0, 79, 1)'
    },
    text: {
        color: "white",
        fontSize: 38,
        fontFamily: "jit",
        marginBottom: 15,
    },
});