import { observable, computed, action } from "mobx";

class Store {
    @observable temperatureCelsius = 25;
    @observable unit = 'C';

    @computed get temperatureFahrenheit() {
        console.log("Store Temp : Calculating Temperature in F");
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed get temperatureKelvin() {
        console.log("Store Temp : Calculating Temperature in K");
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
        console.log("Store Temp : Getting Temperature");
        let output;
        switch (this.unit) {
            case 'K':
                output = this.temperatureKelvin + ' K';
                break;
            case 'F':
                output = this.temperatureFahrenheit + ' F';
                break;
            case 'C':
                output = this.temperatureCelsius + ' C';
                break;
        }
        return output;
    }

    setUnit(unit) {
        console.log("Store Temp : Setting Unit");
        this.unit = unit;
    }

    setTemperature() {
        console.log("Store Temp : Setting Temperature");
        this.temperatureCelsius = this.temperatureCelsius + 2;
    }

    @action setTemperatureAndUnit(unit) {
        console.log("Store Temp : Setting Temperature and Unit");
        this.setUnit(unit);
        this.setTemperature();
    }
}

export const TemperatureStore = new Store();