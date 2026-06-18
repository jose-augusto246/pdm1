export type Motorcycle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
};

export type MotorcycleSection = {
  title: string;
  data: Motorcycle[];
};

export default function processData(motorcycles: Motorcycle[]): MotorcycleSection[] {
  const grouped = motorcycles.reduce<Record<string, Motorcycle[]>>((acc, moto) => {
    const category = moto.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(moto);
    return acc;
  }, {});

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => ({
      title: category,
      data: items,
    }));
}