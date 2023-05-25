import "./style.css";
import { cities } from "./cities";

const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];

const renderCityName = (element: HTMLElement | null, cityName: string) => {
  if (element?.innerText === null) return;
  element!.innerText = cityName;
};

const element = document.getElementById("city");

renderCityName(element, getRandomCity());

document.addEventListener("click", () => {
  renderCityName(element, getRandomCity());
});
