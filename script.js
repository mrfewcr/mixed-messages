//this could become a function
let randomMessage = Math.floor(Math.random()*3);
let randomCity = Math.floor(Math.random()*6);
let randomQuantity = Math.floor(Math.random()*6);
let randomPeople = Math.floor(Math.random()*6);

let incompleteMessages = [
    [", oh very nice","it rains ","you should visit with "],
    [" is waiting for you","it has great food, ","bring "],
    [", the city of carnaval","you may come ","call "]
];

let mixedCities = [
    "Curitiba",
    "Londrina",
    "Rio Grande do Sul",
    "São Paulo",
    "Recife",
    "Joinville"
]

let mixedQuantities = [
    "a lot",
    "rarely",
    "always",
    "every now and then",
    "only in July",
    "superb"
]

let mixedPeople = [
    "your family",
    "your wife",
    "your parents",
    "your friends",
    "your class",
    "yourself"
]

//this could become a function
let mixedMessage = `${mixedCities[randomCity]}${incompleteMessages[randomMessage][0]} \n
${incompleteMessages[randomMessage][1]}${mixedQuantities[randomQuantity]}\n
${incompleteMessages[randomMessage][2]}${mixedPeople[randomPeople]}`;

//printing the output could be a function
console.log(mixedMessage);