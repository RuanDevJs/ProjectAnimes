import React, {useState, useEffect} from 'react';
import axios from "../services/axios";

export default function usePosts() {
    const [loading, setLoading] = useState(true);
    const [dataPosts, setDataPosts] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        (async() => {
            try{
                const res = await axios.get("/posts");
                setDataPosts(res.data);
                setResponse(res.status);
                setLoading(false);
            }catch (e){
                setLoading(false);
                return e;
            }
        })()
    }, []);

    return {loading, dataPosts, response}
}
