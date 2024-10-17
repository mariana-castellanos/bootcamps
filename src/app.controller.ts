import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//Endpoint: metodo que se ejecuta cuando se invoca determinada URL desde el cliente http(Bruno)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
//Endpoint:
//1.Metodo(verbo) HTTP a utiliza(junto con la ruta
//2.Firma del metodo invocar
//3.Instrucciones a ejecutar
@Get("/prueba1")
mensaje():string {
return "mensaje de prueba1"
}

@Get("/bootcamps/:id/curso/:cursoId")
mensajeBootcampPorId(@Param("id") id:string,
@Param("cursoId") cursoId:string ): string{
return `mostrando bootcamp con id: ${id} y el curso: ${cursoId}`
}

@Get("Identificacion/:id")
getIdentificacion(@Query("nombre") nombre:string, 
                  @Query("edad") edad:number, 
                  @Param("id") id:number,
                  @Query("ciudad") ciudad:string): any{
                    return new Student (id, nombre, edad, ciudad)
                  }


}
