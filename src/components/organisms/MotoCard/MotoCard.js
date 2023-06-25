import CardActions from "@/components/molecules/CardActions/CardActions";
import CardContent from "@/components/molecules/CardContent/CardContent";
import CardMedia from "@/components/molecules/CardMedia/CardMedia";
import { CardActionArea } from "@material-ui/core";
import style from './MotoCard.module.css'

export default function MotoCard(){
    return(
        <div className={style.container}>
            <div className={style.price}>
                <strong>35 USD</strong>
            </div>
            <CardMedia component={"img"}/>
            <CardContent/>
            <CardActions/>
        </div>
    );
};