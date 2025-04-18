import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./User.entity";
import { MenuEntity } from "./Menu.entity";
import { Role } from "src/common/enums/role.enum";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    name: Role

    @ManyToMany(() => MenuEntity, (menu) => menu.roles)
    @JoinTable()
    menus: MenuEntity[];

    @OneToMany(() => UserEntity, user => user.role)
    users: UserEntity[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}