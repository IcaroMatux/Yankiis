import React, { useState } from 'react'
import './index.css'
import destaques1 from '../../assets/destaques.png'
import trollei_1 from '../video/trollei.mp4'
import ataque_onça from '../video/ataque-da-onça.mp4'
import tiopaulo from '../video/tio-paulo.mp4'

const Momentos = () => {
    const [verMais, setVerMais] = useState(false)
    return (
        <div id='momentos' className='moments'>

            <h2 className='titulo'>Momentos</h2>
            <h3 className='galeria'>Galeria</h3>

            <div className='destaques' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={destaques1} alt="Momentos dos yankiis" />
            </div>

            <button className='btn-galeria' onClick={() => setVerMais(!verMais)}>Ver Mais</button>

            {verMais && (
                <div className='videos-destaque' data-aos="zoom-out-right">
                    <video className='video-1' controls autoPlay muted>
                        <source src={trollei_1} alt="video" type='video/mp4' />
                    </video>

                    <video className='video-1' controls autoPlay muted>
                        <source src={ataque_onça} alt="video" type='video/mp4' />
                    </video>

                    <video className='video-1' controls autoPlay muted>
                        <source src={tiopaulo} alt="video" type='video/mp4' />
                    </video>
                </div>
            )}

        </div >
    )
}

export default Momentos