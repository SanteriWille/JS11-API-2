let api = "./app.json"

fetch(api) 
.then (response => response.json())
.then ((data) => {
  // Spørsmål 1
  data.forEach(element => {
  if (element.name == "Apple") {
    document.write(`Hvor mange kalorier er det i et eple? => ${element.nutritions.calories}g <br>`)
  }
});

  // spørsmål 2
data.forEach(element => {
  if (element.name == "Avocado") {
    document.write(`Hva er fettinnholdet til en avokado? => ${element.nutritions.fat}g <br>`)
  }
});

// spørsmål 3
let mostSugar = 0;
let fruitWithMostSugar = '';
data.forEach(element => {
  if (element.nutritions.sugar > mostSugar) {
    mostSugar = element.nutritions.sugar;
    fruitWithMostSugar = element.name;
  }
});

document.write(`Hvilke frukt inneholder mest sukker? => ${fruitWithMostSugar} med ${mostSugar}g sukker. <br>`);

// spørsmål 4
data.forEach(element => {
  if (element.name == "Mango") {
    document.write(`Hvor mange karbohydrater er det i en mango? => ${element.nutritions.carbohydrates}g <br>`)
  }
});

//spørsmål 5
data.forEach(element => {
  if (element.name == "Strawberry") {
    document.write(`Proteinnholdet til et jordbær? => ${element.nutritions.protein}g <br>`)
  }
});

//spørsmål 6
data.forEach(element => {
  if (element.name == "Orange") {
    document.write(`Hva er kaloriene i en appelsin? => ${element.nutritions.calories}g <br>`)
  }
});

//spørsmål 7
let minCarbs = Infinity;
let fruitWithMinCarbs = '';
data.forEach(element => {
  if (element.nutritions.carbohydrates < minCarbs) {
    minCarbs = element.nutritions.carbohydrates;
    fruitWithMinCarbs = element.name;
  }
});

document.write(`Hvilken frukt har minst karbohydrater? => ${fruitWithMinCarbs} med ${minCarbs}g karbohydrater. <br>`);

// spørsmål 8
data.forEach(element => {
  if (element.name == "Pineapple") {
    document.write(`Hvor mye sukker er det i en ananas? => ${element.nutritions.sugar}g <br>`)
  }
});

// spørsmål 9
data.forEach(element => {
  if (element.name == "Coconut") {
    document.write(`Fettinnholdet i en kokosnøtt? => ${element.nutritions.fat}g <br>`)
  }
});

// spørsmål 10
let maxProteins = 0;
let fruitWithMostProtein = '';
data.forEach(element => {
  if (element.nutritions.protein > maxProteins) {
    maxProteins = element.nutritions.protein;
    fruitWithMostProtein = element.name;
  }
});

document.write(`Hvilken frukt har flest proteiner? => ${fruitWithMostProtein} med ${maxProteins}g proteiner`)


});

