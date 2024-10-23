import React from 'react'
import './About.css'
import about_img1 from '../../assets/yankiis.png'


const About = () => {
    return (
        <div id='sobre-nos' className='about-us'>
            <div className='about-left'>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src={about_img1} alt="yankii" />
                </div>
            </div>

            <div className='about-right' data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1500">
                <h1>Sobre Nós</h1>
                <h2 className='about'><i>Estamos em busca dos melhores</i></h2>
                <p>Somos uma das famílias mais recentes da Cidade dos Anjos e uma das que mais crescem atualmente. Fundada em 2024, com uma temática japonesa, os Yankiis tem características únicas e próprias que os diferem dos demais.</p><br></br>
                <p>Somos uma família com cores em destaque de Ciano e Preto e estão sempre com uma katana nas costas na cor azul. São destemidos e honrados em combate sempre preservando o bem estar dos membros e convivendo em união.</p><br></br>
                <p>Trabalhamos especificamente com attachs, como silenciadores, mira holográfica, pente estendido, lanterna tática e empunhaduras. Além da nossa mais recente conquista que foi a aquisição do aprendizado de Coletes. Esperamos que se juntem a nós I AZUL É A COR DO INFINITO E O INFINITO É AZUL!!!</p>                
            </div>
        </div>
    )
}

export default About