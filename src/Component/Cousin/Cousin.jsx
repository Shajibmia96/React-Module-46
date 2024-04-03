import Special from "../Special/Special";


const Cousin = ({name , asset}) => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1>Cousin</h1>
            <p>{name}</p>
            { asset && <Special asset={asset}></Special>}
        </div>
    );
};

export default Cousin;