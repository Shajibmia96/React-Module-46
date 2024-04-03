import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Granpa = () => {
    return (
        <div className="border-4 border-lime-200 m-4 p-4">
             <h1 className="text-2xl">GranPa</h1>
              <section className="flex gap-5 justify-between">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
              </section>
        </div>
    );
};

export default Granpa;