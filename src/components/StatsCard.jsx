import React from "react";
import logo from "../assets/logo.svg";
import pie from "../assets/pie.png";
import {  FaArrowUp } from "react-icons/fa6";

const StatsCard = () => {
    return (
        <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 border-b p-6">
                    <img src={logo} alt="CodeAnt AI" className="h-6 w-6" />
                    <span className="font-bold">AI to Detect & Autofix Bad Code</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center p-6">
                    <div>
                        <div className="text-xl font-bold">30+</div>
                        <div className="text-sm text-gray-600">Language Support</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">10K+</div>
                        <div className="text-sm text-gray-600">Developers</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">100K+</div>
                        <div className="text-sm text-gray-600">Hours Saved</div>
                    </div>
                </div>
            </div>
            <div className="ms-auto max-w-64 bg-white rounded-2xl shadow-xl px-8 py-6 -mt-4 -mr-8">
                <div className="flex justify-between items-start gap-4">
                    <div className="block">
                        <div className="w-12 h-12 bg-purple-100 rounded-full p-3 mb-2">
                            <img src={pie} alt="Pie Chart" className=""/>
                        </div>
                        <div className="text-sm font-semibold mb-1">Issues Fixed</div>
                        <div className="text-2xl font-bold">500K+</div>
                    </div>
                    <div className="text-blue-500 text-xs block gap-1 mt-1">
                        <p className="flex items-center gap-1 mb-1 text-blue-500 font-bold"> <FaArrowUp/> 14%</p>
                        <span className="text-gray-700 font-semibold">This week</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;