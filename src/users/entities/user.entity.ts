import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar" ,
        nullable: false
})
   name: string

   @Column({type: "varchar" ,
    nullable: false
})
email: string

@Column({type: "varchar" ,
    nullable: false
})
role: string

@Column({type: "varchar" ,
    nullable: false
})
password: string
}
