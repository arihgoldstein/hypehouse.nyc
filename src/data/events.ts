export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image?: string;
  status: "upcoming" | "past";
  ticketLink?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "HYE HOUSE VOL. 4: WINTER SOLSTICE",
    date: "JAN 24, 2026",
    location: "WAREHOUSE 2, BK",
    status: "upcoming",
    ticketLink: "#"
  },
  {
    id: 2,
    title: "YEREVAN NIGHTS",
    date: "FEB 14, 2026",
    location: "TBA, LA",
    status: "upcoming",
    ticketLink: "#"
  },
  {
    id: 3,
    title: "HYE HOUSE: ORIGINS",
    date: "DEC 10, 2025",
    location: "SILO, BROOKLYN",
    status: "past",
    ticketLink: ""
  },
  {
    id: 4,
    title: "SUMMER JAMS",
    date: "AUG 15, 2025",
    location: "ROOFTOP, NYC",
    status: "past",
    ticketLink: ""
  }
];
