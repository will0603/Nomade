import SectionLayout from "@/components/molecules/SectionLayout/SectionContacto";
import { MdCall } from "react-icons/md";
import { TbClockHour2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from './Contacto.module.css'
import NomadeLogo from "@/components/atoms/Logo/NomadeLogo";
import SectionLayoutWasap from "@/components/molecules/SectionLayoutWasap/SectionLayoutWasap";

const item1 = {
    path:"path",
    title:"Mon - Sat 9:00 - 18:00",
    subtitle: "Sunday Closed",
    icon: <TbClockHour2 />
  }
const item2 = {
    path:"path",
    title:"Email",
    subtitle: "wilfredohg57@gmail.com",
    icon: <AiOutlineMail />
  }
const item3 = {
    path:"path",
    title:"Llámame",
    subtitle: "993382515",
    icon: <IoLogoWhatsapp />
  }
const Contacto = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <NomadeLogo/>
                <p>Cusco Nómade</p>
            </div>
            <div className={styles.optionsSection}>
                <SectionLayout icon={item1.icon} title={item1.title} subtitle={item1.subtitle}/>
                <SectionLayout icon={item2.icon} title={item2.title} subtitle={item2.subtitle}/>
                <SectionLayoutWasap icon={item3.icon} title={item3.title} subtitle={item3.subtitle}/>
            </div>
        </div>
    );
};

export default Contacto;
