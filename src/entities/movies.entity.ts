import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "int4" })
  duration: number;

  @Column({ type: "int4" })
  price: number;
}
