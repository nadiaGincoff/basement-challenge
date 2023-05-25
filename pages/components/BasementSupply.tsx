// const BasementSupply: React.FC = () => {
//   return (
//     <section className="flex items-center flex-col justify-start text-center sm:h-sm md:h-sm bg-red-100">
//       {/* <div className="flex items-center md:h-md"> */}
//       {/* <h1 className="flex flex-col items-center md:h-md whitespace-pre-wrap">
//         <h4 className="sm:text-6xl md:text-9xl font-bold">BASEMENT</h4>
//         <div className="flex items-center md:h-md">
//           <div className="border-white border-1 rounded-large">
//             <span className="text-sm">EST</span>
//           </div>
//           <h1 className="supply sm:text-6xl md:text-9xl">SUPPLY</h1>
//           <div className="border-white border-1 rounded-large">
//             <span className="text-sm">2K23</span>
//           </div>
//         </div>
//       </h1> */}
//       {/* </div> */}
//     </section>
//   );
// };

const BasementSupply: React.FC = () => {
  return (
    <section className="flex items-center flex-col justify-start text-center sm:-mt-4 sm:-mb-2 md:-mt-12 md:-mb-9">
      <h1 className="text-white">
        <h1 className="sm:tracking-tighter sm:text-7xl md:text-13xl font-bold text-center">
          BASEMENT
        </h1>
        <div className="flex items-center justify-center sm:-mt-8 md:-mt-44 ">
          <div className="border-white sm:border-1 md:border-1 rounded-full flex flex-center justify-center pt-0.5">
            <p className="sm:pt-5px sm:pb-5px sm:pl-15px sm:pr-15px md:pt-13px md:pb-13px md:pl-32px md:pr-32px font-bold leading-5 tracking-tight sm:text-ssm md:text-xl pt-3">
              EST
            </p>
          </div>
          <h1 className="supply sm:tracking-tighter mx-1 leading-normal sm:text-7xl md:text-9xl font-bold">
            SUPPLY
          </h1>
          <div className="border-white sm:border-1 md:border-1 rounded-full flex flex-center justify-center pt-0.5">
            <p className="sm:pt-5px sm:pb-5px sm:pl-15px sm:pr-15px md:pt-13px md:pb-13px md:pl-32px md:pr-32px font-bold leading-5 tracking-tight sm:text-ssm md:text-xl pt-3">
              2K23
            </p>
          </div>
        </div>
      </h1>
    </section>
  );
};

export default BasementSupply;
