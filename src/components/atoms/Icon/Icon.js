
import styles from './Icon.module.css'

const Icon = (props) => {
    return(
        <div className={styles.main}>
            {props.image}
        </div>
    );
};

export default Icon;