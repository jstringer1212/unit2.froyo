


let froyo = { flavors: prompt("Please list flavors separated by commas") };

// Split the input string into an array of flavors
let inputflavors = froyo.flavors.split(",");

// Initialize counters for each flavor
let vanilla = 0;
let choco = 0;
let berry = 0;

// Loop through the array of flavors to count each one
for (let i = 0; i < inputflavors.length; i++) {
    if (inputflavors[i].trim() === "vanilla") {
        vanilla += 1;
    } 
    else if (inputflavors[i].trim() === "choc") {
        choco += 1;
    } 
    else if (inputflavors[i].trim() === "berry") {
        berry += 1;
    }
}

// Output the results
console.log("Vanilla: " + vanilla);
console.log("Choco: " + choco);
console.log("Berry: " + berry);

