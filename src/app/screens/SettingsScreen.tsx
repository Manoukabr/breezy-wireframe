import React, { useState } from 'react';
import { Link } from 'react-router';
import { Globe, Moon, Sun, ShieldAlert, ChevronRight } from 'lucide-react';
import { TopNav } from '../components/UI';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Switch } from '../components/ui/switch';

export const SettingsScreen = () => {
  const [language, setLanguage] = useState('english');
  const [darkMode, setDarkMode] = useState(false);
  const isAdmin = true; // Mock admin status

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Settings" showBack />

      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200 mb-2">
          <div className="font-bold text-gray-900 text-xl">Settings</div>
          <p className="text-gray-500 text-sm mt-1">Manage your preferences.</p>
        </div>

        {/* Language Selector (Fx22) */}
        <div className="bg-white border-y border-gray-200 mb-2">
          <div className="px-4 py-3 text-sm font-bold text-gray-900 border-b border-gray-100">
            Preferences
          </div>
          <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Globe size={20} className="text-gray-700" />
              <div>
                <div className="text-[15px] font-medium text-gray-900">Language</div>
                <div className="text-xs text-gray-500 mt-0.5">Choose your display language</div>
              </div>
            </div>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32 h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Theme Toggle (Fx23) */}
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} className="text-gray-700" />}
              <div>
                <div className="text-[15px] font-medium text-gray-900">Theme</div>
                <div className="text-xs text-gray-500 mt-0.5">{darkMode ? 'Dark' : 'Light'} mode</div>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </div>

        {/* Moderator Portal Button (Fx21) - visible only for admin roles */}
        {isAdmin && (
          <div className="mt-auto px-4 pb-8 pt-4">
            <Link to="/app/admin" className="w-full py-4 bg-gray-900 text-white rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
              <ShieldAlert size={20} />
              <span>Moderator Portal</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
