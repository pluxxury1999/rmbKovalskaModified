import Image from "next/image";
import { useEffect, useState } from "react";

import { getCategoryById } from "@/app/api/getContent";

import close from "./arrowClose.png";
import open from "./arrowOpen.png";

// import "./documentListItem.css";

const DocumentListItem = ({ categoryId, categoryTitle }) => {
    const [active, setActive] = useState(false);
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (active === true) {
            getCategoryById(categoryId).then((data) => {
                setContent(data);
            });
        }
    }, [active]);

    return (
        <>
            <div>
                <h2 onClick={() => setActive(!active)}>{categoryTitle}</h2>
                <Image src={active ? open : close} alt="arrow" />
            </div>
            {active && content !== null ? <View content={content} /> : null}
        </>
    );
};

const View = ({ content }) => {
    const docsUrl = process.env.NEXT_PUBLIC_UPLOADS_URL;


    const docs = content.attributes.documents.data.map((doc) => {
        return (
            <a key={doc.id} href={docsUrl + doc.attributes.document.data.attributes.url} target="_blank">
                {doc.attributes.name}
            </a>
        );
    });

    const subCategories = content.attributes.subCategories.data.map((subCategory) => {
        return (
            <DocumentListItem
                key={subCategory.id}
                categoryId={subCategory.id}
                categoryTitle={subCategory.attributes.title}
            />
        );
    });

    const checkSubCategories = content.attributes.subCategories.data.length > 0;


    return (
        <>
            {docs}
            {checkSubCategories ? subCategories : null}
        </>
    ) 
};

export default DocumentListItem;

