import { useState, useRef,useId } from 'react';
import MainCard from './MainCard';
import card from './card';
import './HomeMainPanel.css';
import Button from './Button';
// import HomeSubscribeDialog from './HomeSubscribeDialog';
function HomeMainPanel() {

    const HomeSubscribeDialogRef = useRef();
    const id = useId;
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState('');

    function validateUsername() {
        setUsernameIsMissing(username.length === 0);
    }

    function validateEmail() {
        setEmailIsMissing(email.length === 0);
        setEmailIsInvalid(!email.match(/.+@.+/));
    }

    const list = card.map( item => {
        return (
          <li className="home_main_item" key={item.Hname}>
            <div className='home_card'>
                <h3 className='home_card_title'>
                    {item.Hname}
                </h3>
                <div className="home_img_area">
                    <img className='home_card_img' src={item.img} alt={item.alt}/>
                </div>
                <p>{item.description}</p>
                <p>{item.para}</p>
                <p>Click here to<Button className="home_card_link" type="button" visual="link" onClick={()=>{HomeSubscribeDialogRef.current.showModal()}}>Subscribe</Button></p>
                <dialog ref={HomeSubscribeDialogRef} className = "modal" >
                    <form className="register-form" onSubmit={(e) => {
                        e.preventDefault();
                        validateUsername(username);
                        validateEmail(email);
                        }} action="/submit" method="POST">
                        <h2 className="modal_title">Subscribe</h2>
                        <div className="input_item">
                            {usernameIsMissing && <span className="register-form__error register-form__error--username"name>Username is required</span>}
                            <label htmlFor={`${id}-username`} className="register-form__label">Username:</label>
                            <input id={`${id}-username`} className="register-form__input register-form__input--username" value={username} type="text" onInput={(e) =>{
                                setUsername(e.target.value);
                                validateUsername(e.target.value);
                                }}/>
                        </div>
                        <div className="input_item">
                            {emailIsMissing && <span className="register-form__error register-form__error--email">Email is required</span> }
                            {emailIsInvalid && !emailIsMissing && <span className="register-form__error register-form__error--email">Email is invalid</span>}
                            <label htmlFor={`${id}-email`} className="register-form__label">Email:</label>
                            <input id={`${id}-email`} className="register-form__input register-form__input--email" value={email} type="text"
                            onInput={(e) => {
                                setEmail(e.target.value);
                                validateEmail(e.target.value);
                            }}/>
                        </div>
                        <div className="input_item">
                            {confirmEmail !== email && <span className="register-form__error register-form__error--comfirm_email">The email is not matched</span> }
                            <label htmlFor={`${id}-confirm_email`} className="register-form__label">Email:</label>
                            <input id={`${id}-confirm_email`} className="register-form__input register-form__input--confirm_email" value={confirmEmail} type="text"
                            onInput={(e) =>{
                                setConfirmEmail(e.target.value);
                            }}/>
                        </div>
                        <div className="input_button">
                            <p>Please click here to<Button className="register-form__button submit_button" type="submit" visual="link">Submit</Button></p>
                            <button className="register-form__button close_button" type="button" onClick={() => HomeSubscribeDialogRef.current.close()}>Close</button>
                        </div>
                    </form>
                </dialog>
                {/* <a className="card_link" href={item.path}>
                    
                </a> */}
            </div>
          </li>
        );
    });


    return (
        <ul className="home_main_list">
            { list }
        </ul>
        
    );
}

export default HomeMainPanel;