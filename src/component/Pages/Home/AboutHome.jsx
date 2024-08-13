import aboutHomeImg1 from '../../../assets/aboutHome-img/about_1.jpg.webp'
import aboutHomeImg2 from '../../../assets/aboutHome-img/about_2.jpg.webp'
import './AboutHome.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const AboutHome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="flex justify-center items-center mt-28">
            <div className="xl:w-4/5 md:w-full mx-5 xl:mx-0 lg:flex">
                <div className="lg:w-6/12 lg:px-5">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <h2 className="lg:text-5xl md:text-3xl text-2xl font-medium font-serif leading-tight">Explore All Corners of The World With Us</h2>
                        <p className="my-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
                <div className="lg:w-6/12 flex mt-10 lg:mt-0">
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" className="relative lg:w-[261px] w-full h-[330.38px] hover01 column overflow-hidden">
                        <figure>
                            <img
                                className=" object-cover "
                                src={aboutHomeImg1}
                                alt="Travel around the world"
                            />
                        </figure>
                        <h1 className="absolute xl:bottom-4 md:bottom-12 bottom-28 left-4 text-white text-2xl bg-black bg-opacity-[0.2]  p-2 ">Travel around the world</h1>
                    </div>
                    <div className="relative lg:w-[261px] w-full h-[330.38px] overflow-hidden lg:mt-12 ml-6 hover01 column">
                        <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
                            <figure>
                                <img
                                    className=" object-cover"
                                    src={aboutHomeImg2}
                                    alt="Travel around the world"
                                />
                            </figure>
                            <h1 className="absolute xl:bottom-4 md:bottom-12 bottom-28 left-4 text-white text-2xl bg-black bg-opacity-[0.2] p-2 rounded">Your favorite sea beach</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;
