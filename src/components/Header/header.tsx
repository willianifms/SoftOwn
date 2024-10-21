
const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0 z-10">
      <div className="flex justify-between items-center p-4 lg:p-12">
        <figure>
          <img src="./assets/Logo white.png" alt="Logo SoftOwn" className="w-40 lg:w-64" />
        </figure>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 lg:px-8 rounded-md hover:bg-gray-100 transition duration-300">
          Acessar o Sistema
        </button>
      </div>
    </header>
  );
};

export default Header;
