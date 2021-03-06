import React from 'react';
import pConfig from './particlesjs-config';
import Particles from 'react-particles-js';
import './ParticlesBg.scss';

const particleOpt = pConfig;

export default function ParticlesBg(props) {
    return (
        <div className='particles'>
            <Particles params={particleOpt} />
            <section className='app-title'>
            <h2 className='title-h2'>Coins <br/> Compare</h2>
            <span className='taglines'>
            <p className='title-tagline'>Click for a look at imaginary money. </p>            
            <p className='title-tagline'> Wait, all money is imaginary . . .</p>
            </span>
            </section>
        </div>
    )
}