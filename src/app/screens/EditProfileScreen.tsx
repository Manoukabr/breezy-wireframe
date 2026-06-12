import { useNavigate } from 'react-router';
import { Camera } from 'lucide-react';
import { Avatar, Button, Input, Textarea, TopNav } from '../components/UI';

export const EditProfileScreen = () => {
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav 
        title="Edit Profile" 
        showBack 
        rightElement={
          <Button variant="primary" className="py-1 px-4 text-sm h-8" onClick={handleSave as any}>
            Save
          </Button>
        } 
      />
      
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSave} className="flex flex-col h-full">
          <div className="relative h-32 bg-gray-200 w-full flex items-center justify-center">
             <div className="bg-black/40 p-2 rounded-full text-white cursor-pointer hover:bg-black/50 transition-colors">
               <Camera size={24} />
             </div>
          </div>
          
          <div className="px-4">
            <div className="relative -mt-10 mb-6 inline-block">
              <div className="bg-white p-1 rounded-full relative group cursor-pointer">
                <Avatar size="xl" />
                <div className="absolute inset-1 rounded-full bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                   <Camera size={24} />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pb-10">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                <Input type="text" defaultValue="Alice" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Bio</label>
                <Textarea 
                  defaultValue="UX Designer and front-end developer. I love creating simple, wireframe-style mockups. Exploring the world of low-fidelity design."
                  className="h-24"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Location</label>
                <Input type="text" defaultValue="San Francisco, CA" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Website</label>
                <Input type="text" defaultValue="alice.design" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
