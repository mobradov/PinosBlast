import Image from 'next/image';


import pinos1 from '../../../public/images/1.png';
import pinos2 from '../../../public/images/2.png';
import pinos3 from '../../../public/images/3.png';
import pinos4 from '../../../public/images/4.png';
import pinos5 from '../../../public/images/5.png';
import pinos6 from '../../../public/images/6.png';
import pinos7 from '../../../public/images/7.png';
import pinos8 from '../../../public/images/8.png';
import pinos9 from '../../../public/images/9.png';
import pinos10 from '../../../public/images/10.png';
import pinos11 from '../../../public/images/11.png';
import pinos12 from '../../../public/images/12.png';
import pinos13 from '../../../public/images/13.png';
import pinos14 from '../../../public/images/14.png';
import pinos15 from '../../../public/images/15.png';
import pinos16 from '../../../public/images/16.png';


const FirstSection = () => {
    const pinos = [
        pinos1,
        pinos2,
        pinos3,
        pinos4,
        pinos5,
        pinos6,
        pinos7,
        pinos8,
        pinos9,
        pinos10,
        pinos11,
        pinos12,
        pinos13,
        pinos14,
        pinos15,
        pinos16
    ];

    return (
        <div className="my-24 flex justify-between relative h-[600px]">
            <CheckeredBox position="top-0 right-0" />
            <CheckeredBox position="bottom-0 left-0" />

            <section className="w-1/3 flex flex-col items-start space-y-4">
                <div className="px-4 py-1.5 bg-darkish shadow-lg text-base font-light leading-6 font-kanit text-white flex justify-center items-center">
                    Welcome to the
                </div>
                <div className="mt-4 space-y-2">
                    {['Blast', 'Pinos', 'web', 'site'].map((word, i) => (
                        <div
                            key={i}
                            className="font-righteous font-normal text-white text-[110px] leading-[110px] tracking-tighter flex-none"
                        >
                            {word}
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-1/3">
                <div className="h-[512px] w-full overflow-y-auto grid grid-cols-3 gap-2 hide-scrollbar big-shadow">
                    {pinos
                        .slice()
                        .reverse()
                        .map((pinos, index) => (
                            <Image
                                key={index}
                                src={pinos}
                                alt={`Ether Fella ${index}`}
                                className="w-[100px] h-[100px] object-cover object-center"
                                loading="eager"
                            />
                        ))}
                </div>
            </section>

            <section className="mt-8 px-8 w-1/3 relative ml-14">
                <div className="w-[300px] h-[300px] relative">
                    <img
                        src="/images/content/sunset_art.gif"
                        alt="Modified GIF"
                        loading="eager"
                        className="absolute top-0 left-0 w-full h-full object-cover transform rotate-[-2deg] scale-x-[-1]"
                        style={{
                            maskImage: `url(/images/content/vectors/vector_1.svg)`,
                            maskRepeat: 'no-repeat',
                            maskSize: 'cover',
                            WebkitMaskImage: `url(/images/content/vectors/vector_1.svg)`,
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskSize: 'cover',
                        }}
                    />
                </div>
                <p className="mt-8 custom-paragraph">
                    We are a 2048x2048 pixel art project dropping this August on the
                    Base Layer 2 Chain. <br /> <br /> Explore a diverse range
                    of traits and combinations matched together seamlessly to
                    deliver the best Based pino possible.
                </p>
            </section>
        </div>
    );
};

const CheckeredBox = ({ position }) => (
    <div className={`${position} absolute w-16 h-16`}>
        <div className="flex flex-wrap w-full h-full">
            <div className="w-1/2 h-1/2 bg-lightgray"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2 bg-lightgray"></div>
        </div>
    </div>
);

export default FirstSection;
