import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io5";

export default function Footer(){
    return(
        <div className="flex flex-row justify-between py-4 px-7 h-28 bg-[#4b556387] items-center">
            <p className="font-text text-lg text-white">ManuelaLange</p>
            <div className="flex flex-row gap-3">
                <IoLogoGithub size="2.5rem" color="white"/>
                <IoLogoLinkedin size="2.5rem" color="white"/>
            </div>
        
        </div>
    )
}