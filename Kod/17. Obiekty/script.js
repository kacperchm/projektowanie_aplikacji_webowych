let person = {
    firstName: 'Jan',
    lastName: 'Nowak',

    introduce: function () {
        console.log('Nazywam się ' + this.firstName + " " + this.lastName);
    }
}

person.introduce();
person.firstName = 'Adam';
person.introduce();

console.log('------------------------------------')

function Car(brand, model) {
    this.brand = brand;
    this.model = model;

    this.showDeatails = function () {
        console.log('Car: ' + this.brand + ' ' + this.model)
    }
}

let car = new Car('Ford', 'Mustang');
car.showDeatails();

console.log('------------------------------------')

class House {
    constructor(windows, doors) {
        this.windows = windows;
        this.doors = doors;
    }

    showDetails() {
        console.log('Dom ma: ' + this.windows + ' okien i ' + this.doors + ' drzwi');
    }
}

let house = new House(2,4);
house.showDetails();