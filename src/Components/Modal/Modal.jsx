import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal =({closeModal})=>{
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>My Achievments</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <div>
                    <b><p>CodeChef- 1552</p></b>
                    </div>
                    <div>
                        <b><p>Codeforces- newbie</p></b>
                    </div>
                    <div>
                        <b> <p>LeetCode- 100+ Questions</p></b>
                    </div> 
                </div>
                <div className="lower-section">
                 {/* <a className='modal-btn btn-red'>
                        Close
                    </a> */}
                    <a
                        href='https://leetcode.com/progress/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        LeetCode
                    </a>
                    <a
                        href='https://leetcode.com/progress/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        CodeForces
                    </a>
                    
                    <a
                        href='https://www.codechef.com/users/sudipta_2002'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        CodeChef
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;