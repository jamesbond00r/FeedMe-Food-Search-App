import { useEffect, useState } from "react";
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const searchApi = async (searchTerm) => {
        try{
             const response = await yelp.get('/search',{
                params: {
                    limit: 25,
                    term: searchTerm,
                    location: 'wichita'
                }
            });
            setResults(response.data.businesses)
            setError('')

        } catch(err) {
            
            setError('Sorry we had a network error please try again later.')

        }
           
    };

    //Start the app off with some data
    useEffect(() => {
        searchApi('fish')
    }, [])

    return [searchApi, results, error]
}