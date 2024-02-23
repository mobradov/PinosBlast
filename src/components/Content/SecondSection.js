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

const SecondSection = () => {
    const firstRowImages = [pinos1, pinos2, pinos3];
    const secondRowImages = [
        pinos4, pinos5, pinos6, pinos7
    ];
    const thirdRowImages = [pinos8, pinos9, pinos10];

    return (
        <div className="relative flex my-14">
            <section className="flex flex-col items-start gap-6 w-1/2 mt-12">
                <h1 className="custom-heading">The art</h1>
                <p className="custom-paragraph w-9/12">
                    Based Fellas art was made over the course of 2 months, we
                    have 15 different types coupled with 180+ traits and
                    millions of combinations. We have taken our time to perfect
                    each one. Many iterations were made to fix and perfect each
                    trait. The generation itself took over 65 rules and a custom
                    script, ensuring each Fella was created to perfection!{' '}
                    <br /> <br />
                    There are 10 Legendary Fellas awaiting the few lucky enough
                    to mint them.
                </p>
            </section>

            <section className="flex flex-col items-center gap-4 w-1/2 pr-14">
                <div className="grid gap-3 grid-cols-3">
                    {firstRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>

                <div className="grid gap-3 grid-cols-4">
                    {secondRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>

                <div className="grid gap-3 grid-cols-3">
                    {thirdRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>
            </section>
            <div className="absolute left-0 bottom-[-7%] w-full h-[55%] scale-110 bg-lightgray"></div>
        </div>
    );
};

export default SecondSection;
