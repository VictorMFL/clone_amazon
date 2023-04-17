import BannerPromo from '../assets/img/banner_promo.jpg'

const Promocoes = () => {
  return (
    <>
      <div className="hidden md:block my-6">
        <img src={BannerPromo} alt="Promoções" />
      </div>
      <div className="flex flex-col md:flex-row items-center my-8 py-1">
        <p className="font-bold md:w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">
          Assine o Amazon Prime para ter benefícios de leitura com o Prime
          Reading, frete GRÁTIS sem valor mínimo de compra e muito mais. Apenas
          R$ 9,90/mês.
        </p>
        <a href="#" className="btn-amazon-prime">
          Teste GRÁTIS por 30 dias
        </a>
      </div>
    </>
  );
};

export default Promocoes;
