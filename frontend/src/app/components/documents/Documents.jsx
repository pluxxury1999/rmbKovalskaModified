import DocumentListItem from "../documentListItem/DocumentListItem";

import { useEffect, useState } from "react";

import { getAllCategories } from "../../api/getContent";

// import "./documents.css";

const Documents = ({ content }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        });
        setLoading(false);
    }, []);

    const mainCategories = categories.map((category) => {
        return (
            <DocumentListItem key={category.id} categoryId={category.id} categoryTitle={category.attributes.title} />
        );
    });

    return (
        <section id={content.identificator}>
            <div className="title__block">{content.title}</div>
            <div >{!loading ? mainCategories.reverse() : "lost connection"}</div>
        </section>
    );
};

export default Documents;
