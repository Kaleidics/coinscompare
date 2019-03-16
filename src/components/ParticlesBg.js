import React from 'react';
import pConfig from '../assets/particlesjs-config.js';
import Particles from 'react-particles-js';
import './particlesbg.css';

const particleOpt = JSON.parse(pConfig);

export default function ParticlesBg(props) {
    return (
        <header className='particles'>
            <Particles
                params={particleOpt}
            />
        </header>
    )
}