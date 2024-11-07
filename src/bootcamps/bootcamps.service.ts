import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
//import { UpdateBootcampDto } from './dto/update-bootcamp.dto';//
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  constructor (@InjectRepository(Bootcamp) 
              private bootcampRepository: Repository<Bootcamp> ){}

  create(createBootcampDto: CreateBootcampDto) {
    //crear la distancia del objeto a guardar
    const nuevoBootcamp =
    this.bootcampRepository.create(createBootcampDto);
   return this.bootcampRepository.save(nuevoBootcamp);
 
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id : id});
  }

   async update(id: number, updateBootcampDto: CreateBootcampDto) {
    //seleccionar el objeto o el bootcamp cuyo el id sea el parametro
    const updBootcamp =  await this.bootcampRepository.findOneBy({id})
    //fusionar los cambios con el objeto  hallado
   await this.bootcampRepository.merge(updBootcamp, updateBootcampDto)
   //grabar cambios base de datos
   await this.bootcampRepository.save(updBootcamp)
   return updBootcamp
  }

 async remove(id: number, deleteBootcampDto: any = null) {
    const delBootcamp = await this.bootcampRepository.findOneBy({id});
    await this.bootcampRepository.delete(delBootcamp);
    return delBootcamp;
  }
}
