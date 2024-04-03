import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1 className="text-2xl">Uncle</h1>
            <section  className="flex gap-5 justify-between">
                
                <Cousin name={"Maisha"}></Cousin>
                <Cousin name={"Nipa"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;