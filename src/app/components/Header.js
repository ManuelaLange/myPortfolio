'use client'

import styles from "./StyleHeader.module.css"

export function Header(){
    return(
        <> 
    <div className=" flex flex-row fixed top-0 left-0 w-full p-4 bg-gray-800 shadow-lg z-20 items-center h-16  ">
        <div className="flex-none">
            <h4 className="text-white font-semibold text-lg w-min"
            style={{ fontFamily: "Quantico, sans-serif"}}>ManuelaLange</h4>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex flex-row gap-10  text-white w-max" style={{ fontFamily: "Chakra Petch, sans-serif"}}>

            <li><a href="#about" className={`${styles.button}`}>//Sobre mim</a></li>
            <li><a href="#myProjects" className={`${styles.button}`} >//Meus projetos</a></li>
            <li><a href="#tools" className={`${styles.button}`}>//Ferramentas</a></li>
            <li><a href="#habilits" className={`${styles.button}`}>//Habilidades</a></li>
            <li><a href="#contact" className={`${styles.button}`}>//Contato</a></li>
        </ul>

        </div>
    </div>
        </>
    )
}