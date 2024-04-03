import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
export const AssetContax = createContext('Gold')

const Granpa = () => {
  const asset = 'Diamond Ring';
    return (
        <div className="border-4 border-lime-200 m-4 p-4 rounded-2xl">
             <h1 className="text-2xl">GranPa</h1>
            <AssetContax.Provider value="Gold">

            <section className="flex gap-5 ">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunty asset={asset}></Aunty>
              </section>

            </AssetContax.Provider>
        </div>
    );
};

export default Granpa;