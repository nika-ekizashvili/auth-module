import { useEffect, useState } from "react";
import Action from "@/components/auth/Action";
import SignUpByWallet from "@/components/auth/SignUpByWallet";
import SignUpByEmail from "@/components/auth/SignUpByEmail";

const index = () => {
    const [by, setBy] = useState<string>('');
    const [element, setElement] = useState<any>(null);
    useEffect(() => {
        if (by === 'wallet') {
            setElement(<SignUpByWallet />);
        }
        if (by === 'email') {
            setElement(<SignUpByEmail />);
        }
    }, [by]);

    return (
        <div className="registration-wrapper">
            {!by && <Action setBy={setBy} />}
            {element}
        </div>
    );
};

export default index;