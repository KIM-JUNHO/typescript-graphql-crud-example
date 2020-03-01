import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Rule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  srcAddr: string;

  @Column()
  dstAddr: string;
}
