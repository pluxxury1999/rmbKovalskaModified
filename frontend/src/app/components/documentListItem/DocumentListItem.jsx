import Image from "next/image";
import { useEffect, useState } from "react";

import { getDocuments } from "@/app/api/getContent";

import close from "./arrowClose.png";
import open from "./arrowOpen.png";

import "./documentListItem.css";

const DocumentListItem = ({ document, id }) => {
    const [isActive, setActive] = useState(false);
    const [documents, setDocuments] = useState(null);

    const categoryId = id;

    const classes = `documentItem__wrapper ${isActive ? "active" : ""}`;
    const imgUrl = isActive ? open : close;
    const imgAlt = isActive ? "openedCategory" : "closedCategory";

    const uploadsUrl = process.env.NEXT_PUBLIC_UPLOADS_URL;

    useEffect(() => {
        if (isActive) {
            getDocuments(categoryId).then((data) => {
                setDocuments(data.documents.data);
            });
        }
    }, [isActive]);

    const documentsList = documents
        ? documents.map((doc) => {
              return (
                  <a key={doc.id} className="document__link" href={uploadsUrl + doc.attributes.document.data.attributes.url} target="_blank" rel="noopener noreferrer">
                      {doc.attributes.name}
                  </a>
              );
          })
        : "no data exists";

    return (
        <div className={classes}>
            <div onClick={() => setActive(!isActive)} className="document__header">
                <p className="document__title">{document.categoryName}</p>
                <Image src={imgUrl} alt={imgAlt} />
            </div>
            <div className="document__body">{documentsList}</div>
        </div>
    );
};

export default DocumentListItem;
