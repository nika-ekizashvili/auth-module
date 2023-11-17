import { useState } from "react";

interface SignUpByEmail {
    nickname: string
    email: string
    password: string
}

const SignUpByEmail = () => {
    const [userData, setUserData] = useState<object>({
        nickname: '',
        email: '',
        password: ''
    });

    const form = [
        {
            id: 1,
            label: 'Nickname',
            input: 'text',
            onChange: (e: any) => {
                setUserData((prevSetUserData) => ({
                    ...prevSetUserData,
                    nickname: e.target.value
                }))
            }
        },
        {
            id: 2,
            label: 'Email',
            input: 'text',
            onChange: (e: any) => {
                setUserData((prevSetUserData) => ({
                    ...prevSetUserData,
                    email: e.target.value
                }))
            }
        },
        {
            id: 3,
            label: 'Password',
            input: 'password',
            onChange: (e: any) => {
                setUserData((prevSetUserData) => ({
                    ...prevSetUserData,
                    password: e.target.value
                }))
            }
        }
    ];

    const registrationHandler = () => {
        console.log(userData, 'data');
    };

    return (
        <div className="email-registration">
            <h1>Fill Up The Form</h1>
            {form.map((item, index) => {
                return (
                    <div key={index} className="registration-form-item">
                        <label>{item.label}</label>
                        <input onChange={item.onChange} type={item.input} placeholder="..." />
                    </div>
                )
            })}
            <div onClick={registrationHandler} className="registration-btn">Sign Up</div>
        </div>
    );
};

export default SignUpByEmail;