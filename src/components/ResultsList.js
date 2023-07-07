import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results, navigation }) => {
    
    if(!results.length){
        return null
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleSytle}>
               {title}
            </Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={( item ) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.item.id})}>
                <ResultsDetails details={item.item} />
                </TouchableOpacity>
                )
            }}

            />
        </View>
    )
};


const styles = StyleSheet.create({

    titleSytle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 20,
    }


});

export default withNavigation(ResultsList);