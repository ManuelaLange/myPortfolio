import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io5";

export default function Contact () {
    return (
        <div className='flex flex-col items-center p-6'>
        <h2 className='text-center text-3xl text-white font-title mb-7' >Entre em contato! </h2>
    <div className='bg-[#4b556387] flex flex-col p-6 w-[635px] rounded-lg gap-4'>

        <form >
                <div className="flex flex-col gap-1 mb-2">
        <h4 className='text-white font-text'>Nome</h4>
        <input type='text'className='border border-black rounded-md bg-[#4b5563] border-none px-2 py-1'></input>
                </div>
                <div className="flex flex-col gap-1 mb-2">
        <h4 className='text-white font-text'>E-mail</h4>
        <input type='address'className='border border-black rounded-md bg-[#4b5563] border-none px-2 py-1'></input>
                </div>

            <div className=" flex flex-col gap-1 mb-5">
        <h4 className='text-white font-text'>Menssagem</h4>
        <input type='text'className='bg-[#4b5563] h-[5em] border border-black rounded-md border-none px-2 py-1'></input>
            </div>
            <div className="flex justify-center mt-3">
        <button className="font-text text-center bg-[#F97316] text-white p-2 w-max rounded-lg hover:shadow-customHover transition-shadow duration-300 ">Enviar mensagem</button>

            </div>
        </form>
            <div className="flex flex-row gap-5 items-center justify-center">
                <IoLogoGithub size="2.5rem" color="white" cursor="pointer"/>
                <IoLogoLinkedin size="2.5rem" color="white" cursor="pointer"/>
            </div>
    </div>
</div>
    )
}