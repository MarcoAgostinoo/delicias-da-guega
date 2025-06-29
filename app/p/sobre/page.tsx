import BannerPages from "@/app/components/bannerPages/BannerPages";
import FactsSection from "@/app/components/index/factsSection/FactsSection";
import HeroSobre from "@/app/components/sobre/heroSobre/HeroSobre";
import Team from "@/app/components/sobre/team/Team";

export default function Sobre() {
  return (
    <div className="flex flex-col mb-20 pb-10 ">
      <BannerPages
        title="Sobre Nós"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sobre", active: true },
        ]}
      />
      <HeroSobre />
      <FactsSection />
      <Team
        members={[
          {
            name: "Andreia Miguel",
            role: "Proprietário",
            image: "/sobre/andreia.jpg",
            social: {
              facebook: "https://www.facebook.com/andreia.aparecida.371517",
              instagram: "https://www.instagram.com/maravilhas_da_deda/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
            },
          },
        ]}
      />
    </div>
  );
}
