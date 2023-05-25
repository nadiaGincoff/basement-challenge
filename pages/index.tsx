import type {NextPage} from "next";

import {Header, AnimatedTextBar, BasementSupply} from "./components";

const elementsInCart = 1;

const Home: NextPage = () => {
  return (
    <div className="flex flex-col max-w-full md:items-center justify-start bg-black">
      <section className="flex flex-col justify-start">
        <Header elementsInCart={elementsInCart} />
        <BasementSupply />
      </section>
      <body>
        <AnimatedTextBar />
      </body>
    </div>
  );
};

export default Home;
