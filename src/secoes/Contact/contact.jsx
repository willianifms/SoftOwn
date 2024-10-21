const Contact = () => {
  return (
    <section className="bg-[#F8F9FA] flex-col flex justify-center items-center lg: h-[366px]">
      <h1 className="font-bold text-3xl" style={{ color: "#1D79FB" }}>
        Comece seu teste gratuito hoje
      </h1>
      <p className="text-2xl" style={{ color: "#6B7280" }}>
        Entre em contato com nosso time e agende uma demonstração gratuita!
      </p>

      <button className="flex items-center gap-2 p-2 border border-[#1D79FB] bg-[#1D79FB] rounded-md w-[299px] h-[40px] text-white">
        <FaWhatsapp className="text-xl" /> {/* Ícone do WhatsApp */}
        <span>Enviar Mensagem</span> {/* Texto do botão */}
      </button>
    </section>
  );
};

export default Contact;
