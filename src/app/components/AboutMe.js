import Image from "next/image"
import profile from "../../../img/manu.jpg"

export function AboutMe(){
    return (
        <div className="flex flex-col h-screen">
            <h2 className="text-center text-4xl mb-12 text-white font-title" id="projects" >Sobre mim</h2>
            <div className="flex flex-row mx-auto">
                <div>
                    <p className="font-text p-4 text-white">Texto sobre mim</p>
                </div>
                <Image alt="Foto" src={profile} className="rounded-custom-img" width={240} height={280}>

                </Image>

            </div>
        </div>
    )
}