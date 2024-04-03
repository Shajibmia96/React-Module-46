import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
            <h1 className="text-2xl">Dad</h1>

            <section  className="flex gap-5 justify-between">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;