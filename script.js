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

const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from("h1", { opacity: 0, y: -20, duration: 1 })
  .from("#container1", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
  .from("#container2", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".data", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4
  }, "-=0.5")
  .from("#btn", {
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from("#spentTogether, #spentEach", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.4");


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
