import React from 'react';

interface AvatarProps {
  hat?: string;
  top?: string;
  bottom?: string;
  shoes?: string;
  accessory?: string;
}

const Avatar: React.FC<AvatarProps> = ({ hat, top, bottom, shoes, accessory }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-40 h-40">
        <img src="/avatar/base.png" alt="Avatar Base" className="absolute w-full h-full" />
        {hat && <img src={hat} alt="Hat" className="absolute w-full h-full" />}
        {top && <img src={top} alt="Top" className="absolute w-full h-full" />}
        {bottom && <img src={bottom} alt="Bottom" className="absolute w-full h-full" />}
        {shoes && <img src={shoes} alt="Shoes" className="absolute w-full h-full" />}
        {accessory && <img src={accessory} alt="Accessory" className="absolute w-full h-full" />}
      </div>
    </div>
  );
};

export default Avatar;
