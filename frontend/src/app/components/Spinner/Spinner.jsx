import Image from "next/image";
import spinner from "./spinner.svg";

import "./spinner.css";

const Spinner = () => {
    return (
        <div className="spinner__container">
            <Image src={spinner} alt="Loading" />
        </div>
    );
};

export default Spinner;
