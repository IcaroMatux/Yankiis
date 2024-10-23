import React from 'react'
import './index.css'
import bgVideo from '../video/carro-forte.mp4'
import 'aos/dist/aos.css'
import yankiikatana from '../../assets/yankiis-katana.png'


const yankii = () => {

    return (
        <div className='yankii yankii-container' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <video className='video' autoPlay loop muted>
                <source src={bgVideo} alt="video" type='video/mp4' />
            </video>

            <div className='yankiis-texto'>
                
                <img src={yankiikatana} alt="Imagem Yankiis com Katana" className='yankii-katana' />

                <p>Venha fazer parte de uma das famílias que mais crescem na Cidade dos Anjos. Ciano é a cor do momento!</p>
                <button className='btn'>Explore Mais</button>
            </div>

        </div>
    )
}

export default yankii