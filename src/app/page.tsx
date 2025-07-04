import Image from "next/image";
import Section from "@/components/section/Section";
import SocialNetworks from "@/components/social/SocialNetworks";
export default function Home() {
  const config = {
    primary: 'text-4xl md:text-5xl font-bold mt-2 mb-8 text-primary uppercase',
    secondary: 'text-2xl md:text-3xl font-bold text-white mt-2 mb-8 text-center',
    list: 'font-bold text-white text-md',
    img: 'rounded-full border border-8 border-primary profile-img content-fit',
    profile: process.env.DEV_PROFILE_PHOTO_URI || '#' // Adjust the path as necessary
  }
  type Datatypes = {
    title : string,
    name: string,
    social: string[]
  }
  const data: Datatypes = {
    title: process.env.DEV_TITLE || 'YOUR ROLE',
    name: process.env.DEV_NAME || 'YOUR NAME',
    social: process.env.DEV_MAIN_SOCIAL?.split(',') || []
  }
  return (
    <Section>
      <div className='flex flex-col lg:flex-row-reverse justify-center align-center items-center'>
        <div>
          <h1 className={config.primary}>{data.title || 'SOME ROLE'}</h1>
          <h2 className={config.secondary}>{data.name || 'SOME NAME'}</h2>
          <SocialNetworks isSocialRequired={data.social} />
        </div>
        <div className='lg:my-0 my-14'>
          <img src={config.profile} className={config.img} width={200} height={400} alt="Profile" />
        </div>
      </div>
    </Section>
  );
}
