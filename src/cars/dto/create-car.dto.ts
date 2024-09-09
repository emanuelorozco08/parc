import { IsString } from "class-validator";

export class CreateCarDto {
    
    //Decoradores
    @IsString()
    //Propiedades
    readonly brand: string;

    @IsString()
    readonly model: string;
}