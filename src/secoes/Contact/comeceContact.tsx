import { FaWhatsapp } from 'react-icons/fa';

function ComeceContact() {
  return (
    <section className="bg-[#F8F9FA] flex flex-col justify-center items-center h-[366px]">
      <h1 className="font-bold text-3xl text-[#1D79FB]">
        Comece seu teste gratuito hoje
      </h1>
      <p className="text-2xl text-[#6B7280]">
        Entre em contato com nosso time e agende uma demonstração gratuita!
      </p>

      <button className="flex items-center justify-center gap-2 p-2 border border-[#1D79FB] bg-[#1D79FB] rounded-md w-[299px] h-[40px] text-white mt-4">
         {/* Ícone do WhatsApp */}
        <span>Enviar Mensagem</span>
        <FaWhatsapp className="text-xl" />
      </button>
    </section>
  );
}

export default ComeceContact;
