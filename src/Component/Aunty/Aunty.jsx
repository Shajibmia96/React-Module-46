import Cousin from "../Cousin/Cousin";


const Aunty = ({asset}) => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
             <h1 className="text-2xl">Aunty</h1>
             <section  className="flex gap-5 ">
                
                <Cousin name={"Maimona"} asset={asset}></Cousin>
               
            </section>
        </div>
    );
};

export default Aunty;