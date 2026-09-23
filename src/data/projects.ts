import type { Project } from "../types/project";

const REALIZZAZIONI_PATH = "/realizzazioni";

export const projects: Project[] = [
  {
    id: "realizzazione-01",
    title: "Realizzazione 01",
    category: "Hospitality",
    image: `realizzazioni/AlessandroBarattelliPh-0276-683x1024.jpg`,
  },
  {
    id: "realizzazione-02",
    title: "Realizzazione 02",
    category: "Hospitality",
    image: `${REALIZZAZIONI_PATH}/AlessandroBarattelliPh-0524-scaled.jpg`,
  },
  {
    id: "realizzazione-03",
    title: "Realizzazione 03",
    category: "Hospitality",
    image: `${REALIZZAZIONI_PATH}/AlessandroBarattelliPh-0607-1024x683.jpg`,
  },

  {
    id: "realizzazione-04",
    title: "Realizzazione 04",
    category: "Hospitality",
    image: `${REALIZZAZIONI_PATH}/AlessandroBarattelliPh-4262-683x1024.jpg`,
  },
];
