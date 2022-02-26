export class PersonalityRelationship {
    public id!: number;
    public personality1Id: number;
    public personality2Id: number;
    public harmony: number;
    constructor(personality1Id: number, personality2Id: number, harmony: number, id?: number) {
        this.personality1Id = personality1Id;
        this.personality2Id = personality2Id;
        this.harmony = harmony;
        if (id) {
            this.id = id;
        }
    }
}