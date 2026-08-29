let hunger = 100, cleanliness = 100, happiness = 100, health = 100, energy = 100;
let catTimeout;

let hungerB = document.getElementById("hunger-bar");
let happiB = document.getElementById("happiness-bar");
let healthB = document.getElementById("health-bar");
let energyB = document.getElementById("energy-bar");
let cleanB = document.getElementById("cleanness");

function updateBars() {
    hungerB.style.width = hunger + "%";
    happiB.style.width = happiness + "%";
    healthB.style.width = health + "%";
    energyB.style.width = energy + "%";
    cleanB.style.width = cleanliness + "%";
}

function setCat(cat){
    clearTimeout(catTimeout);
    document.getElementById('cat').src = cat;
    faceTimeout = setTimeout(() => document.getElementById('cat').src = './assets/cat.png',2000);
}

function interactWithCat(action){
    if (action === 'feed'){
        hunger = Math.min(hunger + 10, 100);
        setCat('./assets/happy.png');
    } else if(action === 'clean'){
        cleanliness = Math.min(cleanliness + 10, 100)
        setCat('./assets/cat.png');
    } else if (action === 'play'){
        happiness = Math.min(happiness + 10, 100);
        setCat('./assets/food.png')
    }
    updateBars();
}

setInterval(() => {
    hunger = Math.max(hunger - 0.5, 0);
    cleanliness = Math.max(cleanliness - 0.5, 0);
    happiness = Math.max(happiness - 1, 0);
    updateBars();
},1000);
