/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type gender = "male" | "female"; // union type

const myGender: gender = "male";
let myGender2: gender;

myGender2 = "male";
myGender2 = "female";

export {};
