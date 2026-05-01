import React, { createContext, useEffect, useState } from 'react';

export const datasContext = createContext();

const DatasProvider = ({children}) => {
const [friends , setFriends] = useState([]);
const [loading,setLoading] = useState(true);
const [interactions,setInteractions] = useState([]);
const handleInteration = (id,name,protocol) => {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-us",{
        month:"short",
        day:"numeric",
        year: "numeric"
    })
    const data ={
        id,
        name,
        protocol,
        date,
    }
    setInteractions([...interactions,data]);
}

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then (data => {
            setFriends(data);
            setLoading(false)
        })
    },[]);

    const data ={
        friends,
        setFriends,
        interactions,
        setInteractions,
        handleInteration,
        loading,
        setLoading
    }
    return (
       <datasContext.Provider value={data}>
        {children}
       </datasContext.Provider>
    );
};

export default DatasProvider;