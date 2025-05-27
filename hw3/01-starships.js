// Note: Your JavaScript code should be inside of functions

const createWelcomeSection = () => {
  const welcome_section = document.getElementById("welcome");
  const img = document.createElement("img");
  document.getElementById("welcome").classList.add("text-center");
  img.src = "gr7@pdx.edu-75ca18f2.jpg";
  img.classList.add("img-fluid", "w-25");
  img.alt = "Picture of Gamaliel Rojas";
  const firstSentence = document.createElement("strong");
  firstSentence.textContent = "My name is Gamaliel Rojas. ";
  const paragraph = document.createElement("p");
  const textContent = document.createTextNode(
    "and I will be attending CS 463/563: Intro to Web Development this quarter. I am getting started with the first homework assignment. The first thing I will l do is figure out how to run code checks for accessibility, formatting, and valid HTML and CSS code."
  );
  paragraph.classList.add("w-50", "mx-auto", "fs-5");
  paragraph.appendChild(firstSentence);
  paragraph.appendChild(textContent);
  welcome_section.appendChild(img);
  welcome_section.appendChild(paragraph);
};
document.addEventListener("DOMContentLoaded", createWelcomeSection);

const app = document.querySelector("#starships");

const url = "https://swapi.py4e.com/api/starships";

/*
app.style.display = "grid";
app.style.gridTemplateColumns = "repeat(2, 300px)";
app.style.justifyContent = "center";
app.style.gap = "1rem";
*/
const gridContainer = document.createElement("div");
gridContainer.style.display = "grid";
gridContainer.style.gridTemplateColumns =
  "repeat(auto-fit, minmax(300px, 1fr))";
gridContainer.style.gap = "1.5rem";
gridContainer.style.justifyContent = "center";
gridContainer.style.padding = "1rem";

// Add it to the page (after the h2)
app.appendChild(gridContainer);

const heading = document.querySelector("#starships h2");
heading.style.textAlign = "center";
heading.style.margin = "2rem";

const addShipsToDOM = (item) => {};

const fetchData = (url) => {
  // Retrieve the data from the API
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((ship) => {
        console.log(
          ship.name,
          ship.cost_in_credits,
          ship.manufacturer,
          ship.max_atmosphering_speed,
          ship.cargo_capacity
        );
        createSpaceshipComponent(ship);
      });
    })
    .catch((error) => console.error(error));
};

// Use this function to create the individual spaceship component
const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.border = "1px solid #ccc";
  container.style.borderRadius = "10px";
  container.style.padding = "1rem";
  container.style.margin = "2rem auto";
  container.style.maxWidth = "600px";

  container.style.backgroundColor = "#f9f9f9";
  container.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
  container.style.fontFamily = "Arial, sans-serif";

  //row1
  const row1 = document.createElement("div");
  row1.style.display = "flex";
  row1.style.justifyContent = "space-between";
  row1.style.marginBottom = "0.5rem";

  const name = document.createElement("div");
  name.innerHTML = `<strong>${spaceship.name}</strong>`;

  const cost = document.createElement("div");
  cost.innerHTML = `<strong>${spaceship.cost_in_credits} Credits</strong>`;

  row1.appendChild(name);
  row1.appendChild(cost);

  //row2
  const row2 = document.createElement("div");
  const manu = document.createElement("div");
  manu.innerHTML = `<p> Manufactured by ${spaceship.manufacturer}`;
  row2.appendChild(manu);

  //row3
  const row3 = document.createElement("div");
  row3.style.display = "flex";
  row3.style.textAlign = "center";

  row3.style.gap = "1rem";

  const speed = document.createElement("div");
  const speed_value = document.createElement("div");
  const speed_label = document.createElement("p");
  const cargo = document.createElement("div");
  const cargo_value = document.createElement("div");
  const cargo_label = document.createElement("p");

  speed_value.textContent = spaceship.max_atmosphering_speed;
  speed_value.style.fontWeight = "bold";
  speed_label.textContent = "Max Atmosphering Speed";

  cargo_value.textContent = spaceship.cargo_capacity;
  cargo_value.style.fontWeight = "bold";
  cargo_label.textContent = "Cargo capacity";

  speed.appendChild(speed_value);
  speed.appendChild(speed_label);
  cargo.appendChild(cargo_value);
  cargo.appendChild(cargo_label);

  const divider = document.createElement("div");
  divider.style.width = "1px";
  divider.style.height = "80px";
  divider.style.backgroundColor = "black";
  divider.style.margin = "0 1rem";

  row3.appendChild(speed);
  row3.appendChild(divider);
  row3.appendChild(cargo);

  //Container appends
  container.append(row1);
  container.append(row2);
  container.appendChild(row3);

  gridContainer.appendChild(container);

  return container;
};

/*

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page reload
  console.log(" Form submitted!");

  // Optional: Log field values
  console.log({
    Name: document.getElementById("name").value,
    Username: document.getElementById("username").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("password").value,
    "Date of Birth": document.getElementById("date").value,
  });
});*/
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: form.elements["name"].value.trim(),
    username: form.elements["username"].value.trim(),
    email: form.elements["email"].value.trim(),
    password: form.elements["password"].value.trim(),
    date: form.elements["date"].value,
    pronouns: form.elements["pronouns"].value,
  };

  console.log(
    `Form Submitted!\n` +
      `Name: ${formData.name}\n` +
      `Username: ${formData.username}\n` +
      `Email: ${formData.email}\n` +
      `Date of Birth: ${new Date(formData.date).toLocaleDateString()}\n` +
      `Preferred Pronouns: ${formData.pronouns}`
  );
});

fetchData(url);
createSpaceshipComponent();
