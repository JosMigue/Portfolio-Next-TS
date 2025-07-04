type Props = {
    name: string;
    icon: { src: string; alt: string };
    url: string;
}


const Network = ({ name, icon, url }: Props) => <a className="hover:scale-110 transform transition-all ease-in-out duration-200 "href={url} target="__blank"><img className="lg:w-10 w-6" src={icon.src} alt={icon.alt}/></a>;
export default Network;