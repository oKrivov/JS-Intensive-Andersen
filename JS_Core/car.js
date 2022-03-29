Object.prototype.isNumber = function(val, err) {
  const isValidNum =
    typeof val === 'number' &&
    !Number.isNaN(val) &&
    !(val ===  -Infinity || val ===  Infinity) &&
    val > 0;

  if (!isValidNum) {
    throw new Error(err);
  }

  return val;
}

class Car {
  #brand = 'bmw';

  get brand() {
    return this.#brand;
  }
  set brand(str) {
    const correctLength = str.length > 1 && str.length < 50;
    
    if (correctLength) {
      this.#brand = str;
    }
  }

  #model = 'x5';

  get model() {
    return this.#model;
  }
  set model(str) {
    const correctLength = str.length > 1 && str.length < 50;
    
    if (correctLength) {
      this.#model = str;
    }
  }

  #yearOfManufacturing = 2020;
  
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set yearOfManufacturing(num) {
    const correctNum = num >= 1900 && num <= (new Date().getFullYear());

    if (correctNum) {
      this.#yearOfManufacturing = num;
    }
  }

  #maxSpeed = 230;

  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxSpeed(num) {
    const correctNum = num >= 100 && num <= 300;

    if (correctNum) {
      this.#maxSpeed = num;
    }
  }

  #maxFuelVolume = 20;
  
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set maxFuelVolume(num) {
    const correctNum = num >= 5 && num <= 20;

    if (correctNum) {
      this.#maxFuelVolume = num;
    }
  }

  #fuelConsumption = 8;

  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set fuelConsumption(num) {
    const correctNum = num > 0 && num !== Infinity;

    if (correctNum) {
      this.#fuelConsumption = num;
    }
  }

  #currentFuelVolume = 0;

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  #isStarted = false;

  get isStarted() {
    return this.#isStarted;
  }

  #mileage = 0;

  get mileage() {
    return this.#mileage; 
  }

  start() {
    if (!this.#isStarted) {
      this.#isStarted = true;
    } else {
      throw new Error('Машина уже заведена');
    }
  }

  shutDownEngine() {
    if (this.#isStarted) {
      this.#isStarted = false;
    } else {
      throw new Error('Машина ещё не заведена');
    }
  }

  fillUpGasTank(val) {
    isNumber(val, 'Неверное количество топлива для заправки');

    if ((val + this.#currentFuelVolume ) > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += val;
  }

  drive(speed, hours) {
    const travelDistance = speed * hours;
    const fuelPerTrip = travelDistance / (100 / this.#fuelConsumption);

    isNumber(speed, 'Неверная скорость');
    isNumber(hours, 'Неверное количество часов');

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    if (this.#currentFuelVolume < fuelPerTrip) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= fuelPerTrip;
    this.#mileage += travelDistance;
  }
}