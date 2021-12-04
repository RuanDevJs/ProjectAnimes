import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../services/axios";

export default function useAuhtenticate(){
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuhtenticated] = useState(false);

    const [id, setId] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const getId = window.localStorage.getItem("_id");
        if(getId){
            setId(getId);
            setAuhtenticated(true);
            setLoading(false);
        }else{
            setLoading(false)
        }
    }, []);

    async function SignOut({name, email, password}){
        try{
            const rows = await (await axios.post("/user", {
                name: name,
                email: email,
                password: password
            })).data;
            setId(rows._id);
            window.localStorage.setItem('_id', rows._id);
            setLoading(false);
            setAuhtenticated(true);
            history.push("/");
        }catch(e){
            return e;
        }
    }

    async function SignIn({email, password}){
        try{
            const rows = await (await axios.post("/login", {
                email: email,
                password: password
            })).data;
            setId(rows._id);
            window.localStorage.setItem('_id', rows._id);
            setLoading(false);
            setAuhtenticated(true);
            history.push("/");
        }catch(e){
            return e;
        }
    }

    function LogOut(){
        window.localStorage.removeItem("_id");
        setId(null);
        setAuhtenticated(false);
    }

    return {SignIn, SignOut, LogOut, loading, setAuhtenticated, authenticated, id}
}
