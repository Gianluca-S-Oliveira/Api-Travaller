const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place");
const degrees = document.querySelector("#degrees");
const img = document.querySelector("img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content");
const humidity = document.querySelector("#humidity");

button.addEventListener("click", () => {
  if (!input.value) return;

  getDataApi();
  keyframeAnimation();
});

async function getDataApi() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input.value
  )}&units=metric&appid=8cd5a8c23d39c734fa2bfab6beaddc33`;

  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.cod && data.cod === "404") {
          content.style.display = "flex";

          content.innerHTML =
            "Local não encontrado! Tente Novamente! A tela será recarregada em 3s....";

          setTimeout(reload, 4200);
        }

        loadData(data);
      });
  } catch (error) {}
}

function loadData(data) {
  place.innerHTML = `${data.name}, ${data.sys.country}`;
  degrees.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  wind.innerHTML = `Vento: ${data.wind.speed} km/h`;
  humidity.innerHTML = `humidade: ${data.main.humidity} %`;

  content.style.display = "flex";
}

// function keyframeAnimation() {
//   if (button) {
//     button.addEventListener("click", () => {
//       body.style.background = "red";
//     });
//   }
// }

function reload() {
  location.reload();
}

// function cronometro() {
//   var i = 3;
//   while (i >= 0) {
//     i -= 1;
//     texto.innerHTML = "A página será carregada em " + i + "s";
//   }
// }
