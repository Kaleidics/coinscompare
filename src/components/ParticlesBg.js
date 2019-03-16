import React from 'react';
import pConfig from './particlesjs-config';
import Particles from 'react-particles-js';
import './ParticlesBg.css';

const particleOpt = pConfig;
console.log(particleOpt);

export default function ParticlesBg(props) {
    return (
        <div className='particles'>
            <Particles
                params={particleOpt}
            />
        </div>
    )
}