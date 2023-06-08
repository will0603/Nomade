
import styles from './Icon.module.css'
import Image from "next/image";

const Icon = (props) => {
    return(
        <div className={styles.main}>
            {props.image}
        </div>
    );
};

export default Icon;