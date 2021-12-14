import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  creted_at: Date;
}
