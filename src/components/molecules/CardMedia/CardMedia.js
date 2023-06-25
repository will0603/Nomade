import ImageCard from "@/components/atoms/ImageCard/ImageCard";
import styles from './CardMedia.module.css'

export default function CardMedia(props){
    return(
        <div className={styles.container}>
            {
                props.component == "img" && <ImageCard/>
            }
        </div>
    );
};