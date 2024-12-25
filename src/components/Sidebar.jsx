import React from 'react';
import { FaCode } from 'react-icons/fa6';
import { FiLogOut, FiPhone } from 'react-icons/fi';
import { IoIosCloudOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuBookText } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';
import { TiHomeOutline } from 'react-icons/ti';
import { CodeAntLogo } from './CodeAntLogo';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: TiHomeOutline, label: 'Repositories' , path: '/dashboard'},
  { icon: FaCode, label: 'AI Code Review', path: '/dashboard/ai-code-review' },
  { icon: IoIosCloudOutline, label: 'Cloud Security', path: '/dashboard/cloud-security' },
  { icon: LuBookText, label: 'How to Use', path: '/dashboard/how-to-use' },
  { icon: IoSettingsOutline, label: 'Settings', path: '/dashboard/settings' },
];

const bottomMenuItems = [
  { icon: FiPhone, label: 'Support', path: '/' },
  { icon: FiLogOut, label: 'Logout', path: '/' },
];

export const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      <div className={`
        w-full lg:w-64 fixed top-0 left-0 lg:h-screen bg-white w-64 z-50 transform transition-transform duration-300 ease-in-out lg:border-r
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-0
      `}>
        <div className="flex flex-col h-full justify-between">

          <div className="block">
            <div className="flex items-center justify-between p-4 lg:p-0">
              <div className="flex items-center gap-4  lg:p-4">
                <CodeAntLogo />
              </div>
              <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <MdClose size={24} />
              </button>
            </div>
            <div className="px-4">
              <select className="w-full p-2 rounded-lg border border-gray-200 outline-none">
                <option>UtkarshDhairyaPanwar</option>
              </select>
            </div>

            <nav className="px-3 lg:px-0 mt-3 gap-1">
              <div className="block px-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex justify-start items-center mb-2 gap-3 px-3 py-2 hover:bg-gray-100 text-gray-700 rounded-md ${location.pathname === item.path ? 'border-2 border-blue-600 bg-blue-500 hover:bg-blue-500 text-white' : ''}`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="block pb-8">
            {bottomMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 px-10 py-3 hover:text-neutral-900 text-neutral-700"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
