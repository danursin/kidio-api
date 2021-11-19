import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Turn } from "./Turn";

@Entity("Book", { schema: "kidio" })
export class Book {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar", length: 255 })
    public title: string;

    @Column({ type: "varchar", length: 255 })
    public cover_image_url: string;

    @Column({ type: "uniqueidentifier" })
    public audio_file_key: string | null;

    @OneToMany(() => Turn, (t) => t.book)
    @JoinColumn({ name: "id" })
    public turns: Turn[];
}
