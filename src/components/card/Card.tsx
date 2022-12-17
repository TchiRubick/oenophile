import React from "react";
import Image from "next/image";

type CardProps = {
  picture: string;
  title: string;
  description: string;
  price: string;
  onPurchase: () => void;
};

const Card: React.FC<CardProps> = ({
  picture,
  title,
  description,
  price,
  onPurchase,
}) => {
  return (
    <div className="w-80 overflow-hidden rounded-lg shadow-md hover:shadow-lg mb-4 bg-gray-500/5">
      <Image src={picture} alt={title}  width={320} height={480} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700">
          {price}
        </span>
        <button
          onClick={onPurchase}
          className="focus:shadow-outline-blue rounded-full bg-blue-500 py-1 px-4 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Card;
