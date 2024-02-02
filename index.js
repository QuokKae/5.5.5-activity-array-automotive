let Vehicle = require('./vehicle').Vehicle
class Car extends Vehicle {
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, schedulService) {
        super(make,model,year,color,mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
        this.started = false
    }

    loadPassenger(numPass) {
        if (numPass == this.maximumPassengers) {
            return numPass
        }
        
        else (numPass < this.maximumPassengers) {
            numPass += 1
            return numPass
        }
    }

    start() {
        if(this.fuel > 0) {
            this.started = true
        }

        else(this.fuel <= 0) {
            this.started = false
        }
    }

    scheduleService(mileage) {
        if (mileage => 30000) {
            console.log("It's time for service!")
        }
    }
}

let mercurySedan = new Car (5, 1, 4, 150, 2)

mercurySedan.loadPassenger()
mercurySedan.start()
mercurySedan.scheduleService()