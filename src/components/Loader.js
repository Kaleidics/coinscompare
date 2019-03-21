import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <div className='loader'>
            <div class="cs-loader">
                <div class="cs-loader-inner">
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                </div>
            </div>
        </div>
    )
}