import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './Orphanage';

@Entity('images') //nome da tabela
export default class image {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	path: string;

	@ManyToOne(() => Orphanage, orphanage => orphanage.images)
	@JoinColumn({ name: 'orphanage_id'})
	orphanage: Orphanage;
}