import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Precing = () => {
  return (
    <section className="bg-[#F8F9FA] flex flex-col justify-center items-center py-10">
      <h1 className="font-bold text-3xl text-[#1D79FB]">Nossos planos</h1>
      <p className="text-2xl text-[#6B7280] text-center max-w-2xl">
        Encontre o melhor plano de acordo com a necessidade do seu escritório.
      </p>

      <div className="flex flex-wrap justify-center mt-12 items-center gap-8 max-w-[1100px] w-full">
        {/* Card Inicial */}
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-[333px]">
          <h2 className="text-xl font-bold text-center text-[#1D79FB]">Inicial</h2>
          <p className="mt-2 text-center text-[#6B7280]">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing praesent.
          </p>
          <p className="mt-4 text-2xl text-center text-[#6B7280]">
            <span className="font-extrabold text-5xl" style={{ color: "#0277EE" }}>R$30</span> / mês
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Lorem ipsum 
            <strong> sit consectetur.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Praesent 
            <strong> luctus facilisis.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Aenean lobortis 
            <strong> velit a suscipit.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Nulla consequat 
            <strong> sem sit amet.</strong>
          </p>
          <button className="mt-4 bg-[#0277EE] text-white py-2 px-4 rounded hover:bg-blue-600">
            Selecionar este plano
          </button>
        </div>

        {/* Card Intermediário */}
        <div className="relative flex flex-col p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-[333px]">
          {/* Div Mais Popular */}
          <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#26B99A] rounded-md flex justify-center items-center h-[30px] w-[193px]">
            <p className="flex flex-row text-[#ffffff] text-center items-center">
              <FaRegStar className="text-[#ffffff] mr-2 text-lg" /> Mais popular
            </p>
          </div>
          <h2 className="text-xl font-bold text-center text-[#1D79FB]">Intermediário</h2>
          <p className="mt-2 text-center text-[#6B7280]">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing praesent.
          </p>
          <p className="mt-4 text-2xl text-center text-[#6B7280]">
            <span className="font-extrabold text-5xl" style={{ color: "#0277EE" }}>R$100</span> / mês
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Lorem ipsum 
            <strong> sit consectetur.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Praesent 
            <strong> luctus facilisis.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Aenean lobortis 
            <strong> velit a suscipit.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Nulla consequat 
            <strong> sem sit amet.</strong>
          </p>
          <button className="mt-4 bg-[#0277EE] text-white py-2 px-4 rounded hover:bg-blue-600">
            Selecionar este plano
          </button>
        </div>

        {/* Card Completo */}
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-[333px]">
          <h2 className="text-xl font-bold text-center text-[#1D79FB]">Completo</h2>
          <p className="mt-2 text-center text-[#6B7280]">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing praesent.
          </p>
          <p className="mt-4 text-2xl text-center text-[#6B7280]">
            <span className="font-extrabold text-5xl" style={{ color: "#0277EE" }}>R$300</span> / mês
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Lorem ipsum 
            <strong> sit consectetur.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Praesent 
            <strong> luctus facilisis.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Aenean lobortis 
            <strong> velit a suscipit.</strong>
          </p>
          <p className="mt-2 flex flex-row text-[#6B7280]">
            <FaCheckCircle className="text-[#26B99A] mr-2 mt-2 text-sm" />Nulla consequat 
            <strong> sem sit amet.</strong>
          </p>
          <button className="mt-4 bg-[#0277EE] text-white py-2 px-4 rounded hover:bg-blue-600">
            Selecionar este plano
          </button>
        </div>
      </div>
    </section>
  );
};

export default Precing;
