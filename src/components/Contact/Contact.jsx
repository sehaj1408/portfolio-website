import React, { useEffect } from 'react';
import './contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact(props) {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div className='contact' id='contact'>
            <div className='contact-details-container'>
                <div className='contact-details'>
                    <p data-aos='fade-right'>{props.name}</p>
                    <p data-aos='fade-right'>{props.email}</p>
                    <p data-aos='fade-right'>{props.number}</p>
                </div>
                <img data-aos='fade-up' className='bubble-image' src={require('../../images/bubbleImage.png')} alt="image" />
            </div>

            <div className='contact-reachout-container'>
                <button data-aos='fade-right' onClick={() => window.open('https://www.linkedin.com/in/sehajnaangal/', '_blank')}> 
                    <img 
                    className='linkedin-title-image' src={require('../../images/linkedinTitleImage.png')} alt="image" /> 
                </button>
                <button data-aos='fade-left' onClick={() => window.open('https://github.com/sehaj1408', '_blank')}> 
                    <img className='github-title-image' src={require('../../images/githubTitleImage.png')} alt="image" /> 
                </button>
            </div>
        </div>
    )
}