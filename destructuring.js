// 1
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log("First Color:", firstColor);   
console.log("Second Color:", secondColor);
console.log("Third Color:", thirdColor);  

// 2
const person = { fname: 'Alice', age: 25, city: 'Wonderland' };
const { fname, age, city } = person;
console.log("Name:",fname);   
console.log("Age:", age);    
console.log("City:", city); 

//3
const settings = { theme: 'dark', language: 'en' };
const { theme, language, mode = 'light' } = settings;
console.log("Theme:", theme);      
console.log("Language:", language); 
console.log("Mode:", mode);         
