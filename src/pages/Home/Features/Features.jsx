import React, { useEffect, useState } from 'react';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className='mb-20'>
            <h1 className='text-5xl font-bold text-center mb-10'>Features</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    features.map(feature => <div className='bg-gradient rounded-xl p-5'>
                        <img className='w-20 h-20' src={feature.image} alt="donation" />
                        <h3 className='font-bold text-2xl my-2'>{feature.headline}</h3>
                        <p className='text-[16px]'>{feature.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;