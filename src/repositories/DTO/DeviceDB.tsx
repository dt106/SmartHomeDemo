export default class DeviceDB{
    private id: any;
    private name: string | undefined;
    private image: any;
    private ip: any;
    constructor(id?: any, name?: string, image?: any, ip?: any ){
        this.id  =  id;
        this.name = name; 
        this.image = image; 
        this.ip = ip
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
    getIP(){
        return this.ip
    }
    setIP(ip: any){
        this.ip = ip
    }
    Add (){

    }
    Update(){

    }
    Delete(){

    }
}


