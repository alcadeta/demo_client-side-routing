import React, { useEffect, useState } from "react";
import homePageApi from "./api/homePageApi";

const App = () => {
    const [title, setTitle] = useState("");

    useEffect(async () => {
        try {
            const { data } = await homePageApi.get();
            setTitle(data.title);
        } catch (err) {
            console.log("Error getting homepage data.");
        }
    }, []);

    return (
        <h1>{title}</h1>
    );
};

export default App;
