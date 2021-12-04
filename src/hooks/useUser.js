import React, { useState, useEffect } from "react";
import axios from "../services/axios";

export default function useUser(_id) {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(_id);

    const [dataUser, setDataUser] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        (async () => {
            if (id) {
                const rows = await axios.get(`/user/${id}`);
                if(rows.data._id){
                    setDataUser(rows.data);
                    setResponse({status: rows.status});
                    setLoading(false);
                }else{
                    setResponse({status: 400, msg: "User not found"});
                    setLoading(false);
                }
            } else {
               setResponse({status: 400, msg: "Not found"});
               setLoading(false);
            }
        })();
    }, [id]);

    return { dataUser, setDataUser, loading, setLoading, response, setId};
}
