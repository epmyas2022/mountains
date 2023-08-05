import everest from "../assets/imgs/everest.jpg";
import aconcagua from "../assets/imgs/aconcagua.jfif";
import k2 from "../assets/imgs/K2.jfif";
import montBlanc from "../assets/imgs/monte_blanco.jfif";

const mountains = [
  {
    title: "Monte Everest",
    description: [
      "El monte Everest, también conocido en Nepal como Sagarmatha y en el Tíbet como Chomolungma, es la montaña más alta del mundo. Su pico se encuentra a 8 848 msnm​ y fue reconocida oficialmente como la montaña más alta del mundo tras una exhaustiva investigación topográfica realizada en 1856. ",
    ],

    fuentes: ["https://es.wikipedia.org/wiki/Monte_Everest"],

    img: everest,
    alt: "Monte Everest",
  },

  {
    title: "Aconcagua",
    description: [
      "El Aconcagua es una montaña de la Cordillera Principal de la Cordillera de los Andes, en la Provincia de Mendoza, Argentina. Es la montaña más alta de América, la más alta fuera de Asia y la más alta tanto del hemisferio occidental como del hemisferio sur con una elevación de la cumbre de 6.961 metros.",
    ],
    fuentes: ["https://es.wikipedia.org/wiki/Aconcagua"],
    img: aconcagua,
    alt: "Aconcagua",
  },
  {
    title: "K DOS",
    description: [
      "El K2, también conocido como Chogori, Ketu o Dapsang, es una montaña de 8611 msnm en la cordillera del Karakórum, en la frontera entre Pakistán y China. Es el segundo pico más alto de la Tierra, después del monte Everest, con una prominencia topográfica de 4017 m.",
    ],
    fuentes: ["https://es.wikipedia.org/wiki/K2"],
    img: k2,
    alt: "K2",
  },
  {
    title: "Mont Blanc",
    description: [
      "El Mont Blanc es la montaña más alta de los Alpes y de la Unión Europea, con una altitud de 4.808,73 metros sobre el nivel del mar. Está situada entre la región del Valle de Aosta, en Italia, y la región de Auvernia-Ródano-Alpes, en Francia.",
    ],
    fuentes: ["https://es.wikipedia.org/wiki/Monte_Blanco"],
    img: montBlanc,
    alt: "Mont Blanc",
  },
];

export default mountains;
