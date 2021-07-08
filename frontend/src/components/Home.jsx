import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import homeApi from "../api/homeApi";

const Home = () => {
    const [title, setTitle] = useState("");
    const [experiments, setExperiments] = useState({
        blueHeader: false,
        redButton: false
    });

    useEffect(async () => {
        try {
            const { data } = await homeApi.getData();
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
            <Link to="/products">
                <Button
                    variant={buttonVariant}
                >
                    Let&apos;s go!
                </Button>
            </Link>
        </Container>
    );
};

export default Home;
