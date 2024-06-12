import React from 'react';
import bannerOne from '../../../assets/banner/banner1.png';
import ButtonSimple from '../../../components/ButtonSimple/ButtonSimple';
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined';

const Banner = () => {
    return (
        <div className="mt-10 mb-20">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className='text-5xl font-bold'>Donate Blood with <span className='text-main'>Save Life</span> Today</h1>
                    <p className='my-8'>Join our life-saving mission by becoming a blood donor. Your generous donation can help patients in critical need, support medical emergencies, and contribute to life-saving treatments. Sign up now and be a hero to those in need.</p>
                    <div className='flex gap-5'>
                        <ButtonSimple buttonName={'Join as a donor'}></ButtonSimple>
                        <ButtonOutlined buttonName={'Search Donors'}></ButtonOutlined>
                    </div>
                </div>
                <div className='pl-5'>
                    <img src={bannerOne} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;