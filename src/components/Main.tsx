import React from "react";

import NavBar from "./NavBar";
import Catalogo from "./Catalogo";
import Categoria from "./Categoria";
import Promocoes from "./Promocoes";
import Titulo from "./Titulo";

const Main = () => {
  return (
    <main>
      <div className="grid grid-cols-6">
        {/* NAVBAR ESQUERDA */}
        <NavBar />
        
        {/* CONTEÚDO DO SITE */}
        <div className="col-span-6 md:col-span-5 p-2">
          <div className="flex flex-col">
            {/* TÍTULO E CATEGORIAS */}
            <Titulo />

            {/* PROMOÇÕES E CATEGORIAS */}
            <Promocoes />

            {/* CATEGORIAS */}
            <Categoria />

            {/* CATÁLOGO DE PRODUTOS */}
            <Catalogo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
