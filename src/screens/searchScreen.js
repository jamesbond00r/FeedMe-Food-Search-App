import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "./SearchBar";
import useResluts from "../hooks/useResluts";
import ResultsList from "../components/ResultsList";



const SearchScreen = ( ) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResluts();

    const filterReultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return <>
        <SearchBar term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
        />
    
        {error ? <Text>{error}</Text> : null}
        <ScrollView>
     
        <ResultsList title="Cost Effective" results={filterReultsByPrice('$')}  />
        <ResultsList title="Bit Pricier"  results={filterReultsByPrice('$$')}  />
        <ResultsList title="Big Spender" results={filterReultsByPrice('$$$')}  />
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    resultsAmount: {
    }
})

export default SearchScreen