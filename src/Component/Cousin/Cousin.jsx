import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContax } from "../GranPa/Granpa";


const Cousin = ({name , asset}) => {
    const Gift = useContext(AssetContax)
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1>Cousin</h1>
            <p>{name}</p>
            { asset && <Special asset={asset}></Special>}
            {
                name==='Nipa' && Gift
            }
        </div>
    );
};

export default Cousin;