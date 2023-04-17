const NavBar = () => {
  return (
    <div className="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">
      <h3 className="font-bold">Destaque em livros</h3>
      <ul className="pl-2 mb-2">
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Indicações Amazon</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Inglês e Outras Línguas</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Livros em Oferta</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Mais Vendidos do Mês</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Pré-venda e Lançamentos</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Livros Exclusivos Amazon</a>
        </li>
      </ul>
      <h3 className="font-bold">Páginas Especiais</h3>
      <ul className="pl-2 mb-2">
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Livros Clássicos</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Livros Que Viraram Filmes</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Livros Infantis</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Loja Geek</a>
        </li>
      </ul>
      <h3 className="font-bold">Livros Educacionais</h3>
      <ul className="pl-2 mb-2">
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Didáticos e Escolares</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Estudo e Ensino de Idiomas</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Examos e Concursos</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Importados para Exames</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Universitários e Acadêmicos</a>
        </li>
      </ul>
      <h3 className="font-bold">Kindle</h3>
      <ul className="pl-2 mb-2">
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Acessórios Kindle</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Comprar Kindle</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">eBooks em Inglês</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">eBooks em Oferta</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Kindle Unlimited</a>
        </li>
        <li className="text-gray-800 hover:text-orange-650">
          <a href="#">Todos os eBooks</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
