import { useContext } from "react";
import { AssetContax } from "../GranPa/Granpa";


const Special = ({asset}) => {
    const Gift = useContext(AssetContax)
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
             <h1 className="text-2xl"> Special</h1>
             <p>{asset}</p>
             <p>Also has {Gift}</p>
        </div>
    );
};

export default Special;