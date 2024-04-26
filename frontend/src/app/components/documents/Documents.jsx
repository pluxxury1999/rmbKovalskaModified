import DocumentListItem from "../documentListItem/DocumentListItem";

import "./documents.css";

const Documents = ({ content }) => {

    const documents = content.documents.map((document, index) => {
        return <DocumentListItem key={'document' + index} id={document.id} document={document} />;
    });

    return (
        <section id={content.identificator}>
            <div className="documents__title">{content.title}</div>
            <div className="documentsList__wrapper">
                {documents.reverse()}
            </div>
        </section>
    );
};

export default Documents;
