/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonMedia = ({ img, url }) => {
    return (
        <div className="flex justify-center items-center">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F7F7F7] flex justify-center items-center w-24 h-12 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 rounded-lg"
            >
                <img
                    className="w-14 h-7 object-contain"
                    src={img}
                    alt="imagen red social"
                />
            </a>
        </div>
    );
};

export default ButtonMedia;
