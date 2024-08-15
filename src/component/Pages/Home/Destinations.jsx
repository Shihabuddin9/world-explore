import { Swiper, SwiperSlide } from 'swiper/react';
// import img from '../../../assets/aboutHome-img/about_1.jpg.webp'
import './Destinations.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// / Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const Destinations = () => {

    return (
        <div className=" flex justify-center items-center my-28">
            <div className="w-4/5">
                <div className="w-2/5">
                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium font-serif leading-tight">We Provide Top Destinations</h1>
                    <p className="my-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div className="">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Destinations;