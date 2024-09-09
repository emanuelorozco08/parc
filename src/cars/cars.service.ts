import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './dto';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Mustang',
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Camaro',
        },
        {
            id: uuid(),
            brand: 'Dodge',
            model: 'Charger',
        },
    ];

    //Retorna todos los coches
    public getAllCars() {
        return this.cars;
    }

    //Busca un coche por su id
    public getCarById(id: string) {

        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    public createCar(createCarDto: CreateCarDto) {

        const newCar: Car = {
            id: uuid(),
            ...createCarDto,
        }

        this.cars.push(newCar);

        return newCar;

    }

    public updateCar(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.getCarById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB;
            }

            return car;
        });

        return carDB;

    }

    public deleteCar( id: string ){
        const car = this.getCarById(id);

        this.cars = this.cars.filter(car => car.id !== id);
    }

}
