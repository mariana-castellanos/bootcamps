import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column ({type: "varchar", nullable: false})
    title: string

    @Column ({type: "text", nullable: false})
    comment: string


    @Column ({  type: "text", nullable: false})
    descripcion : string

    @Column ({type: "tinyint", nullable: false, default: 4 })
    weeks: number

}
