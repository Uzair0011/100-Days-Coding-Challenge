// *Question 80:* Updating Object Properties: Add a property named color to the existing car object, and then update the 
// year property to 2021. Show how to perform these operations.
// *Explain & TIP:* You can add new properties to an object or change existing ones after the object is created. This flexibility
//  allows objects to be dynamically updated as needed.
// Define the type of the car object
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string; 
  }
  let car: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019
  };
  car.color = 'blue';
  car.year = 2021;
  console.log(car);