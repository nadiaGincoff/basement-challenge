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
      <div className="max-w-full flex items-center justify-between p-32px">
        <Link href={"/"}>
          <a>
            <Image alt="logo" height="28.15px" src={logo} width="192px" />
          </a>
        </Link>
        <div>
          <Image alt="iconHeaderCenter" src={iconHeaderCenter} />
          <Image alt="iconHeaderCenter" src={iconHeaderCenter1} />
          <Image alt="iconHeaderCenter" src={iconHeaderCenter2} />
          <Image alt="iconHeaderCenter" src={iconHeaderCenter3} />
          <Image alt="iconHeaderCenter" src={iconHeaderCenter4} />
        </div>
        <button className="inline-flex items-center rounded-large border-white border-1 py-13px px-32px">
          <p className="leading-4">CART({elementsInCart})</p>
        </button>
      </div>
      <Image alt="logo" src={header} />
    </header>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
