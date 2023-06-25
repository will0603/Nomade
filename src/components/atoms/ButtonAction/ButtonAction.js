import styles from './ButtonAction.module.css'

export default function ButtonAction (props) {
    return(
        <>
            <button><strong>{props.title}</strong></button>
        </>
    );
}