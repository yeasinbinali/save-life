import React from 'react';

const ButtonSimple = ({ buttonName }) => {
    return (
        <button className='btn bg-main text-[white] px-5 py-2 rounded-none cursor-pointer text-[20px]'>{buttonName}</button>
    );
};

export default ButtonSimple;