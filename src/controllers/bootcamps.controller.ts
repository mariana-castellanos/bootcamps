import { Controller, Get, Param, Post} from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
    

        //Endpoints GET
            @Get()
            getAllBootcamps(): string{
                return "Aqui se van a mostrar todos los bootcamps"
            }

            
 @Get("/:id")
 getBootcampsId(@Param("id")id:number):string{
    return `Aqui se va a mostrar el bootcamp cuyo id es: ${id}`
 }


 @Post()
 createBootcamps(): string{
    return "Aqui se va a crear un nuevo bootcamps"
 }
    }

    


