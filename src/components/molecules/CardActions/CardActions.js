import ButtonAction from "@/components/atoms/ButtonAction/ButtonAction";
import styles from './CardActions.module.css'

export default function CardActions() {
    return(
        <div className={styles.container}>
            <ButtonAction title={"Mas detalles"}/>
        </div>
    );
}