export function debounce(fn, delay) {
  let timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    const args = arguments;
    const that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}

export function mapAnimalType(type) {
  const especieis = [
    { text: "Cachorro", value: "DOG" },
    { text: "Cobra", value: "SNAKE" },
    { text: "Gato", value: "CAT" },
    { text: "Peixe", value: "FISH" },
    { text: "Tigre", value: "TIGER" },
    { text: "Outros", value: "OTHER" },
  ];

  return (
    (especieis.find((especie) => especie.value === type) || {}).text || "Outros"
  );
}
