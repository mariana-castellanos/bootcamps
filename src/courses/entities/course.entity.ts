import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id:number

@Column({type: "varchar" ,
         nullable: false
})
    title: string

@Column({type: "text" ,
         nullable: false
})
    description: string

    @Column({
        type:"tinyint",
        nullable: false,
        default: 4
    })
    weeks: number

    @Column({
        type: "double",
        nullable: false
    })

    tuition: number

    @Column({
        name: "minimum_Skill",
        type: "enum",
        enum: [
            "beginner",
             "intermediate",
             "advanced"
            ],
    })

    minimmumSkill: minimumSkill

    @Column ({
        type: "timestamp",
        name: "created_at",
        default: ()=> "CURRENT_TIMESTAMP"
    })

    createdAt: Date
}

enum minimumSkill {
    "beginer",
    "intermediate",
    "advanced"
}
 


   
    

    


