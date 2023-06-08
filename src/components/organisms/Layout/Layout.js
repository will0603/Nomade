import SectionLayout from "@/components/molecules/SectionLayout/SectionLayout";
import { MdCall } from "react-icons/md";
import { TbClockHour2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import styles from './Layout.module.css'

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
    icon: <MdCall />
  }
const Layout = () => {
    return(
        <div className={styles.container}>
            <div>
                <h1>Aqui va el LOGO</h1>
            </div>
            <div className={styles.optionsSection}>
                <SectionLayout icon={item1.icon} title={item1.title} subtitle={item1.subtitle}/>
                <SectionLayout icon={item2.icon} title={item2.title} subtitle={item2.subtitle}/>
                <SectionLayout icon={item3.icon} title={item3.title} subtitle={item3.subtitle}/>
            </div>

        </div>
    );
};

export default Layout;
