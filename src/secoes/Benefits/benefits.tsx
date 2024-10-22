
import { FaCheckCircle } from "react-icons/fa"; // Pacote de ícones para o ícone de check

const FocoOtimiza = () => {
  return (
    <section className="relative bg-[#F8F9FA] py-16 z-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-7xl px-4 lg:px-20 gap-10">
        <div className="flex-none w-full lg:w-3/5">
          <figure>
            <img
              src="./assets/third.png"
              alt="Exemplo tarefa e trabalho"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>

        <div className="flex-1">
          <h1 className="text-[#0277EE] font-montserrat font-bold text-[20px] lg:text-[24px] leading-[24px]">
            Foco na otimização de processos
          </h1>
          <ul className="mt-4 text-lg lg:text-1xl font-normal text-[#333333] list-none space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-1 text-5xl" />
              <p
                className="leading-relaxed text-1xl"
                style={{ color: "#6B7280" }}
              >
                <span className="text-[#0277EE] font-semibold">
                  Organize seus casos:{" "}
                </span>
                Tenha todos os seus processos em um só lugar, com informações
                completas e atualizadas.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 text-4xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Automatize tarefas:{" "}
                </span>
                Elimine tarefas repetitivas e ganhe mais tempo para atender seus
                clientes.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 text-4xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Melhore a comunicação:{" "}
                </span>
                Facilite a comunicação com seus clientes e equipe, agilizando o
                processo.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 text-4xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Gere relatórios personalizados:{" "}
                </span>
                Tenha insights valiosos sobre o desempenho do seu escritório.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProtejaDados = () => {
  return (
    <section className="relative bg-white py-16 z-0">
      <div className="container mx-auto flex flex-col flex-col-reverse lg:flex-row items-center justify-between max-w-7xl px-4 lg:px-4 gap-10 ">
        <div className="flex-1">
          <h1 className="text-[#0277EE] font-montserrat font-bold text-[20px] lg:text-[24px] leading-[24px]">
            Proteja seus dados e garanta a conformidade com as normas jurídicas
          </h1>
          <ul className="mt-4 text-lg lg:text-1xl font-normal text-[#333333] list-none space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-1 text-4xl" />
              <p
                className="leading-relaxed text-1xl"
                style={{ color: "#6B7280" }}
              >
                <span className="text-[#0277EE] font-semibold">
                  Segurança de dados:{" "}
                </span>
                Proteja os dados dos seus clientes com as mais modernas
                tecnologias de segurança.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-1 text-4xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Conformidade legal:{" "}
                </span>
                Garanta que seu escritório esteja em conformidade com as normas
                e regulamentações.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-1 text-4xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Auditoria:{" "}
                </span>
                Gere relatórios detalhados para acompanhar o cumprimento das
                normas e regulamentações.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 text-3xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">Backup: </span>
                Tenha a garantia de que seus dados estão seguros com nosso
                sistema de backup.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex-none w-full lg:w-3/5">
          <figure>
            <img
              src="./assets/four.png"
              alt="Exemplo tarefa e trabalho"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

const AgendaeProntuario = () => {
  return (
    <section className="relative bg-[#F8F9FA] py-16 z-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-7xl px-4 lg:px-20 gap-10">
        <div className="flex-none w-full lg:w-3/5">
          <figure>
            <img
              src="./assets/fifth@2x.png"
              alt="Exemplo tarefa e trabalho"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>

        <div className="flex-1">
          <h1 className="text-[#0277EE] font-montserrat font-bold text-[20px] lg:text-[24px] leading-[24px]">
            Agenda e Prontuário de Seus Pacientes
          </h1>
          <ul className="mt-4 text-lg lg:text-1xl font-normal text-[#333333] list-none space-y-4">
            <li className="flex items-start">
              <p
                className="leading-relaxed text-1xl"
                style={{ color: "#6B7280" }}
              >
                Explica pro Product Onwer que o módulo de recursão paralela
                corrigiu o bug do JSON compilado a partir de proto-buffers.
              </p>
            </li>

            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-2 text-5xl " />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Transparência total:{" "}
                </span>
                A equipe de suporte precisa saber que a compilação final do
                programa complexificou o merge no parse retroativo do DOM.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#0277EE] mr-2 -mt-2 text-5xl" />
              <p className="leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="text-[#0277EE] font-semibold">
                  Colaboração eficiente:{" "}
                </span>
                Dado o fluxo de dados atual, o módulo de recursão paralela
                causou a race condition do polimorfismo aplicado nas classes.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const EliminaPapel = () => {
  return (
    <section className="relative bg-[#1D79FB] z-0 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-full px-4 lg:px-0 lg:gap-10">

        <div className="flex-1 lg:pl-16 lg:pr-12">
          <h1 className="text-[#ffffff] font-montserrat font-bold text-2xl lg:text-3xl leading-tight">
            Elimine Todos os Papéis do Seu Escritório
          </h1>
          <ul className="mt-4 text-lg lg:text-xl font-normal text-[#ffffff] list-none space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-[#ffffff] mr-2 text-3xl" />
              <p className="leading-relaxed">
                <span className="text-[#ffffff] font-semibold">Agilidade nos processos: </span>
                A digitalização acelera a busca e o compartilhamento de informações.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#ffffff] mr-2 text-3xl" />
              <p className="leading-relaxed">
                <span className="text-[#ffffff] font-semibold">Automatização de tarefas: </span>
                Redução do trabalho manual com a digitalização de documentos e assinatura eletrônica.
              </p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#ffffff] mr-2 text-3xl" />
              <p className="leading-relaxed">
                <span className="text-[#ffffff] font-semibold">Melhoria na colaboração: </span>
                Facilidade para equipes trabalharem em conjunto em documentos digitais, independentemente da localização.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex-none w-full lg:w-2/5 mt-8 lg:mt-0 md:none">
          <figure className="flex items-center justify-center relative">
            <img
              src="./assets/ilustration.png"
              alt="Ilustração de uma pessoa"
              className="w-2/3 lg:w-3/4 z-10"
            />
            <img
              src="./assets/sixty-decoration.png"
              alt="Decoração"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};



const Benefits = () => {
  return (
    <>
      <FocoOtimiza />
      <ProtejaDados />
      <AgendaeProntuario />
      <EliminaPapel />
    </>
  );
};

export default Benefits;
