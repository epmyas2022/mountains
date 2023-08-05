import app from "./css/home.module.css";
import bg from "../assets/imgs/background.png";
import mountain from "../assets/imgs/mountain.png";
import { ParallaxBanner } from "react-scroll-parallax";
import mountains from "../data/mountains";

const home = () => {
  return (
    <ParallaxBanner
      className={`aspect-[2/1] ${app.content}`}
      layers={[
        {
          image: bg,
          speed: -10,
        },

        {
          image: mountain,
          speed: -80,
        },
      ]}
    >
      <div className={app.title}>
        <h2>MONTAÑAS</h2>
      </div>
    </ParallaxBanner>
  );
};

function contenido() {
  return mountains.map((mountain) => (
    <div className={` ${app.bgPrimary} `}>
      <div
        className={`${app.mountain}`}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        <div className={`${app.mountainInfo}`}>
          <h1 className={`${app.titleColor}`}>{mountain.title}</h1>
          {mountain.description.map((description) => (
            <p className={`${app.description} ${app.textColor}`}>
              {description}
            </p>
          ))}

          <div className={`${app.fuentes}`}>
            <h3 className={`${app.titleColor}`}>Fuentes :</h3>
            {mountain.fuentes.map((fuente) => (
              <li>
                <a target="_blank" href={fuente} className={`${app.textColor}`}>
                  {fuente}
                </a>
              </li>
            ))}
          </div>
        </div>

        <div className={`${app.mountainImg}`}>
          <img src={mountain.img} alt={mountain.alt} />
        </div>
      </div>
    </div>
  ));
}

export { home, contenido };
