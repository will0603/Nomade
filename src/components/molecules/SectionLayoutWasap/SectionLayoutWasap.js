import Icon from "@/components/atoms/Icon/Icon";
import styles from './SectionLayoutWasap.module.css'

const SectionLayoutWasap = (props) => {
    return(
        <div className={styles.container}>
            <Icon image={props.icon}/>
            <div>
             <a aria-label="Chat on WhatsApp" href="https://wa.me/992113372">WhatsApp</a>
             <p>{props.subtitle}</p>
            </div>
        </div>
    );
};

export default SectionLayoutWasap;