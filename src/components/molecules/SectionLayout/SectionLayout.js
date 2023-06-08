import Icon from "@/components/atoms/Icon/Icon";
import styles from './SectionLayout.module.css'

const SectionLayout = (props) => {
    return(
        <div className={styles.container}>
            <Icon image={props.icon}/>
            <div>
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
};

export default SectionLayout;