import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomInput({ placeholder, value, onChangeText, secureTextEntry, extraStyles }) {
    return (
        <LinearGradient 
            colors={['#DC00FF', '#FF532C']} 
            style={[styles.container, extraStyles]}
            // start={{ x: 0, y: 0.5 }} // Start point (consistent y-coordinate)
            // end={{ x: 1, y: 0.5 }}
        >
            <View style={styles.back} >
                <View
                    
                    style={styles.inputBox}
                > 
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                        value={value}
                        onChangeText={onChangeText}
                        
                        secureTextEntry={secureTextEntry}
                        style={styles.input}
                    />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "85%",
        height: '40%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(68, 0, 79, 1)',
        borderRadius: 68,
        // paddingTop: 30,

    },
    inputBox: {
        height: '100%',
        width: '100%',
        borderRadius: 68,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 129, 101, 0.35)',
    },
    input: {
        height: 50,
        width: '100%',
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: "jbold",
        color: "white",
    },
    back: {
        width: "98%",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 68,
        backgroundColor: '#44004F',
    },
});