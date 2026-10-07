import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'hotel-the-steps',
    title: 'Hotel The Steps',
    category: 'Interior & Contract',
    image: '/images/projects/hotel-the-steps/steps-reception.jpg',
    gallery: [
      '/images/projects/hotel-the-steps/steps-reception.jpg',
      '/images/projects/hotel-the-steps/steps-bedroom.jpg',
      '/images/projects/hotel-the-steps/steps-bathroom.jpg',
    ],
    description:
      'Reception, camera e bagno raccontano un progetto hospitality costruito attraverso materiali, arredi su misura e illuminazione decorativa.',
  },
  {
    id: 'axy-hotels-innstyle',
    title: 'Axy Hotels InnStyle',
    category: 'Hotel · Interior',
    image: '/images/projects/axy/axy-lobby.webp',
    gallery: [
      '/images/projects/axy/axy-lobby.webp',
      '/images/projects/axy/axy-room.webp',
      '/images/projects/axy/axy-dining.webp',
      '/images/projects/axy/axy-reception.webp',
    ],
    description:
      'Spazi comuni, camere e aree dining con un linguaggio contemporaneo fatto di colori caldi, dettagli metallici e arredi dal carattere deciso.',
  },
  {
    id: 'residenza-piranesi',
    title: 'Residenza Piranesi',
    category: 'Rooms · Hospitality',
    image: '/images/projects/residenza-piranesi/piranesi-lounge.webp',
    gallery: [
      '/images/projects/residenza-piranesi/piranesi-lounge.webp',
      '/images/projects/residenza-piranesi/piranesi-room.webp',
      '/images/projects/residenza-piranesi/piranesi-bedroom.webp',
      '/images/projects/residenza-piranesi/piranesi-entrance.webp',
    ],
    description:
      'Camere luminose e raffinate dove boiserie, tessuti, arredi e dettagli decorativi costruiscono un’atmosfera elegante e accogliente.',
  },
  {
    id: 'hotel-independent',
    title: 'Hotel Independent',
    category: 'Hotel · Interior',
    image: '/images/projects/hotel-independent/independent-room.webp',
    gallery: [
      '/images/projects/hotel-independent/independent-room.webp',
      '/images/projects/hotel-independent/independent-twin.webp',
      '/images/projects/hotel-independent/independent-detail.webp',
      '/images/projects/hotel-independent/independent-cabinet.webp',
    ],
    description:
      'Una forte identità cromatica tra blu, rosso e bordeaux, con geometrie grafiche, dettagli custom e camere dal segno riconoscibile.',
  },
  {
    id: 'adesso',
    title: 'ADESSO',
    category: 'Food & Beverage',
    image: '/images/projects/adesso/adesso-lounge.webp',
    gallery: [
      '/images/projects/adesso/adesso-lounge.webp',
      '/images/projects/adesso/adesso-bar.webp',
      '/images/projects/adesso/adesso-restaurant.webp',
      '/images/projects/adesso/adesso-coffee.webp',
    ],
    description:
      'Lounge, ristorante e bar convivono in un ambiente dinamico, con arredi colorati, verde, luce scenografica e una forte vocazione conviviale.',
  },
  {
    id: 'eitch',
    title: 'EITCH',
    category: 'Suite · Wellness',
    image: '/images/projects/eitch/eitch-wellness.webp',
    gallery: [
      '/images/projects/eitch/eitch-wellness.webp',
      '/images/projects/eitch/eitch-room.webp',
      '/images/projects/eitch/eitch-bathroom.webp',
      '/images/projects/eitch/eitch-living.webp',
    ],
    description:
      'Suite e area wellness dialogano attraverso pietra, legno e luce: dalla camera alla vasca, fino al bagno e alla zona living.',
  },
];
