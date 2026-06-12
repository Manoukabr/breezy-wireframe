import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Avatar, TopNav } from '../components/UI';
import { mockPosts, mockUserProfiles } from '../mockData';
import { PostItem } from './HomeFeedScreen';

export const PublicProfileScreen = () => {
  const { handle } = useParams();
  const profile = mockUserProfiles.find(u => u.handle === `@${handle}`) || mockUserProfiles[0];
  const [following, setFollowing] = useState(profile.following);
  const userPosts = mockPosts.filter(p => p.handle === `@${handle}`);

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Profil" showBack />

      <div className="flex-1 overflow-y-auto">
        <div className="h-32 bg-[#DBEAFE] w-full" />

        <div className="px-4 pb-4">
          <div className="flex justify-between items-end -mt-10 mb-4">
            <div className="bg-white p-1 rounded-full">
              <Avatar size="xl" />
            </div>
            <button
              onClick={() => setFollowing(f => !f)}
              className={`py-1.5 px-4 text-sm h-9 rounded-full font-semibold border transition-colors ${
                following
                  ? 'bg-white border-[#E5E7EB] text-[#111827] hover:border-[#DC2626] hover:text-[#DC2626]'
                  : 'bg-[#111827] border-[#111827] text-white hover:bg-[#374151]'
              }`}
            >
              {following ? 'Suivi(e)' : 'Suivre'}
            </button>
          </div>

          <div className="mb-3">
            <h2 className="text-xl font-bold text-[#111827] leading-tight">{profile.name}</h2>
            <div className="text-[#6B7280]">{profile.handle}</div>
          </div>

          <p className="text-[#374151] text-sm mb-4">{profile.bio}</p>

          <div className="flex gap-4 text-sm">
            <span><span className="font-bold text-[#111827]">{profile.following_count}</span> <span className="text-[#6B7280]">Abonnements</span></span>
            <span><span className="font-bold text-[#111827]">{profile.followers_count}</span> <span className="text-[#6B7280]">Abonnés</span></span>
          </div>
        </div>

        <div className="flex border-b border-[#E5E7EB]">
          <div className="flex-1 text-center font-bold text-[#2563EB] border-b-2 border-[#2563EB] py-3">Posts</div>
        </div>

        <div>
          {userPosts.length > 0 ? userPosts.map(post => (
            <Link to={`/app/post/${post.id}`} key={post.id} className="block">
              <PostItem post={post} />
            </Link>
          )) : (
            <p className="text-center text-[#9CA3AF] text-sm mt-10">Aucun post pour l'instant.</p>
          )}
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
};
