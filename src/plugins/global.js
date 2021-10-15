import Vue from "vue";
import { DateTime } from "luxon";

Vue.filter("formatAnimalType", (animalType) => {
  const animalTypes = [
    { nameFormated: "Cachorro", key: "DOG" },
    { nameFormated: "Peixe", key: "FISH" },
    { nameFormated: "Gato", key: "CAT" },
    { nameFormated: "Tigre", key: "TIGER" },
    { nameFormated: "Cobra", key: "SNAKE" },
    { nameFormated: "Outra", key: "OTHER" },
  ];
  return (
    (animalTypes.find((animal) => animalType === animal.key) || {})
      .nameFormated || "Desconhecida"
  );
});

Vue.filter("formatData", (valor, format = "D") => {
  const data = new Date(valor);
  if (!valor) return null;
  return DateTime.fromJSDate(data).toFormat(format);
});
