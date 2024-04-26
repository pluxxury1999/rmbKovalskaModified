import DocumentListItem from "../documentListItem/DocumentListItem";

import "./documents.css";

const Documents = ({ content }) => {

    return (
        <section id={content.identificator}>
            <div className="title__block">{content.title}</div>
            <div className="documents__wrapper">
                <p>some content</p>
            </div>
        </section>
    );
};

export default Documents;
