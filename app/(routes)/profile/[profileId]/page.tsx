import ProfileCard from "./components/profile-card";

const ProfilePage = async ({
  params
}: {
  params: { profileId: string }
}) => {  
  return (
    <div className="h-full">
      <ProfileCard profileId={params.profileId} /> 
    </div>
  );
};

export default ProfilePage;
