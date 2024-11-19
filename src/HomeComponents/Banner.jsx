import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../src/assets/banner1.jpg';
import banner2 from '../../src/assets/banner2.jpg';
import banner3 from '../../src/assets/banner3.jpg';

const Banner = () => {
    return (
        <div className='mb-16'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><img src={banner1} alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="banner" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;