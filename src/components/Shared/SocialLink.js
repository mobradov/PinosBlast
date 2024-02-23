import Image from 'next/image';

const SocialLink = ({ href, icon, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={icon} alt={alt} />
    </a>
);

export default SocialLink;
