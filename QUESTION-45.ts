// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 45 of 45 Questions


// QUESTION NO:45
//  Cars: Create detailed car objects with flexible properties.
function make_car(manufacturer: string, model:string, ...options : [string, any][]): Object {
    let car = {manufacturer, model };
    options.forEach(([key , value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota","corolla",["color","red"],["year",2020]));
console.log(make_car("ford","Fiesta",["color","blue"],["sunroof",true]));