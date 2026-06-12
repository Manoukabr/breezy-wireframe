import { Link, useNavigate } from 'react-router';
import { Button, Input, TopNav } from '../components/UI';

export const SignUpScreen = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app/home');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Create Account" showBack />
      
      <div className="flex-1 overflow-y-auto p-6">
        <form onSubmit={handleSignUp} className="w-full max-w-sm mx-auto space-y-5 mt-4">
          
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#374151] ml-1">Username</label>
            <Input type="text" placeholder="@yourhandle" required />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-[#374151] ml-1">Email</label>
            <Input type="email" placeholder="hello@example.com" required />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#374151] ml-1">Password</label>
            <Input type="password" placeholder="••••••••" required />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-[#374151] ml-1">Confirm Password</label>
            <Input type="password" placeholder="••••••••" required />
          </div>

          <div className="pt-6 pb-8">
            <Button type="submit" className="w-full text-lg py-3">
              Create Account
            </Button>
          </div>
          
          <div className="text-center text-sm text-[#374151]">
            <span>Already have an account? </span>
            <Link to="/" className="font-bold text-[#2563EB] hover:underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
