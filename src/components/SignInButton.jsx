import React from "react";
import { useNavigate } from "react-router-dom";

const SignInButton = ({ icon, text, provider, onClick }) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={
                (() => {
                    navigate("/dashboard");
                })
            }
            className="w-full md:max-w-md flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
            {icon}
            <span className="font-medium">{text}</span>
        </button>
    );
};

export default SignInButton;