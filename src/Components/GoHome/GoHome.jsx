import React ,{Component} from 'react';
import { withRouter } from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';
class GoHome extends Component{

    navigateToHome=()=>{
        const {history}=this.props;
        // console.log(history);
        history.push('/Portfolio');
    };
    render(){
        const {location}=this.props;
        const whitebtn=location.pathname==='/';
        return (
            <button className={`go-home-btn ${ whitebtn ?'white-bkg':'gradient-bkg'}`} onClick={this.navigateToHome}>
                <img className="home-icon" src={whitebtn ? homeIconBlack:homeIconWhite}
                alt="home-icon"/>
            </button>
        );
    }
}
export default withRouter(GoHome);