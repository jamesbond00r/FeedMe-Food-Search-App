import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const ResultsDetails = ({ details }) => {

    return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: details.image_url}}/>
        <Text style={styles.name}>{details.name}</Text>
        <Text>{details.rating} <Feather name="star" style={styles.stars} color="black" />s, {details.review_count} Reviews</Text>
    </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14

    },
    stars: {
        fontSize: 14,
    
    }

});


export default ResultsDetails