import "./header.css";

const Header = ({ content }) => {

    const menuItems = content.links.map((item, index) => {
        return (
            <li key={`header ${index}`}>
                <a className="menuLink" href={item.href}>
                    {item.title}
                </a>
            </li>
        );
    });

    const imgUrl = process.env.NEXT_PUBLIC_UPLOADS_URL;

    // TODO: rework title block (blur issue)

    return (
        <header className="header">
            <img className="header__logo" src={imgUrl + content.logo.data.attributes.url} alt={content.logo.data.attributes.name} />
            <div className="header__redBox">
                <h1 className="header__title" dangerouslySetInnerHTML={{ __html: content.title }} />
                <p className="header__subtitle">{content.subtitle}</p>
            </div>
            <nav>
                <ul className="header__menu" >
                    {menuItems}
                </ul>
            </nav>
            <img className="header__bgImg" src={imgUrl + content.backgroundImg.data.attributes.url} alt={content.backgroundImg.data.attributes.name} />
        </header>
    );
};

export default Header;
