import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import homePageApi from "../api/homePageApi";

const HomePage = () => {
    const [title, setTitle] = useState("");
    const [experiments, setExperiments] = useState({
        blueHeader: false,
        redButton: false
    });

    useEffect(async () => {
        try {
            const { data } = await homePageApi.getData();

            setTitle(data.title);
            setExperiments(data.experiments);
        } catch (err) {
            console.error("Error getting homepage data.");
        }
    }, []);

    const headerClass = experiments.blueHeader ? "blue-header" : "";
    const buttonVariant = experiments.redButton ? "danger" : "primary";

    return (
        <Container>
            <h1 className={headerClass}>{title}</h1>
            <Button
                variant={buttonVariant}
            >
                Let&apos;s go!
            </Button>
        </Container>
    );
};

export default HomePage;
