import { type StaticImageData } from "next/image";

import ancientearthImage from "../assets/products/ancientearth.jpeg";
import cabernetsauvignonImage from "../assets/products/cellarcabernet.jpeg";
import cellarshtazImage from "../assets/products/cellarshtaz.jpeg";
import culemborgImage from "../assets/products/culemborg.jpeg";
import cellarmerlotImage from "../assets/products/cellarmerlot.jpeg";
import cellarpinotageImage from "../assets/products/cellarpinotage.jpeg";

type tStatus = 'Available' | 'On command' | 'Out of Stock';

export type tProductItem = {
  key: string;
  name: string;
  title: string;
  image: StaticImageData;
  resume: string;
  price: number;
  description: string;
  status: tStatus;
}

export const ancientearth: tProductItem = {
  key: 'ancientearth',
  name: 'Bellingham',
  title: 'Ancient Earth Merlot',
  image: ancientearthImage,
  resume: "Bellingham Ancient Earth Merlot is a full-bodied wine that hails from the Stellenbosch region of the Western Cape in South Africa. Made from Merlot grapes grown in the coastal region, this wine has a deep purple color and a nose of black cherry, blackberry, and a hint of oak.",
  description: "Bellingham Ancient Earth Merlot is a full-bodied wine that hails from the Stellenbosch region of the Western Cape in South Africa. Made from Merlot grapes grown in the coastal region, this wine has a deep purple color and a nose of black cherry, blackberry, and a hint of oak. \nOn the palate, flavors of dark fruit, chocolate, and a touch of spice are balanced by smooth tannins and a long, dry finish. With an alcohol content of 13.8%, this wine is bold and full of character. It is also soft and acidic, making it a great match for dishes like grilled beef, lamb, or veal.\nBellingham Ancient Earth Merlot is a classic example of South African Merlot, showcasing the unique terroir of the Western Cape. It is a wine that is sure to impress any Merlot lover with its bold flavors and smooth, tannic finish. Please be advised that this wine contains sulfites.",
  price: 50_000,
  status: 'On command',
};

// export const cabernetsauvignon: tProductItem = {
//   key: 'cabernetsauvignon',
//   name: 'Cabernet Sauvignon Franschhoek Cellar',
//   image: cabernetsauvignonImage,
//   resume: 'wine enthusiasts who appreciate bold, full-bodied red wines, as well as those who are looking for a wine that pairs well with red meats and hearty dishes.',
//   price: 25_000,
//   status: 'On command',
// };

// export const cellarshtaz: tProductItem = {
//   key: 'cellarshtaz',
//   name: 'Franschhoek Cellar Shiraz',
//   image: cellarshtazImage,
//   resume: 'wine enthusiasts who appreciate bold, spicy red wines, as well as those who are looking for a wine that pairs well with grilled meats and flavorful dishes.',
//   price: 40_000,
//   status: 'On command',
// };

// export const culemborg: tProductItem = {
//   key: 'culemborg',
//   name: 'Culemborg Merlot',
//   image: culemborgImage,
//   resume: 'Culemborg Merlot is a full-bodied wine made from Merlot grapes grown in the Western Cape region of South Africa. This wine has a deep purple color and a nose of black cherry, blackberry, and a hint of oak. On the palate, flavors of dark fruit, chocolate, and a touch of spice are balanced by soft tannins and a long, smooth finish. With an alcohol content of 13%, this wine is perfect for sipping on its own or pairing with grilled meats, pasta with tomato-based sauces, and sharp cheeses. Culemborg Merlot is a classic example of South African Merlot, showcasing the unique terroir of the Western Cape. Please be advised that this wine contains sulfites.',
//   price: 50_000,
//   status: 'On command',
// };

// export const cellarmerlot: tProductItem = {
//   key: 'cellarmerlot',
//   name: 'Franschhoek Cellar Merlot',
//   image: cellarmerlotImage,
//   resume: 'wine enthusiasts who appreciate soft, fruity red wines and are looking for a wine that inspires and excites them with its unique characteristics and provenance.',
//   price: 35_000,
//   status: 'On command',
// };

// export const cellarpinotage: tProductItem = {
//   key: 'cellarpinotage',
//   name: 'Franschhoek Cellar Merlot',
//   image: cellarpinotageImage,
//   resume: 'wine enthusiasts who appreciate soft, fruity red wines and are looking for a wine that inspires and excites them with its unique characteristics and provenance.',
//   price: 35_000,
//   status: 'On command',
// };

export const products: tProductItem[] = [ancientearth]

export default products;
