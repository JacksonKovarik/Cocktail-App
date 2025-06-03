import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import HomeCard from "../components/HomeCard";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";


export default function Home() {

    const [drinks, setDrinks] = useState([]);

    const data = async () => {
        try {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const json = await response.json();
            setDrinks(json.drinks);
        } catch (error) {
            console.error(error);
        } finally {
            // console.log(drinks);
        }
        
    }
        
    useEffect(() => {
        data();
    }, []);

    return (
        <LinearGradient 
            style={{ flex: 1, width: '100%', height: '100%', zIndex: -1, position: 'absolute',} }
            colors={['rgba(18, 0, 71, 1)', 'rgb(33, 0, 39)', 'rgba(68, 0, 79, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, .4, 1]}
            useAngle={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <ScrollView style={[ styles.container, { paddingTop: 100 } ]} >
                <View style={{ marginLeft: 30, marginBottom: 50 }}>
                    <Text style={styles.text}>Choose</Text>
                    <Text style={styles.text}>your drink</Text>
                </View>
                <View style={{ flex: 1, marginBottom: 100, alignItems: 'flex-end' }}>
                    {drinks.slice(0, 5).map((drink) => (
                        <HomeCard
                            key={drink.idDrink}
                            title={drink.strDrink}
                            description={drink.strCategory}
                            image={{ uri: drink.strDrinkThumb }}
                        />
                    ))}
                    <HomeCard
                        title="Margarita"
                        description="A classic cocktail"
                        image={require('../assets/images/Marg.png')}
                        extraStyles={{ transform: [{  }] }}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        // backgroundColor: 'rgba(68, 0, 79, 1)',
    },
    text: {
        fontSize: 50,
        color: '#fff',
        fontFamily: 'jit',
    },

    blob1: {
        position: 'absolute',
        top: 100,
        left: -100,
        width: 300,
        height: 300,
        backgroundColor: 'rgb(0, 67, 144)',
        borderRadius: 150,
        overflow: 'hidden',

        zIndex: -1,
    },
});