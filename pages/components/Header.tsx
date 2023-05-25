import Image from "next/image";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

import logo from "../../public/logo.svg";
import iconHeaderCenter from "../../public/iconHeaderCenter.svg";
import iconHeaderCenter1 from "../../public/iconHeaderCenter1.svg";
import iconHeaderCenter2 from "../../public/iconHeaderCenter2.svg";
import iconHeaderCenter3 from "../../public/iconHeaderCenter3.svg";
import iconHeaderCenter4 from "../../public/iconHeaderCenter4.svg";

interface HeaderProps {
  elementsInCart: number;
}

const MobileHeader: React.FC<HeaderProps> = ({elementsInCart}) => {
  return (
    <div className="w-full flex items-center justify-between pl-16px pr-16px pt-21px pb-16px">
      <h1 className="text-6xl font-extrabold leading-3">b.</h1>
      <button className="inline-flex items-center rounded-large border-white border-1 max-h-10">
        <p className="pt-16px pb-16px pl-21px pr-21px font-black tracking-widest leading-4 text-base">
          CART ({elementsInCart})
        </p>
      </button>
    </div>
  );
};

const DesktopHeader: React.FC<HeaderProps> = ({elementsInCart}) => {
  return (
    <div className="w-full flex items-center justify-between pt-32px">
      <Link href={"/"}>
        <a>
          <Image alt="logo" height="28.15px" src={logo} width="192px" />
        </a>
      </Link>
      <div>
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
      <button className="inline-flex items-center rounded-large border-white border-1">
        <p className="pt-13px pb-13px pl-32px pr-32px font-black leading-5 text- tracking-tight">
          CART ({elementsInCart})
        </p>
      </button>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({elementsInCart}) => {
  const isMobile = useMediaQuery({maxWidth: "640px"});

  return (
    <header className="max-w-full w-full flex">
      {isMobile ? (
        <MobileHeader elementsInCart={elementsInCart} />
      ) : (
        <DesktopHeader elementsInCart={elementsInCart} />
      )}
    </header>
  );
};

export default Header;
