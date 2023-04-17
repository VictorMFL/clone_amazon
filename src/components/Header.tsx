import amazonLogo from "../assets/img/amazon_logo.png";

const Header = () => {
  return (
    <header>
      <div className="grid text-white">
        {/* HEADER SUPERIOR */}
        <div className="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
          <div className="py-1 px-2 md:border broder-gray-700 hover:border-white rounded">
            <i className="fas fa-bars text-2xl"></i>
          </div>
          <div className="flex mx-2 py-2 border border-transparent hover:border-white">
            <img src={amazonLogo} alt="Amazon" className="h-7" />
            <span className="text-xs pl-1 pt-1">.com.br</span>
          </div>
          <div className="w-full md:w-auto flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none">
            <form action="" className="flex">
              <select
                name=""
                id=""
                className="hidden md:block p-2 text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500"
              >
                <option value="">Livros</option>
              </select>
              <input
                type="text"
                className="p-2 flex-grow rounded-l md:rounded-none"
              />
              <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                <i className="fas fa-search text-darkblue-900 text-xl mt-1"></i>
              </button>
            </form>
          </div>
          <div className="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Olá, Faça seu login</p>
            <p className="font-extrabold">
              Contas e Listas <i className="fas fa-chevron-down"></i>
            </p>
          </div>
          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Devoluções</p>
            <p className="font-extrabold">e Pedidos</p>
          </div>
          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Experimente</p>
            <p className="font-extrabold">
              Prime <i className="fas fa-chevron-down"></i>
            </p>
          </div>
          <div className="p-2 border border-transparent hover:border-white rounded-sm relative right-0 top-0 mr-2 mt-2 md:mr-0 md:t-0 md:relative order-1 md:order-none md:flex">
            <i className="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
            <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">
              0
            </span>
            <span className="hidden md:flex text-xs font-extrabold ">
              Carrinho
            </span>
          </div>
        </div>
        {/* HEADER INTERMEDIARIO */}
        <div className="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
          <div className="address-container">
            <div className="mr-1">
              <i className="fas fa-map-marker-alt text-xl"></i>
            </div>
            <div className="flex md:block leading-tight text-xs">
              <p className="mx-1 md:mx-0">Olá</p>
              <p className="font-bold">Selecione o endereço</p>
            </div>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex ml-10 text-sm">
                <li className="item-nav-mid">
                  <a href="#">Mais Vendidos</a>
                </li>
                <li className="item-nav-mid">
                  <a href="#">Livros</a>
                </li>
                <li className="item-nav-mid">
                  <a href="#">Ofertas do Dia</a>
                </li>
                <li className="item-nav-mid">
                  <a href="#">Atendimento ao Cliente</a>
                </li>
                <li className="item-nav-mid">
                  <a href="#">Eletrônicos</a>
                </li>
                <li className="item-nav-mid">
                  <a href="#">Ideias para Presente</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* HEADER INFERIOR */}
        <div className="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt 1">
          <a href="#" className="block md:hidden py-2 font-bold">
            <i className="fas fa-chevron-left"></i> Todos os Departamentos
          </a>
          <ul className="hidden md:flex">
            <li className="item-nav-inf">
              <a href="#">Livros</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Pesquisa avançada</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Mais vendidos</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Pré-venda e Lançamentos</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Livros em Ofertas</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Inglês e Outras Línguas</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Loja Geek</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Universitários e Acadêmicos</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Didáticos e Escolares</a>
            </li>
            <li className="item-nav-inf">
              <a href="#">Loja Infantil</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
