import livro1 from "../assets/img/livro1.jpg";
import livro2 from "../assets/img/livro2.jpg";
import livro3 from "../assets/img/livro3.jpg";
import livro4 from "../assets/img/livro4.jpg";
import livro5 from "../assets/img/livro5.jpg";
import livro6 from "../assets/img/livro6.jpg";
import livro7 from "../assets/img/livro7.jpg";
import livro8 from "../assets/img/livro8.jpg";

const Catalogo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-2 px-4 text-sm">
        <p>Mostrando 1-32 de 122 Resultados</p>
        <div className="flex md:flex-none">
          <span>Ordenar por</span>
          <select
            name=""
            id=""
            className="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1"
          >
            <option>Destaques</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro1}
            alt="Livro 1"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 26,30</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 63,60</span> (58% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Em Busca De Sentido
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro2}
            alt="Livro 2"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 17,40</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 39,90</span> (56% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Não Se Humilha, Não
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro3}
            alt="Livro 3"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 17,40</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 34,90</span> (50% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            As Seis Lições
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro4}
            alt="Livro 4"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 27,90</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 49,90</span> (44% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Anne II
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro5}
            alt="Livro 6"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 13,40</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 39,90</span> (66% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Propósito - A coragem de ser quem somos
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro6}
            alt="Livro 6"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 20,50</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 42,00</span> (51% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            A Morte de Ivan Illitch
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro7}
            alt="Livro 7"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 10,40</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 37,90</span> (73% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Outros jeitos de usar a boca
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
          <img
            src={livro8}
            alt="Livro 8"
            className="h-210px place-self-center p-2"
          />
          <p className="text-red-700 mt-10">R$ 55,90</p>
          <p className="text-sm mb-2">
            De: <span className="line-through">R$ 119,90</span> (53% off)
          </p>
          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2"
          >
            Nassim Nicholas Taleb - Kit Exclusivo Amazon
          </a>
          <p className="text-sm mb-8">
            Esta oferta é exclusiva para membros do{" "}
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-orange-650"
            >
              Amazon Prime
            </a>
            .
          </p>
          <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
