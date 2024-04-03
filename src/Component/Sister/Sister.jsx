import { useContext } from "react";
import { MoneyContext } from "../GranPa/Granpa";

const Sister = () => {
    const [money , setMoney]  = useContext(MoneyContext)
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1>Sister</h1>
            <h1>Money :{money}</h1>
            <button className="bg-blue-300" onClick={()=>setMoney(money + 1000)}>Add 1k tk</button>
        </div>
    );
};

export default Sister;