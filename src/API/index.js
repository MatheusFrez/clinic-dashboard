import { get } from "./API";

export default {
  listAnimal: async (args) => get("/animal", args),
  getAnimal: async (args, animal_id) => get(`/animal/${animal_id}`, args),
  getAnimalAppointments: async (args, animal_id) =>
    get(`/animal/${animal_id}/appointment`, args),
  pesquisarPsicologos: async (args) => get("/site/v1/psicologos", args),
};
