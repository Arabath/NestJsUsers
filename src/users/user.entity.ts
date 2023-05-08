import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';
import { Post } from '../posts/post.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @Column()
    email: string

    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column()
    password: string

    @OneToOne(() => Profile)
    @JoinColumn()
    Profile: Profile

    @OneToMany(()=> Post, post => post.author)
    posts: Post[]
}

