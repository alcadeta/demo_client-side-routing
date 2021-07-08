import React, { useState, useEffect } from "react";
import productsApi from "../api/productsApi";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [, setExperiments] = useState({});

    useEffect(() => productsApi.getProducts()
        .then(res => {
            setProducts(res.data.products);
            setExperiments(res.data.experiments);
        })
        .catch(() => console.error("Error getting homepage data.")),
    []);

    return (
        <>{JSON.stringify(products)}</>
    );
};

export default Products;
