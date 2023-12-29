import { useState, useRef, useId } from 'react';
import HomeCard from "./data/HomeCard";
import Button from "./Button";
import './HomeMainPanel.css';
import PS5_img from "../images/kerde-severin-NVD_32BBZFE-unsplash.jpg";
import Xbox_img from "../images/sam-pak-X6QffKLwyoQ-unsplash.jpg";
import Switch_img from "../images/ahmad-mohammed-wGc4AQ3BJ_U-unsplash.jpg";
import PC_img from "../images/christian-wiediger-XfSk_BMLj0A-unsplash.jpg";

function HomeMainPanel() {

    const HomeSubscribeDialogRef = useRef();
    const id = useId;
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState('');
    const [checkboxIsMissing, setCheckboxIsMissing] = useState(false);
    const Homecard_img = [PS5_img, Xbox_img, Switch_img, PC_img];

    function validateUsername() {
        setUsernameIsMissing(username.length === 0);
    }

    function validateEmail() {
        setEmailIsMissing(email.length === 0);
        setEmailIsInvalid(!email.match(/.+@.+/));
    }

    const list = HomeCard.map( (item,idx) => {
        return (
            <li className="home_main_item" key={item.Hname}>
            <div className='home_card'>
                <h3 className='home_card_title'>
                    {item.Hname}
                </h3>
                <div className="home_img_area">
                    <img className='home_card_img' src={Homecard_img[idx]} alt={item.alt}/>
                </div>
                <p>{item.para1}</p>
                <p>{item.para2}</p>
                <p>{item.para3}</p>
                <p>{item.para4}</p>
                <p>Click here to<Button className="home_card_link" type="button" visual="link" onClick={()=>{HomeSubscribeDialogRef.current.showModal()}}>Subscribe</Button></p>
                <dialog ref={HomeSubscribeDialogRef} className = "modal" >
                    <form className="register-form" onSubmit={(e) => {
                        e.preventDefault();
                        validateUsername(username);
                        validateEmail(email);
                        }} action="/Home_submit" method="POST">
                        <h2 className="modal_title">Subscribe</h2>
                        <div className="input_item">
                            {usernameIsMissing && <span className="register-form__error register-form__error--username">Username is required</span>}
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
                        <div className="input_item checkbox_item">
                            <input id={`${id}-checkbox`} className="register-form__checkbox" type="checkbox" name="mailingList" value={checkboxIsMissing} onChange={(e) => 
                            setCheckboxIsMissing(e.target.checked)}/>
                            <label htmlFor={`${id}-checkbox`} className="register-form__label--checkbox">wants spam</label>
                            {!checkboxIsMissing && <span className="register-form__error register-form__error--checkbox">Please check the checkbox</span>}
                        </div>
                        <div className="input_button">
                            <p>Please click here to<Button className="register-form__button submit_button" type="submit" visual="link">Submit</Button></p>
                            <button className="register-form__button close_button" type="button" onClick={() => HomeSubscribeDialogRef.current.close()}>Close</button>
                        </div>
                    </form>
                </dialog>
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