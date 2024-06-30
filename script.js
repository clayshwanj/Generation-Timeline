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
  // Get the birthdate input element's value, and create a Date object from it
  // new Date converts the string input to a date object.The Date object represents the date and time specified by the string.
  //.value retrieves the current value of that input element, which is expected to be a date in string format ("2023-06-30").
  const birthdate = new Date(document.getElementById("birthdate").value);

  // Extract the year from the birthdate
  const year = birthdate.getFullYear();

  // Find the generation object that matches the birth year
  const generation = generations.find(
    (gen) => year >= gen.start && year <= gen.end
  );

  // If a matching generation is found
  if (generation) {
    // Update the text element to display the generation name
    document.getElementById(
      "generationText"
    ).innerText = `You belong to ${generation.name}`;

    // Change the background image of the body to the generation's imag
    document.body.style.backgroundImage = `url('${generation.image}')`;
  } else {
    // If no matching generation is found, display "Unknown Generation"
    document.getElementById("generationText").innerText = "Unknown Generation";

    // Clear the background image of the body
    document.body.style.backgroundImage = "";
  }
}
