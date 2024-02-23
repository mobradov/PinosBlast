import Image from 'next/image';
import puppetter from '../../../public/images/puppet.gif';
const ThirdSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center text-center my-24">
            <div className="flex flex-col items-center justify-center w-7/12 mb-12">
                <h1 className="custom-heading my-8">Puppeter</h1>
                <p className="custom-paragraph text-start px-6">
                    Introducing Based City, a place filled with on-chain degeneracy, gambling and some random bald guy. All Base Layer NFTs and tokens are welcome here, no SEC or feds!
                </p>
            </div>
            <Image
                src={puppetter}
                alt="Ether City"
                className="w-9/12 big-shadow max-w-xs class"
            />
        </div>
    );
};

export default ThirdSection;
