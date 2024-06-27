const generations = [
  {
    name: "Generation Alpha",
    start: 2013,
    end: 2025,
    image: "Gens/generation_alpha.jpg",
  },
  {
    name: "Generation Z",
    start: 1997,
    end: 2012,
    image: "Gens/generation_z.jpg",
  },
  {
    name: "Millennials",
    start: 1981,
    end: 1996,
    image: "Gens/millennials.jpg",
  },
  {
    name: "Generation X",
    start: 1965,
    end: 1980,
    image: "Gens/generation_x.jpg",
  },
  {
    name: "Baby Boomers",
    start: 1946,
    end: 1964,
    image: "Gens/baby_boomers.jpg",
  },
  {
    name: "Silent Generation",
    start: 1928,
    end: 1945,
    image: "Gens/silent_generation.jpg",
  },
  {
    name: "Greatest Generation",
    start: 1901,
    end: 1927,
    image: "Gens/greatest_generation.jpg",
  },
  {
    name: "Lost Generation",
    start: 1883,
    end: 1900,
    image: "Gens/lost.jpg",
  },
];

function showGeneration() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const year = birthdate.getFullYear();
  const generation = generations.find(
    (gen) => year >= gen.start && year <= gen.end
  );

  if (generation) {
    document.getElementById(
      "generationText"
    ).innerText = `You belong to ${generation.name}`;
    document.body.style.backgroundImage = `url('${generation.image}')`;
  } else {
    document.getElementById("generationText").innerText = "Unknown Generation";
    document.body.style.backgroundImage = "";
  }
}
