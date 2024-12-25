import React, { useState } from 'react';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import { SiBitbucket } from 'react-icons/si';
import { CodeAntLogo } from './CodeAntLogo';
import SignInButton from './SignInButton';
import StatsCard from './StatsCard';
import { VscAzureDevops } from 'react-icons/vsc';

import logoBg from '../assets/Subtract.png';
import { IoKeyOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SassContent = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <SignInButton
                icon={<FaGithub />}
                text="Sign in with GitHub"
                onClick={() => alert('Sign in with GitHub')}
            />
            <SignInButton
                icon={<FaGitlab className='text-orange-500' />}
                text="Sign in with GitLab"
                onClick={() => alert('Sign in with GitLab')}
            />
            <SignInButton
                icon={<SiBitbucket className='text-blue-500' />}
                text="Sign in with Bitbucket"
                onClick={() => alert('Sign in with Bitbucket')}
            />
            <SignInButton
                icon={<VscAzureDevops className='text-blue-800' />}
                text="Sign in with Azure DevOps"
                onClick={() => alert('Sign in with Azure DevOps')}
            />
        </div>
    );
};

const SelfHostedContent = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <SignInButton
                icon={<FaGitlab className='text-orange-500' />}
                text="Self Hosted GitLab"
                onClick={() => alert('Self Hosted GitLab')}
            />
            <SignInButton
                icon={<IoKeyOutline />}
                text="Sign in with SSO"
                onClick={() => alert('Sign in with SSO')}
            />
        </div>
    );
};

const Login = () => {
    const [activeTab, setActiveTab] = useState('SaaS');

    return (
        <div className="min-h-screen">
            <div className="flex align-center min-h-screen p-4 md:p-0">
                <div className="lg:w-1/2 relative hidden md:flex items-center justify-center border-r border-gray-200">
                    <StatsCard />
                    <img src={logoBg} alt="CodeAnt AI" className="hidden md:block absolute bottom-0 left-0 -z-10" />
                </div>

                <div className="w-full lg:w-1/2 md:p-6 m-auto">
                    <div className="bg-white rounded-xl border">
                        <div className="text-center p-4 md:p-8 border-b mb-8">
                            <div className="flex justify-center mb-4">
                                <CodeAntLogo />
                            </div>
                            <h1 className="text-2xl font-bold mb-8">Welcome to CodeAnt AI</h1>

                            <div className="flex border rounded-lg overflow-hidden bg-gray-100">
                                <button
                                    className={`flex-1 py-2 px-4 font-medium transition-colors rounded-lg ${activeTab === 'SaaS'
                                        ? 'bg-blue-500 border-2 border-blue-600 text-white'
                                        : 'text-gray-900'
                                        }`}
                                    onClick={() => setActiveTab('SaaS')}
                                >
                                    SAAS
                                </button>
                                <button
                                    className={`flex-1 py-2 px-4 font-medium transition-colors rounded-lg ${activeTab === 'Self Hosted'
                                        ? 'bg-blue-500 border-2 border-blue-600 text-white'
                                        : 'text-gray-900'
                                        }`}
                                    onClick={() => setActiveTab('Self Hosted')}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>
                        <div className="min-h-72 px-4 md:px-8">
                            {activeTab === 'SaaS' ? <SassContent /> : <SelfHostedContent />}
                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 my-6">
                        By signing up you agree to the{' '}
                        <Link to="/" className="text-gray-900 font-semibold">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
