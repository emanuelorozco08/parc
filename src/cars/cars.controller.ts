import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDto, CreateCarDto } from './dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ) {}

    //Retorna todos los carros
    @Get()
    getAllCars(){
        return this.carsService.getAllCars();
    }

    //Busca un coche por su id
    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){

        return this.carsService.getCarById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto
        ){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.deleteCar(id);
    }

}
