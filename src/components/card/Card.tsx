import React from "react";
import Image, { type StaticImageData } from "next/image";

type CardProps = {
  picture: string | StaticImageData;
  title: string;
  resume: string;
  price: number;
  onPurchase: () => void;
};

const Card: React.FC<CardProps> = ({
  picture,
  title,
  resume,
  price,
  onPurchase,
}) => {
  return (
    <div className="card card-side mb-4 rounded-lg bg-gray-700/40 shadow-md hover:shadow-lg break-inside-avoid">
      <div className="card-body">
        <div className="px-6 py-4">
          <div className="mb-2 text-lg font-bold">{title}</div>
          <p className="text-sm text-white">{resume}</p>
        </div>
        <div className="card-actions flex items-center justify-between px-6 py-4">
          <span className="mr-2 inline-block rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "MGA",
            }).format(price)}
          </span>
          <button className="btn btn-primary" onClick={onPurchase}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

// <div className="w-96 overflow-hidden rounded-lg shadow-md hover:shadow-lg mb-4 bg-gray-700/40">
//   <Image src={picture} alt={title}  width={384} height={384} />
//   <div className="px-6 py-4">
//     <div className="mb-2 text-lg font-bold">{title}</div>
//     <p className="text-sm text-white">
//       {resume}
//     </p>
//   </div>
//   <div className="flex items-center justify-between px-6 py-4">
//     <span className="mr-2 inline-block rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700">
//       {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'MGA' }).format(price)}
//     </span>
//     <button
//       onClick={onPurchase}
//       className="focus:shadow-outline-blue rounded-full bg-violet-500 py-1 px-4 text-sm font-semibold text-white hover:bg-fuchsia-500 focus:outline-none active:bg-fuchsia-500"
//     >
//       Order
//     </button>
//   </div>
// </div>
export default Card;
