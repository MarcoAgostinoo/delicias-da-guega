import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Textos alinhados com o branding da Maravilhas da Dedá
const features = [
  {
    title: "Design Artístico e Exclusivo",
    desc: "Cada bolo é uma tela em branco. Unimos sua inspiração a técnicas refinadas para criar um design único, que será o centro das atenções da sua festa.",
  },
  {
    title: "Ingredientes Selecionados",
    desc: "O sabor é a alma do doce. Usamos apenas ingredientes da mais alta qualidade, como chocolate belga e favas de baunilha, para uma experiência inesquecível.",
  },
  {
    title: "Atendimento Próximo e Pessoal",
    desc: "Você conversa diretamente com a Dedá. Cuidamos de cada etapa, da consultoria à entrega, garantindo uma experiência tranquila e especial para você.",
  },
  {
    title: "Sabores que Contam Histórias",
    desc: "Oferecemos um cardápio de massas aveludadas e recheios cremosos, cuidadosamente harmonizados para criar memórias afetivas a cada mordida.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-ivory py-16 dark:bg-chocolate">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Imagem */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <Image
              src="/sobreBackground.gif"
              alt="Andreia 'Dedá', confeiteira da Maravilhas da Dedá, finalizando a decoração de um bolo."
              width={600}
              height={400}
              className="w-full rounded-lg object-contain shadow-2xl border-4 border-gold"
              style={{
                minHeight: 400,
                maxHeight: 480,
                objectPosition: "center",
              }}
              priority
            />
          </div>
          {/* Texto e features */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <p className="mb-2 text-sm font-semibold tracking-wider text-gold uppercase">
              POR QUE ESCOLHER A MARAVILHAS DA DEDÁ
            </p>
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-chocolate dark:text-ivory">
              Sua Celebração, Nossa Obra-Prima
            </h2>
            <p className="mb-8 text-base text-chocolate dark:text-ivory">
              Na Maravilhas da Dedá, acreditamos que cada celebração é um momento único. Mais do que doces, criamos o coração da sua festa: uma obra de arte comestível, pensada em cada detalhe para refletir seus sonhos e encantar seus convidados.
            </p>
            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-2xl text-chocolate"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-chocolate dark:text-ivory">
                      {item.title}
                    </h4>
                    <span className="text-sm text-sage dark:text-ivory">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}