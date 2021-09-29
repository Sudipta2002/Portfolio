import React from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Route path='/Portfolio' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/project' component={Project}/>
                    <GoHome/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;