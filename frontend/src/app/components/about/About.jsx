import "./about.css";

// TODO: fix problems with the keys

const About = ({ content }) => {
    const lists = content.list.map((item, index) => {
        const categoryTitle = item.listTitle;

        const listItems = item.list.map((listItem, index) => {
            return (
                <li key={`about-title ${listItem.id}-${index}}`} className="listItem">
                    <p className="listItem__title">{listItem.itemName}</p>
                    <p className="listItem__description">{listItem.itemDesc}</p>
                </li>
            );
        });

        return (
            <div key={`list ${index}`}>
                <h2 className="category__title" key={`category-title${index}`}>
                    {categoryTitle}
                </h2>
                <ul className="category__list" key={`category-list${index}`}>
                    {listItems}
                </ul>
            </div>
        );
    });

    return (
        <section id={content.identificator}>
            <div className="title__block">{content.title}</div>
            <div className="about__content">{lists}</div>
        </section>
    );
};

export default About;
