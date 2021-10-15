import { get } from "./API";

export default {
  listAnimal: async (args) => get("/animal", args),
  getAnimal: async (args, animal_id) => get(`/animal/${animal_id}`, args),
  getAppointments: async (args) => get(`/appointment`, args),
  getAnimalAppointments: async (args, animal_id) =>
    get(`/animal/${animal_id}/appointment`, args),
};
