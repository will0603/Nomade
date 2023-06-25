import styles from './CardContent.module.css'

export default function CardContent() {
    return(
        <div className={styles.container}> 
            <h2>Moto Honda</h2>
            <span>
                Esta moto es la mejor de todas, debes obtener yá
            </span>
        </div>
    );
};