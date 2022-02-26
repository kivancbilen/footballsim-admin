export class Personality {
    public name: string;
    public id!: number;
    constructor(name: string, id?: number) {
        this.name = name;
        if (id) {
            this.id = id;
        }
    }
}