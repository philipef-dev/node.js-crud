import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  creted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
