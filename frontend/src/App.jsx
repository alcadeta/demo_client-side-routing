import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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
        <Container>
            <h1 className="home-title">{title}</h1>
            <Button>BABAN</Button>
        </Container>
    );
};

export default App;
