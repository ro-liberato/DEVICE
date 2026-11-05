import Button from "../ui/Button";
import DiamondPattern from "../ui/DiamondPattern";
import DoctorPhoto from "../ui/DoctorPhoto";
import { DOCTOR, IMAGES, BOOKING_ANCHOR } from "../../config/siteConfig";

export default function DoctorSection() {
  return (
    <section className="section doctor" id="medico">
      <DiamondPattern tone="light" className="doctor__pattern" />
      <div className="container doctor__inner">
        <DoctorPhoto className="doctor__photo" src={IMAGES.doctorAbout} alt={`${DOCTOR.name} em consultório`} />
        <div className="doctor__text">
          <span className="eyebrow">Sobre o médico</span>
          <h2>{DOCTOR.name}</h2>
          <p className="doctor__role">{DOCTOR.specialty} | {DOCTOR.institute}</p>
          <p>
            Avaliação individualizada, escuta atenta e planejamento das opções de tratamento
            conforme a necessidade de cada paciente, com discrição e segurança.
          </p>
          <Button href={BOOKING_ANCHOR} icon="calendar">
            Agendar com o Dr. Guilherme
          </Button>
        </div>
      </div>
    </section>
  );
}
