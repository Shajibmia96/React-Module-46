import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
             <h1 className="text-2xl">Aunty</h1>
             <section  className="flex gap-5 justify-between">
                
                <Cousin name={"Maimona"}></Cousin>
               
            </section>
        </div>
    );
};

export default Aunty;