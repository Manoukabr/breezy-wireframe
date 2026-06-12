import { Outlet, NavLink } from 'react-router';
import { Home, PlusSquare, User, Bell, Mail } from 'lucide-react';

export const AppLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EFF6FF] p-2 sm:p-4 font-sans">
      <div className="w-full max-w-[390px] h-[844px] max-h-[100dvh] bg-white sm:rounded-[2.5rem] shadow-2xl overflow-hidden relative border-0 sm:border-[8px] border-[#111827] flex flex-col">
        <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const MainNavLayout = () => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex-1 overflow-hidden relative pb-14">
        <Outlet />
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full h-14 bg-white border-t border-[#E5E7EB] flex items-center justify-around z-20 pb-safe px-2">
        <NavLink 
          to="/app/home" 
          className={({ isActive }) => `p-3 flex-1 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-[#6B7280] hover:text-[#2563EB]'}`}
        >
          <Home size={24} />
        </NavLink>
        <NavLink 
          to="/app/notifications" 
          className={({ isActive }) => `p-3 flex-1 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-[#6B7280] hover:text-[#2563EB]'}`}
        >
          <Bell size={24} />
        </NavLink>
        <NavLink 
          to="/app/compose" 
          className={({ isActive }) => `p-3 flex-1 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-[#6B7280] hover:text-[#2563EB]'}`}
        >
          <PlusSquare size={24} />
        </NavLink>
        <NavLink 
          to="/app/messages" 
          className={({ isActive }) => `p-3 flex-1 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-[#6B7280] hover:text-[#2563EB]'}`}
        >
          <Mail size={24} />
        </NavLink>
        <NavLink 
          to="/app/profile" 
          className={({ isActive }) => `p-3 flex-1 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-[#6B7280] hover:text-[#2563EB]'}`}
        >
          <User size={24} />
        </NavLink>
      </div>
    </div>
  );
};
