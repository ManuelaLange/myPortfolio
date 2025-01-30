import { IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoJavascript  } from "react-icons/io5";
import { SiTypescript, SiMui,SiFirebase, SiFigma,} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import Image from "next/image";
import powerbi from "../../../img/arcticons_microsoft-power-bi.png"
import styles from "./ToolsCard.module.css"


export default function ToolsCard (){ return (

    <>
            <div className='flex flex-wrap justify-center w-full gap-12 font-text' >
                <div className={`${styles.tool}`}>
                <IoLogoCss3 size="3rem"/>
                <p className="w-max">CSS</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <IoLogoHtml5 size="3rem"/>
                <p className="w-max">HTML</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <IoLogoReact size="3rem"/>
                <p className="w-max">React</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <IoLogoJavascript size="3rem"/>
                <p className="w-max">JavaScript</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <SiTypescript size="2.82rem"/>
                <p className="w-max">TypesScript</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <RiNextjsFill size="3rem"/>
                <p className="w-max">Next.js</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <SiMui size="2.82rem"/>
                <p className="w-max">MUI</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <SiFirebase size="2.82rem"/>
                <p className="w-max">Firebase</p>
                </div>
                <div className="w-max">
                <Image src={powerbi} alt="Logo power BI" className="size-14"></Image>
                <p className="w-max">Power BI</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <SiFigma size="2.82rem"/>
                <p className="w-max">Figma</p>
                </div>
                <div className="w-max flex flex-col items-center gap-3">
                <GrMysql size="2.82rem"/>
                <p className="w-max">mySQL</p>
                </div>
            </div>
    </>
)
}