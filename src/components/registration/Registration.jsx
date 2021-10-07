import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {NavLink} from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="registration__btn" onClick={() => console.log('Все ок')}><NavLink to="/App">Войти</NavLink></button>           
        </div>
    );
};

export default Registration;
