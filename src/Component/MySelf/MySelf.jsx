import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1>Myself</h1>
            <Special asset={asset}></Special>
        </div>
    );
};

export default MySelf;