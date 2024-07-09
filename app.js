console.log("test");

let data = {
  rules: ["Mat Etiquette", "Dojo Rules"],
  obi: "Tying an Obi",
  breakfalls: [
    "front Breakfall",
    "Back Breakfall",
    "left and Right Side Breakfalls",
    "Front Rolling Breakfall",
    "Back Rolling Breakfall",
  ],
  stance: "Fighting Stance on Command",
  kata: "Basic Blocking Kata",
  padwork: [
    "Pad work",
    "Left and Right Combination Punches",
    "elbow",
    "knee",
    "Front Kick",
    "Back Kick",
    "Side Kick",
    "Roundhouse Kick",
    "Side Snap Kick",
    "Lunge Punch",
  ],
  7: "Straight arm lock from a punch left and right",
  8: "Back Hock from a puch",
  FStrangles: [
    "Breaking Front Strangle Using",
    "Back fist",
    "Push away",
    "Prayer",
    "on Both Left and Right",
  ],
  BStrangles: [
    "Breaking Rear Strangles Using",
    "Legs",
    "Body Drop",
    "Shoulder Lock",
    "All on Left and Right side",
  ],
};

console.table(data);

function whitebelt() {
  const ul = document.createElement("ul");
  div.appendChild(ul);

  let list = document.querySelector("ul");

  for (i = 0; i < data.length; ++i) {
    let li = document.createElement(`li`);
    li.innerText = data[i];
    list.appendChild(li);
  }
}
const btn = document.getElementById("JWhite");
const div = document.getElementById("div");
btn.addEventListener("click", whitebelt);
