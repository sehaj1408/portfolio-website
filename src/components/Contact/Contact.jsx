import React from 'react';
import './contact.css';

export default function Contact(props) {
    return (
        <div className='contact' id='contact'>
            <div className='contact-details-container'>
                <div className='contact-details'>
                    <p>{props.name}</p>
                    <p>{props.email}</p>
                    <p>{props.number}</p>
                </div>
                <img className='bubble-image' src={require('../../images/bubbleImage.png')} alt="image" />
            </div>

            <div className='contact-reachout-container'>
                <button onClick={() => window.open('https://www.linkedin.com/in/sehajnaangal/', '_blank')}> 
                    <img 
                    className='linkedin-title-image' src={require('../../images/linkedinTitleImage.png')} alt="image" /> 
                </button>
                <button onClick={() => window.open('https://github.com/sehaj1408', '_blank')}> 
                    <img className='github-title-image' src={require('../../images/githubTitleImage.png')} alt="image" /> 
                </button>
            </div>
        </div>
    )
}