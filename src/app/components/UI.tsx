import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export const Avatar = ({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl", className?: string }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };
  return (
    <div className={`${sizeClasses[size]} bg-blue-100 border-2 border-blue-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden ${className}`}>
      <div className="w-full h-full bg-blue-200" />
    </div>
  );
};

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props} 
    className={`w-full border-2 border-[#E5E7EB] rounded-lg p-3 bg-[#F9FAFB] text-[#111827] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors ${props.className || ''}`}
  />
);

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea 
    {...props} 
    className={`w-full border-2 border-[#E5E7EB] rounded-lg p-3 bg-[#F9FAFB] text-[#111827] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors resize-none ${props.className || ''}`}
  />
);

export const Button = ({ children, variant = "primary", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" }) => {
  const baseClasses = "font-bold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
    secondary: "bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]",
    outline: "border-2 border-[#E5E7EB] text-[#111827] hover:bg-[#F9FAFB]",
    ghost: "text-[#6B7280] hover:bg-[#F3F4F6]"
  };
  return (
    <button {...props} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const TopNav = ({ title, showBack = false, rightElement }: { title: string, showBack?: boolean, rightElement?: React.ReactNode }) => (
  <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] px-4 h-14 flex items-center justify-between">
    <div className="flex items-center gap-4">
      {showBack && (
        <Link to={-1 as any} className="p-2 -ml-2 rounded-full hover:bg-[#F3F4F6] text-[#111827]">
          <ArrowLeft size={20} />
        </Link>
      )}
      <h1 className="text-lg font-bold text-[#111827]">{title}</h1>
    </div>
    {rightElement && <div>{rightElement}</div>}
  </div>
);
