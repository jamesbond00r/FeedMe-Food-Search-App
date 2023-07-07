import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (<View style={styles.backgroundStyle}> 
     <FontAwesome5 name="search-location" style={styles.searchIconStyle} color="black" /> 
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.SearchBarStyle} 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#e4ebf7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    SearchBarStyle:{
        flex: 1,
        fontSize: 18
    },
    searchIconStyle:{
        fontSize: 30,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar