let stats = {
  health: 90,
  hunger: 70,
  energy: 75,
  happiness: 80,
  cleanness: 65
};

let lastAction = "";

function keepNumberBetweenZeroAndOneHundred(number) {
  if (number < 0) return 0;
  if (number > 100) return 100;
  return Math.round(number);
}

function updatePage() {
  document.getElementById("health-number").textContent = stats.health;
  document.getElementById("hunger-number").textContent = stats.hunger;
  document.getElementById("energy-number").textContent = stats.energy;
  document.getElementById("happiness-number").textContent = stats.happiness;
  document.getElementById("cleanness-number").textContent = stats.cleanness;

  document.getElementById("health-bar").style.width = stats.health + "%";
  document.getElementById("hunger-bar").style.width = stats.hunger + "%";
  document.getElementById("energy-bar").style.width = stats.energy + "%";
  document.getElementById("happiness-bar").style.width = stats.happiness + "%";
  document.getElementById("cleanness-bar").style.width = stats.cleanness + "%";
}

function doAction(action) {
  if (action === "bath") {
    stats.cleanness += 30;
    stats.health += 8;
    stats.energy -= 8;
    showMessage("Your cat is clean after taking a bath.");
  }

  if (action === "eat") {
    stats.hunger += 25;
    stats.health += 5;
    stats.energy += 5;
    showMessage("Your cat enjoyed the food.");
  }

  if (action === "play") {
    stats.happiness += 22;
    stats.energy -= 15;
    stats.hunger -= 5;
    stats.cleanness -= 3;
    showMessage("Your cat had fun playing with toys.");
  }

  if (action === "pet") {
    stats.happiness += 12;
    stats.health += 2;
    stats.energy += 3;
    showMessage("Your cat feels loved by her owner.");
  }

  if (action === "lick") {
    stats.cleanness += 6;
    stats.happiness += 2;
    stats.energy -= 2;
    showMessage("Your cat licked herself");
  }

  stats.health = keepNumberBetweenZeroAndOneHundred(stats.health);
  stats.hunger = keepNumberBetweenZeroAndOneHundred(stats.hunger);
  stats.energy = keepNumberBetweenZeroAndOneHundred(stats.energy);
  stats.happiness = keepNumberBetweenZeroAndOneHundred(stats.happiness);
  stats.cleanness = keepNumberBetweenZeroAndOneHundred(stats.cleanness);

  lastAction = action;
    document.getElementById("cat-image").src =
        action === "play" ? "assets/play.png" :
        action === "lick" ? "assets/lick.png" : 
        action === "bath" ? "assets/bath.png":
        action === "pet" ? "assets/pet.png":
        "assets/cat.png";
  document.getElementById("food-image").style.display =
    action === "eat" ? "block" : "none";

  updatePage();
}

function showMessage(text) {
  document.getElementById("message").textContent = text;
}

function resetGame() {
  stats = {
    health: 90,
    hunger: 70,
    energy: 75,
    happiness: 80,
    cleanness: 65
  };

  lastAction = "";
  document.getElementById("cat-image").src = "assets/cat.png";
  document.getElementById("food-image").style.display = "none";
  showMessage("Your cat is ready for a new day.");
  updatePage();
}

document.getElementById("food-image").style.display = "none";
updatePage();

setInterval(function () {
  stats.hunger -= 1;
  stats.energy -= 1;
  stats.happiness -= 1;
  stats.cleanness -= 1;

  stats.health = keepNumberBetweenZeroAndOneHundred(stats.health);
  stats.hunger = keepNumberBetweenZeroAndOneHundred(stats.hunger);
  stats.energy = keepNumberBetweenZeroAndOneHundred(stats.energy);
  stats.happiness = keepNumberBetweenZeroAndOneHundred(stats.happiness);
  stats.cleanness = keepNumberBetweenZeroAndOneHundred(stats.cleanness);
  updatePage();
}, 10000);