import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import insta from './../../assets/in.png';
const Contact=()=>{
    return(
        <div className="section-container">
            <Header heading="Contact Me" details="If u get in touch with me contact please"/>
            {/* <h1>This is contact page</h1> */}
            
            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>
            {/**social icon  */}
            <div className="social-icons-container">
                <a className="gap" target='_blank' rel='noreferrer' href="https://github.com/Sudipta2002">
                    <img  src={github} alt="github-profile"/>
                </a>
                <a className="gap" target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sudipta-ghosh-542494204">
                    <img src={linkedin} alt="github-profile"/>
                </a>
                <a className="gap" target='_blank' rel='noreferrer' href="https://www.instagram.com/sudipta5950/">
                    <img src={insta} alt="github-profile"/>
                </a>
            </div>
            <Footer phrase='Look at my 'link="Skills" toAdress="/skills"/>
            <div className="vector-frame">
                <img src={contactVector}alt="vectorimg" className="about-vector"/>
            </div>
        </div>
    )
}
export default Contact;