import Profile from './Profile'
import SocialLinks from './SocialLinks'

function ProfileCard() {
  const name = "Jessica Randall";
  const location = "London, United Kingdom";
  const bio = "Front-end developer and avid reader."
  return (
    <>
      <div className='flex flex-col items-center justify-start rounded-lg bg-darkGrey sm:w-[320px] h-auto font-inter py-6 px-6 gap-4 desktop:w-[300px] '>
        <Profile name={name} location={location} bio={bio} />
        <SocialLinks />
      </div>
    </>
  )
}

export default ProfileCard