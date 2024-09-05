import React from 'react';

const ButtonOutlined = ({buttonName}) => {
    return (
        <button className='btn btn-outline border-main text-main px-5 py-2 rounded-none cursor-pointer text-[20px]'>{buttonName}</button>
    );
};

export default ButtonOutlined;