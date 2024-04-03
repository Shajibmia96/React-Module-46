import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
export const AssetContax = createContext('Gold');
export const MoneyContext = createContext(1000)


const Granpa = () => {
  const [money , setMoney] = useState(1000);
  const asset = 'Diamond Ring';
    return (
        <div className="border-4 border-lime-200 m-4 p-4 rounded-2xl">
             <h1 className="text-2xl">GranPa</h1>
             <p>Money :{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
              <AssetContax.Provider value="Gold">

           <section className="flex gap-5 ">
           <Dad asset={asset}></Dad>
           <Uncle></Uncle>
           <Aunty asset={asset}></Aunty>
           </section>

            </AssetContax.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Granpa;