import { Entity, Column, PrimaryColumn, } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({
    type: "varchar",
    nullable: true
  })
  nome!: string;

  @Column({
    type: "varchar",
    nullable: true
  })
  sobreNome!: string;

  @Column({
    type: "varchar",
  })
  estado!: string;

  @Column({
    type: "varchar",
  })
  cidade!: string;

  @Column({
    type: "varchar",
  })
  bairro!: string;

  @Column({
    type: "varchar",
  })
  rua!: string;

  @Column({
    type: "int",
  })
  numero!: number;

  @Column({
    type: "varchar",
  })
  codigoPostal!: string;

  @Column({
    type: "varchar",
  })
  informacoesAdicionais!: string;
}
