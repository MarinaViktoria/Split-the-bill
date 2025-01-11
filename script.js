let suggestion = "Let's split our travel expences!";
let i = 0;
let speed = 70;
function type() {
  if (i < suggestion.length) {
    document.querySelector("h1").textContent += suggestion.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();

gsap.to("#container1", { opacity: 0.9, delay: 2.5, duration: 3 });
gsap.to("#container2", { opacity: 0.9, delay: 3.5, duration: 3 });
gsap.to("#spentTogether", { opacity: 0.9, delay: 4.5, duration: 3 });
gsap.to("#spentEach", { opacity: 0.9, delay: 5.5, duration: 3 });

gsap.from("h4", { y: -100, delay: 5.5, duration: 2 });

const button = document.querySelector("#btn");
button.addEventListener("click", calculateExpenses);

function calculateExpenses(e) {
  e.preventDefault();
  const flight = Number(document.querySelector("#flight").value);
  const hotel = Number(document.querySelector("#hotel").value);
  const foodAndDrinks = Number(document.querySelector("#foodAndDrinks").value);
  const sightseeing = Number(document.querySelector("#sightseeing").value);
  const people = Number(document.querySelector("#people").value);

  if (people < 1) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please enter your information",
    });
  }

  let amountTogether = flight + hotel + foodAndDrinks + sightseeing;
  let amountEach = amountTogether / people;

  document.querySelector("#paidTogether").textContent =
    amountTogether.toFixed(2);
  document.querySelector("#paidPerPerson").textContent = amountEach.toFixed(2);
}

/*amountEach = amountEach.toFixed(2);
    amountTogether = amountTogether.toFixed(2);*/

/*flight === "" || hotel === "" || foodAndDrinks === "" || sightseeing === "" || people === "" || */
