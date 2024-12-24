import React from 'react';
import logo from "../assets/logo.svg";

export const CodeAntLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logo}
        alt="CodeAnt AI"
        className="w-8 h-8"
      />
      <span className="font-semibold text-xl">CodeAnt AI</span>
    </div>
  );
}