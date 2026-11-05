import Logo from "../ui/Logo";
import Button from "../ui/Button";
import DiamondPattern from "../ui/DiamondPattern";
import DoctorPhoto from "../ui/DoctorPhoto";
import { Icon } from "../ui/Icons";
import { DOCTOR, IMAGES, WHATSAPP_URL, BOOKING_ANCHOR } from "../../config/siteConfig";

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <DiamondPattern className="hero__pattern" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__logo">
            <Logo size="lg" stacked />
          </div>
          <h1>Cuidado especializado em saúde masculina</h1>
          <p>Atendimento individualizado com o {DOCTOR.name}.</p>
          <div className="hero__actions">
            <Button href={BOOKING_ANCHOR} iconRight>
              Escolher horário
            </Button>
            <Button href={WHATSAPP_URL} external variant="ghost-light">
              Fale com a equipe
            </Button>
          </div>
          <p className="hero__meta">
            <Icon name="pin" size={16} /> Agendamento online • Atendimento no Rio de Janeiro
          </p>
        </div>
        <figure className="hero__photo">
          <DoctorPhoto src={IMAGES.doctorHero} alt={`${DOCTOR.name}, ${DOCTOR.specialty}`} />
          <figcaption>
            <strong>{DOCTOR.name}</strong>
            <span>{DOCTOR.specialty}</span>
            <span>{DOCTOR.institute}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
