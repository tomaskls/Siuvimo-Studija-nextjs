// Vienintelis darbo laiko šaltinis: iš jo generuojama kontaktų lentelė ir JSON-LD schema.
import type { OpeningHoursSpecification } from "../types/schema";

export interface WorkDay {
  name: string;
  short: string;
  schemaDay: string;
  opens: string;
  closes: string;
}

export const openingHours: WorkDay[] = [
  { name: "Pirmadienis", short: "Pr", schemaDay: "Monday", opens: "09:00", closes: "18:00" },
  { name: "Antradienis", short: "An", schemaDay: "Tuesday", opens: "10:00", closes: "15:00" },
  { name: "Trečiadienis", short: "Tr", schemaDay: "Wednesday", opens: "09:00", closes: "18:00" },
  { name: "Ketvirtadienis", short: "Kt", schemaDay: "Thursday", opens: "10:00", closes: "15:00" },
  { name: "Penktadienis", short: "Pn", schemaDay: "Friday", opens: "09:00", closes: "17:00" },
];

export const lunchBreak = { start: "13:00", end: "13:30" };

// "09:00" -> "9:00"
export const formatTime = (time: string) => time.replace(/^0/, "");

// Kompaktiškam rodymui (footer): dienos su vienodu laiku sujungiamos,
// pvz. { days: "Pr, Tr", hours: "9:00 - 18:00" }
export function getGroupedHours() {
  const groups = new Map<string, string[]>();
  for (const day of openingHours) {
    const hours = `${formatTime(day.opens)} - ${formatTime(day.closes)}`;
    groups.set(hours, [...(groups.get(hours) ?? []), day.short]);
  }
  return Array.from(groups, ([hours, days]) => ({ days: days.join(", "), hours }));
}

// Darbo dienos suskaidomos į intervalus prieš ir po pietų pertraukos,
// o dienos su vienodais intervalais sugrupuojamos.
export function getOpeningHoursSpecification(): OpeningHoursSpecification[] {
  const groups = new Map<string, OpeningHoursSpecification>();

  for (const day of openingHours) {
    const ranges = [
      [day.opens, lunchBreak.start],
      [lunchBreak.end, day.closes],
    ];
    for (const [opens, closes] of ranges) {
      const key = `${opens}-${closes}`;
      const group = groups.get(key);
      if (group) {
        group.dayOfWeek.push(day.schemaDay);
      } else {
        groups.set(key, {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [day.schemaDay],
          opens,
          closes,
        });
      }
    }
  }

  return Array.from(groups.values());
}
