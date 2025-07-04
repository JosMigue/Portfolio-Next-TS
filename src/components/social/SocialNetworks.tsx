import Network from "@/components/social/Network";
import instagram from "../../../public/social/instagram.svg";
import linkedin from "../../../public/social/linkedin.svg";
import github from "../../../public/social/github.svg";
import whatsapp from "../../../public/social/whatsapp.svg";
import telegram from "../../../public/social/telegram.svg";
import email from "../../../public/social/email.svg";
type Props ={
  isSocialRequired: string[],
}

type SocialNetworksType = {
  instagram: string,
  linkedin: string,
  github: string,
  whatsapp: string,
  telegram: string,
  email: string
}

const socialNetworks: SocialNetworksType = {
  instagram: process.env.DEV_SOCIAL_INSTAGRAM!,
  linkedin: process.env.DEV_SOCIAL_LINKEDIN!,
  github: process.env.DEV_SOCIAL_GITHUB!,
  whatsapp: process.env.DEV_SOCIAL_WHATSAPP!,
  telegram: process.env.DEV_SOCIAL_TELEGRAM!,
  email: process.env.DEV_SOCIAL_EMAIL!
}

const SocialNetworks = ({ isSocialRequired }: Props) => {
  return (
    <>
      <div className="flex flex-row justify-evenly w-full">
        {isSocialRequired.includes('instagram') && <Network name="Instagram" icon={instagram} url={`https://www.instagram.com/${socialNetworks.instagram}`} />}
        {isSocialRequired.includes('linkedin') && <Network name="Linkedin" icon={linkedin} url={`https://www.linkedin.com/in/${socialNetworks.linkedin}`} />}
        {isSocialRequired.includes('github') && <Network name="Github" icon={github} url={`https://github.com/${socialNetworks.github}`} />}
        {isSocialRequired.includes('whatsapp') && <Network name="Whatsapp" icon={whatsapp} url={`https://wa.me/${socialNetworks.whatsapp}`} />}
        {isSocialRequired.includes('telegram') && <Network name="Telegram" icon={telegram} url={`https://t.me/${socialNetworks.telegram}`} />}
        {isSocialRequired.includes('email') && <Network name="Email" icon={email} url={`mailto:${socialNetworks.email}`} />}
      </div>
    </>
  );
}

export default SocialNetworks;