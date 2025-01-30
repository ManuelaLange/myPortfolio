'use client'

import  Cards from './components/Cards';
import ToolsCard from './components/ToolsCard';
import Cube from './components/Cube';
import Contact from './components/Contact';
import { AboutMe } from './components/AboutMe';



export default function Page() {
    return (
    <div className=' mx-16  mb-6 px-16'>

<div className='min-h-screen'>
<div className="flex flex-col items-center justify-center pt-80" >
    <div className='flex flex-col z-10 items-center  justify-center '>
    <h3     
      className="font-bold text-7xl text-center text-white font-title"
    >
      Manuela Pereira Lange
    </h3>
    <h5
      className="text-xl text-center text-white font-text"
    >
      *Desenvolvedora Web Júnior*
    </h5>
    </div>

  <div className="absolute z-0 flex justify-center">
    <Cube  />
  </div>   
</div>
    <div className="flex flex-row h-min justify-center align-center gap-10 pt-36">
      <button className="bg-[#F97316]  hover:shadow-customHover shadow-black px-4 py-3 rounded-md transition-shadow duration-300 text-white font-medium z-10 font-text text-lg">
        Entre em contato
      </button>
      <button className="border border-[#F97316] text-white px-4 py-3 rounded-md font-medium cursor-pointer transition-shadow duration-300 hover:shadow-customHover z-10 font-text text-lg">
        Sobre mim
      </button>
    </div>
    </div>
    <AboutMe/>



        <div className ="flex flex-col justify-center min-h-screen">
                
            <h2 className="text-center text-4xl mb-12 text-white font-title" id="projects" >Meus projetos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-auto">
            <Cards tools={['JavaScricpt','React','Firebase']} nameProject={"Cosulta de receitas"} description={'Um site onde é possível cadastrar suas receitas e consultar as receitas cadastradas por outros usuários'}/>
            <Cards tools={['JavaScricpt', 'React']} nameProject={"To do list"} description={'Gerenciamento de lista de tarefas'}/>    
            <Cards tools={['JavaScricpt', 'React']} nameProject={"Gerenciador de viagens"} description={'Gerenciador de viagens'}/>    
            <Cards tools={['JavaScricpt', 'React']} nameProject={"Gerenciador de projetos"} description={'Fazer o gerenciamento dos projetos'}/>    
            <Cards tools={['JavaScricpt', 'React']} nameProject={"Site de docinhos"} description={'Site com cadarpio de docinhos'}/>    
            </div>



        </div>
        <div className ="flex flex-col justify-center min-h-screen font-title">
        <div className='mb-24 text-white'>
            <h2 className="text-center p-4 text-4xl text-white mb-12 font-title" id="tools">Ferramentas/Linguagens</h2>
            <ToolsCard/>
        </div>
        <div className='text-white '>
            <h2 className="text-center p-4 text-4xl mb-12 font-title" id="hability">Habilidades</h2>
            <div className='flex flex-wrap justify-center gap-8 font-title'>
                <p className="text-center border border-white rounded-md p-2">Trabalho em equipe</p>
                <p className="text-center border border-white rounded-md p-2">Metodologia ágil</p>
                <p className="text-center border border-white rounded-md p-2">Comunicação</p>
                <p className="text-center border border-white rounded-md p-2">Proatividade</p>
                <p className="text-center border border-white rounded-md p-2">Flexibilidade/Adaptação</p>
                <p className="text-center border border-white rounded-md p-2">Resolução de problemas</p>
                <p className="text-center border border-white rounded-md p-2">Inglês intermediário</p>
            </div>

        </div>

        </div>
        <div className='flex flex-col min-h-screen mt-10'>

      <Contact/>
        <div className='grid grid-cols-2 p-4'>
                <div className='flex flex-row w-max gap-6 items-center justify-center ' >
                <h2 className='text-center text-3xl text-white font-title' >Quer saber mais sobre minha tragetória?</h2>
            <button className="font-text text-center bg-[#F97316] text-white px-4 py-3 w-max rounded-lg shadow-button hover:shadow-customHover transition-shadow duration-300 ">Acesse meu currículo</button>

                </div>
        </div>
        </div>
        </div>
    )
  }

  // Colocar as habilidades em um map
  // fazer a parte de "sobre mim"