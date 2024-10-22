import Header from "../../components/Header/header";

const Oferta = () => {
  return (
    <>
      <div className="relative text-white  flex flex-col justify-center h-[90vh] items-center overflow-hidden" style={{background:"#0277EEE0"}}>
        <img
          src="./assets/background.png"
          alt="Background"
          className="absolute inset-0 w-full h-5/6 object-cover opacity-20 z-0"
        />

        <img
          src="./assets/dot.png"
          alt="Dot Decoration"
          className="absolute top-0 left-2/3 opacity-100 z-0"
        />
        <img
          src="./assets/dot.png"
          alt="Dot Decoration"
          className="absolute bottom-0 left-20 opacity-100 z-0"
        />

        <Header />

        <section className="z-10 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl max-w-4xl mx-auto leading-tight">
            Eleve sua experiência com a gestão inteligente de processos
          </h1>
          <h2 className="font-semibold text-xl lg:text-2xl mt-4">
            Diga adeus às planilhas e papéis!
          </h2>

          <div className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            <p>
              Nosso sistema transforma a forma como você gerencia seus casos.
              Automatize tarefas, centralize informações e ganhe mais tempo para
              focar no que realmente importa:{" "}
              <span className="font-bold">seus clientes</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold py-2 text-lg px-8 rounded-md hover:bg-gray-100 transition duration-300">
              Conheça nossa ferramenta
            </button>
            <button className="bg-transparent border border-white text-lg text-white font-semibold py-2 px-8 rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
              Conheça nossos planos
            </button>
          </div>
        </section>
      </div>

      <section className="relative w-full py-48 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="relative ">
            <img
              src="./assets/first.png"
              alt="Exemplo de Solução"
              className="mx-auto w-full max-w-4xl relative"
              style={{ marginTop: "-18%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Oferta;
