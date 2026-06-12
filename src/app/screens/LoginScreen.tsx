import { Link, useNavigate } from 'react-router';
import { Button, Input } from '../components/UI';
import { Wind } from 'lucide-react'; // Wind icon for "Breezy"

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app/home');
  };

  return (
    <div className="flex flex-col h-full p-6 bg-white justify-center overflow-y-auto">
      <div className="flex-1 flex flex-col justify-center items-center max-w-sm w-full mx-auto py-10">
        <div className="mb-10 text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-[#EFF6FF] rounded-2xl flex items-center justify-center border-2 border-[#2563EB]">
            <Wind size={32} className="text-[#2563EB]" />
          </div>
          <h1 className="text-3xl font-black text-[#111827] tracking-tight">Breezy</h1>
          <p className="text-[#6B7280]">Log in to see what's happening.</p>
        </div>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="space-y-1"><label className="text-sm font-bold text-[#374151] ml-1">E-mail</label><Input type="email" placeholder="hello@example.com" required defaultValue="user@example.com" /></div>
          
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#374151] ml-1">Password</label>
            <Input type="password" placeholder="••••••••" required defaultValue="password" />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full text-lg py-3">
              Log In
            </Button>
          </div>
        </form>

        <div className="mt-8 flex gap-1 text-sm text-[#374151]">
          <span>Don't have an account?</span>
          <Link to="/signup" className="font-bold text-[#2563EB] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
