import React from 'react';
import { CodeAntLogo } from './CodeAntLogo';
import { FiMenu, FiRefreshCw } from 'react-icons/fi';

export const Header = ({ onMenuToggle }) => {
  return (
    <header className="fixed w-full border-b lg:border-0 bg-white z-10">
      <div className="w-full flex lg:hidden items-center justify-between px-4 py-3">

        <div className="flex items-center gap-4">
          <CodeAntLogo />
          <div className="hidden lg:flex items-center gap-2">
            <select className="p-2 rounded-lg border border-gray-200 outline-none">
              <option>UtkarshDhairyaPanwar</option>
            </select>
          </div>
        </div>

        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <FiMenu size={24} />
        </button>

      </div>

    </header>
  );
};
