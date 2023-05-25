import type {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.svg";
import header from "../public/header.svg";
import iconHeaderCenter from "../public/iconHeaderCenter.svg";
import iconHeaderCenter1 from "../public/iconHeaderCenter1.svg";
import iconHeaderCenter2 from "../public/iconHeaderCenter2.svg";
import iconHeaderCenter3 from "../public/iconHeaderCenter3.svg";
import iconHeaderCenter4 from "../public/iconHeaderCenter4.svg";

const elementsInCart = 0;
const Header: React.FC = () => {
  return (
    <header>
      <div className="max-w-full flex items-center justify-between p-32px mb-2">
        <Link href={"/"}>
          <a>
            <Image alt="logo" height="28.15px" src={logo} width="192px" />
          </a>
        </Link>
        <div className="">
          <a className="m-3">
            <Image alt="iconHeaderCenter" src={iconHeaderCenter} />
          </a>
          <a className="m-3">
            <Image alt="iconHeaderCenter" src={iconHeaderCenter1} />
          </a>
          <a className="m-3">
            <Image alt="iconHeaderCenter" src={iconHeaderCenter2} />
          </a>
          <a className="m-3">
            <Image alt="iconHeaderCenter" src={iconHeaderCenter3} />
          </a>
          <a className="m-3">
            <Image alt="iconHeaderCenter" src={iconHeaderCenter4} />
          </a>
        </div>
        <button className="inline-flex items-center rounded-large border-white border-1 py-13px px-32px">
          <p className="leading-4">CART({elementsInCart})</p>
        </button>
      </div>
      <div className="flex items-center flex-col justify-between text-center h-80 pt-3">
        <div className="flex items-center h-md">
          <h1 className="text-xl font-bold">BASEMENT</h1>
        </div>
        <div className="flex items-center h-md">
          <div className="border-white border-1 rounded-large">
            <span>EST</span>
          </div>
          <h1 className="supply">SUPPLY</h1>
          <div>
            <span>2K23</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const MotionBar: React.FC = () => {
  return (
    <div className="max-w-full overflow-hidden border-t-2 border-b-2 box-border">
      <div className="overflow-left-right box-content">
        <p className="text-lg m-7">
          A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag  — A man
          can’t have enough base­ment swag  — A man can’t have enough base­ment swag
        </p>
      </div>
    </div>
  );
};

// const MotionBar: React.FC = () => {
//   return (
//     <div className="overflow-left-right">
//       A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
//     </div>
//   );
// };

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MotionBar />
    </div>
  );
};

export default Home;
