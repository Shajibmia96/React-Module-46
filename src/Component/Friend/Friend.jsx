import { useContext } from "react";
import { AssetContax, MoneyContext } from "../GranPa/Granpa";


const Friend = () => {
    const Ring = useContext(AssetContax)
    const [money] = useContext(MoneyContext)
    return (
        <div>
              <h1>{Ring}</h1>
              <p>Money : {money}</p>
        </div>
    );
};

export default Friend;