import Link from "next/link";
import { useEffect, useState } from "react";

const Intro = () => {
    const [action, setAction] = useState<String>('');

    return (
        <div className="intro">
            <h1>Hello...</h1>
            <p>its just authentication module u can register or auth by wallet or just by email</p>
            <div className="intro-inner">
                <Link href="/login" onClick={() => setAction("login")} className="intro-btn">
                    <h1>Login</h1>
                </Link>
                <Link href="/registration" onClick={() => setAction("registration")} className="intro-btn">
                    <h1>Registration</h1>
                </Link>
            </div>
        </div>
    );
};

export default Intro;