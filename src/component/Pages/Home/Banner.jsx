import './Banner.css'; // Make sure to create this file for additional styles
import banner1 from '../../../assets/Banner-img/banner1.jpg';
import banner2 from '../../../assets/Banner-img/banner2.jpg';
import banner3 from '../../../assets/Banner-img/banner3.jpg';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'; // Import the default slider styles
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'; // Import the fold-out animation styles

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slides = [
    { image: banner1, caption: 'Explore The World Together' },
    { image: banner2, caption: 'We Believe Your Way is The Highway' },
    { image: banner3, caption: 'Make your Vacation One of the Best With Us' }
];

const Banner = () => {
    return (
        <AutoplaySlider
            play={true}
            organicArrows={false}

            cancelOnInteraction={false} // Keeps autoplay running even after user interaction
            interval={3000} // Change slide every 6 seconds
            animation="foldOutAnimation"
        >
            {slides.map((slide, index) => (
                <div className='' key={index} data-src={slide.image}>
                    <div className="caption-container flex justify-center items-center">
                        <div className="caption w-3/4 text-4xl md:text-7xl leading-snug	">{slide.caption}</div>
                    </div>
                </div>
            ))}
        </AutoplaySlider>
    );
};

export default Banner;
