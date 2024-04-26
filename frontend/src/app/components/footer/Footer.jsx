import './footer.css';

const Footer = ({ content }) => {
    return (
        <footer>
            <div className="title__block">
                {content.title}
            </div>
            <div className='footer__content'>
                {content.textBlock.map((item, index) => {
                    return (
                        <div key={index} className='footer__block'>
                            <h3 className='footer__block-title'>{item.paragraphTitle}</h3>
                            <p className='footer__block-text'>{item.paragraphContent}</p>
                        </div>
                    );
                })}
            </div>
        </footer>
    )
}

export default Footer;