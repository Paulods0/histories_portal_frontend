import { Helmet } from "react-helmet-async"
import FadeInEffect from "@/components/motion/fade-in"
import MoreViewedContainer from "../components/global/more-viewed/more-viewed-container"

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Overland</title>
      </Helmet>
      <FadeInEffect>
        <main className="flex px-8 py-3 flex-col w-full h-full items-center justify-center">
          <div className="relative w-full h-[500px] mb-8">
            <img
              src="/logo/about.jpg"
              alt="nós"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex w-full px-4 lg:px-0 lg:w-[80vw] mx-auto text-center h-full items-center justify-center flex-col">
            <div className="w-full mb-6">
              <h1 className="font-PlayFair text-[36px] font-medium text-center mb-4">
                Quem somos?
              </h1>
              <p className="font-OpenSans text-sm lg:text-lg">
                Em 2019, nasceu da união de amigos apaixonados por aventura o
                Clube Overland Angola. Mais do que um mero grupo, somos uma
                irmandade que pulsa com a vontade de explorar, conhecer e
                celebrar a beleza de Angola. Juntos, percorremos trilhas
                desafiadoras, equipamos nossos veículos com autonomia e
                desfrutamos da alegria de compartilhar experiências
                inesquecíveis. O Overland Angola transcende os limites do comum.
                Somos um estilo de vida, uma filosofia que valoriza a liberdade,
                a amizade e a conexão com a natureza. Cada expedição é uma
                oportunidade de desbravar novos horizontes, superar limites e
                fortalecer os vínculos que nos unem. O Clube Overland Angola
                abre suas portas para todos que desejam compartilhar a paixão
                por viagens, offroad e a beleza incomparável de Angola. Venha
                fazer parte da nossa família e juntos, vamos escrever histórias
                épicas nas estradas do nosso país! Overland Angola, a aventura
                começa aqui.
              </p>
            </div>

            <div className="w-full mb-6">
              <h1 className="font-PlayFair font-medium text-center mb-4 text-[36px]">
                O que é o overland?
              </h1>
              <p className="font-OpenSans text-sm lg:text-lg">
                Overland não é só um passeio de Jipe. É um hino à liberdade, um
                desafio para a alma aventureira que pulsa em nós. É a melodia
                que os nossos pés, as nossas rodas, por caminhos inexploradas,
                que conecta-nos com a sinfonia da natureza e a batida pulsante
                de diferentes culturas, paisagens, a nossa terra ao nosso olhar.
                Em cada quilômetro desbravado, compõe tua própria história.
                Acampar sob as estrelas, cozinhar ao som dos grilos e
                equipando-se para os desafios da estrada, tu reges a tua própria
                aventura. Destinos remotos, como notas musicais exóticas,
                convidam a descobrir paisagens secretas e culturas autênticas,
                longe dos acordes repetitivos do turismo convencional. Liberdade
                e aventura são os instrumentos que temos disponíveis. Cria o teu
                próprio ritmo, improvisa rotas e viva cada momento com a
                intensidade nas mãos da tua máquina. Overland é a fusão perfeita
                entre nós, a natureza e a máquina offroad, o teu fiel
                companheiro. Juntos, para explorar o inexplorado, desafiar os
                limites e criar memórias que ecoarão para sempre em nossos
                corações. Então, aventureiro overlander, prepara-te, ajusta o
                teu setup, embarca na aventura Overland!
              </p>
            </div>
          </div>

          <div className="mt-20 w-full flex flex-col">
            <MoreViewedContainer />
          </div>
        </main>
      </FadeInEffect>
    </>
  )
}

export default AboutUs
