import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FiDatabase, FiRefreshCw } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

const repositories = [
  { name: 'design-system', language: 'React', size: '7320 KB', updated: '1 day ago', isPublic: true },
  { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', updated: '2 days ago', isPrivate: true },
  { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', updated: '5 days ago', isPrivate: true },
  { name: 'mobile-app', language: 'Swift', size: '3096 KB', updated: '3 days ago', isPublic: true },
  { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', updated: '6 days ago', isPrivate: true },
  { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago', isPublic: true },
  { name: 'social-network', language: 'PHP', size: '5432 KB', updated: '7 days ago', isPrivate: true },
];

const languageColors: Record<string, string> = {
  React: 'bg-blue-500',
  Javascript: 'bg-yellow-500',
  Python: 'bg-green-500',
  Swift: 'bg-orange-500',
  Java: 'bg-red-500',
  'HTML/CSS': 'bg-purple-500',
  PHP: 'bg-indigo-500',
};

export const RepositoryList: React.FC = () => {
  return (
    <div className="lg:border lg:rounded-xl pt-24 lg:pt-6">
      <div className="block lg:flex justify-between items-start mb-3 px-4 lg:px-6">
        <div className="mb-3">
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">33 total repositories</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 border rounded-lg gap-2 flex items-center px-4 py-2">
            <FiRefreshCw size={20} /> <span>Refresh All</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <FaPlus size={20} />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6 max-w-md mx-4 lg:mx-6">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600" size={20} />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-blue-500"
        />
      </div>

      <div className="lg:pb-6">
        {repositories.map((repo, index) => (
          <div key={index} className="border-t border-gray-200 p-4 lg:px-6 hover:bg-neutral-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-blue-600">{repo.name}</h3>
                <span className={`px-2 py-0.5 text-xs rounded-full border-2 border-blue-200 bg-blue-50 text-blue-700`}>
                  {repo.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-900">
              <div className="flex items-center gap-2">
                {repo.language}
                <span className={`w-2 h-2 rounded-full bg-blue-500`}></span>
              </div>
              <span className='flex items-center gap-1'>
                <FiDatabase size={12} />
                {repo.size}
              </span>
              <span>Updated {repo.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}