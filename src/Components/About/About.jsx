import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import selfpic from './../../assets/self.jpeg';

// import aboutAnime from './../../assets/about_anime.gif';

const About=()=>{
    return(
        
        <div className="section-container">
            <Header heading="About Me" details="A competitive Programmer | OpenSource Enthusiast | FullStack Developer | Girl Script Winter of Code Contributer"></Header>
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Speed Cuber</h3>
                    <p className='about-details'>
                        Solving cubes(Rubix) is my passion, till now, I've taught many friends
                        about Solving these Cubes. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='https://www.linkedin.com/in/sudipta-ghosh-542494204/'
                        >
                            My LinkedIN
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Teaching Assistant</h3>
                    <p className='about-details'>
                        I've been helping my friends from years in terms of competitive programming and Web Development.
                        I have a youtube channel where I teach{' '}
                        <a
                            className='about-link-element'
                            href='https://www.youtube.com/channel/UCelAT971cgIsFleKvhJZKMQ'
                        >
                            My Channel
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Reach through mail</h3>
                    <p className='about-details'>
                        
                        <a
                            className='about-link-element'
                            href='mailto:sudiptaghosh27september@gmailcom'
                        >
                            Email Please!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={selfpic}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>
            <Footer
                phrase="Check out my "
                link="project"
                toAdress="./project"></Footer>
            <div className='vector-frame'>
            <img src={aboutVector} className='about-vector' alt='about' />
        </div>
        </div>
    );
}
export default About;