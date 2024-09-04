export class Pokemon {
    name: string;
    id: number;
    mainImage: string;

    constructor(props:any) {
        this.name = props.name;
        this.id = props.id;
        this.mainImage = props.sprites.front_default
    }
 
}