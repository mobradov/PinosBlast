import React from 'react'; // Import React
import headerIcon from '../../assets/icons/header-icon.png';
import twitterIcon from '../../assets/icons/twitter-icon.png';
import etherscanIcon from '../../assets/icons/etherscan-icon.png';
import openseaIcon from '../../assets/icons/opensea-icon.png';
import Link from 'next/link'; // Import Link from next/link

import Image from 'next/image';

import SocialLink from '../Shared/SocialLink';

const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center sm:w-full mt-8">
            <div className="flex items-center gap-4 font-righteous uppercase tracking-widest text-xl sm:text-lg font-normal mb-4 sm:mb-0">
                <span>
                    <Image src={headerIcon} alt="Ether Fellas Logo" />
                </span>
                Blast Pinos
            </div>
            <div className="flex items-center gap-8">
                <div className="flex gap-4">
                    <SocialLink
                        href="https://twitter.com/BasedFellas"
                        icon={twitterIcon}
                        alt="Link to Ether Fellas on Twitter"
                    />
                    <SocialLink
                        href="https://etherscan.io/address/0xdcf9bd5f26b58b82d4a8ec8fdf52069c7417c9c7"
                        icon={etherscanIcon}
                        alt="Link to the Ether Fellas contract"
                    />
                    <SocialLink
                        href="https://opensea.io/collection/ether-fellas"
                        icon={openseaIcon}
                        alt="Link to Ether Fellas on OpenSea"
                    />
                </div>
                <div className="relative inline-block transition duration-200 hover:scale-105">
                    {/* Use div with Tailwind CSS classes */}
                    <div className="w-44 h-12 bg-purp uppercase tracking-wider font-righteous text-base small-shadow">
                        <Link href="#mint">
                            Mint Here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
