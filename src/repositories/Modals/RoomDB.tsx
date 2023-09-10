export default class RoomDB{
    private id: any;
    private name: string | undefined;
    private image: any;
    private status: any;
    constructor(id?: any, name?: string, image?: any, status?: number){
        this.id  =  id;
        this.name = name; 
        this.image = image; 
        this.status = status
    }
    getId(){
        return this.id
    }
    setId(id: any){
        this.id = id
    }
    getName(){
        return this.name
    }
    setName(name: string){
        this.name = name
    }
    getImage(){
        return this.image
    }
    setImage(image: any){
        this.image = image
    }
    getStatus(){
        return this.status
    }
    setStatus(status: any){
        this.status = status
    }
}


