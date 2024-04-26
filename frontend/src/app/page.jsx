"use client";
import "./globals.css";

import { getContent } from "./api/getContent";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Documents from "./components/documents/Documents";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";

import { useState, useEffect } from "react";

function MainPage() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContent().then((data) => {
            setContent(data);
        });
        setLoading(false);
    }, []);

    return (
        <main>
            {!loading && content !==  null ? (
                <>
                    <Header content={content.header} />
                    <About content={content.about} />
                    <Documents content={content.documents} />
                    <Footer content={content.footer} />
                </>
            ) : (
                <Spinner />
            )}
        </main>
    );
}

export default MainPage;
