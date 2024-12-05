const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height: ${height}`;
    results.style.color = "black";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight: ${weight}`;
    results.style.color = "black";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: <span style="color: green;">${bmi}</span>`;
    results.style.color = "green";
  }
});
