import React from 'react'
import './index.css'
import numero_1 from '../../assets/1.png'
import numero_2 from '../../assets/2.png'
import numero_3 from '../../assets/3.png'


const OndeEstamos = () => {
    return (
        <div id='onde-estamos' className='here' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className='comojogar-texto'>
                <h2>COMO JOGAR COM OS <span>YANKIIS</span>
                </h2>
                <p>Para jogar com os Yankiis, é necessário seguir alguns requisitos</p>
            </div>

            <div className='numeros'>
                <div className='container-numeros'>
                    <img src={numero_1} alt="número-1" />
                    <p>Possuir uma allowlist da Cidade dos Anjos <a href="https://discord.gg/DWf2ZxYH" target='_blank' className='link'> (clique aqui)</a> para saber mais</p>
                </div>

                <div className='container-numeros'>
                    <img src={numero_2} alt="número-1" />
                    <p>Ter uma cópia digital original do jogo GTA V.</p>
                </div>

                <div className='container-numeros'>
                    <img src={numero_3} alt="número-1" />
                    <p>Ter o FIVEM Instalado <a href="https://fivem.net/" target='_blank' className='link'> (clique aqui)</a> para instalar</p>
                </div>

            </div>
        </div>
    )
}

export default OndeEstamos