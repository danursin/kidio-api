import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Book } from "./Book";

@Entity("Turn", { schema: "kidio" })
export class Turn {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "int" })
    public book_id: number;

    @Column({ type: "tinyint" })
    public sort_order: number;

    @Column({ type: "uniqueidentifier" })
    public audio_file_key: string;

    @ManyToOne(() => Book, (b) => b.turns)
    @JoinColumn({ name: "book_id" })
    public book: Book;
}
