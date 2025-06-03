import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";


export default function HomeCard({ title, description, image, extraStyles }) {
    const [likeIcon, setLikeIcon] = useState('heart-outline');
    const [likeColor, setLikeColor] = useState('white');

    const handleLikePress = () => {
        setLikeIcon(likeIcon === 'heart-outline' ? 'heart' : 'heart-outline');
        setLikeColor(likeColor === 'white' ? 'red' : 'white');
    }

    return (
        <TouchableOpacity 
            style={{ flex: 1, width: '65%', alignItems: 'center' }} 
            onPress={() => console.log(`Pressed ${title}`)}
        >
            <ImageBackground 
                source={image}
                style={styles.card}
                imageStyle={{ borderRadius: 15, alignSelf: 'center', height: '115%', width: '121%',
                    filter: 'hue-rotate(270deg) saturate(1.2) brightness(0.8)'

                 }}
                // resizeMode="cover"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity 
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={handleLikePress}
                    >
                        <Ionicons name={likeIcon} size={23} color={likeColor} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* <View style={styles.purpleOverlay} /> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 320,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        // flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        marginRight: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 22,
        // fontWeight: 'bold',
        fontFamily: 'jreg',
        color: '#fff',
        // marginRight: 10,
        width: '80%',
    },
    description: {
        fontSize: 14,
        color: '#ccc',
    },
    purpleOverlay: {
        position: 'absolute',
        top: 10,
        left: 12,
        right: 12,
        bottom: 8,
        backgroundColor: 'rgba(52, 0, 172, 0.25)', // Purple with 25% opacity
        borderRadius: 12,
    },
});