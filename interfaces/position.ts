export class Position {
    public name: string;
    public id!: number;
    public default: boolean;
    constructor(name: string, _default: boolean, id?: number) {
        this.name = name;
        this.default = _default;
        if (id) {
            this.id = id;
        }
    }
}