export class PositionRelationship {
    public id!: number;
    public position1Id: number;
    public position2Id: number;
    constructor(position1Id: number, position2Id: number, id?: number) {
        this.position1Id = position1Id;
        this.position2Id = position2Id;
        if (id) {
            this.id = id;
        }
    }
}