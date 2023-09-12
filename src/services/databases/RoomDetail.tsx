import { serviceDB } from "./serviceDB";

export default class RoomDetail extends serviceDB{
    private tableName= 'RoomDetail'
    private id = 'ID'
    private image = 'Name'
    private deviceID = 'DeviceID'
    private status = 'Status'
    RoomDetail(){}
    async CreateTable(){
        try {
            (await this.GetConnection()).transaction(tx=>{
                tx.executeSql(
                    `IF NOT EXISTS CREATE TABLE ${this.tableName}(
                        ${this.id} INTEGER PRIMARY KEY AUTOINCREMENT,
                        ${this.image} VARCHAR(50),
                        ${this.deviceID} INT,
                        ${this.status} TINYINT,
                     );`,
                    [], 
                    ()=>console.log('Table Created or Exists'),
                    (error)=>console.error(error)          
                )
            })
        } catch (error) {
            console.error(error)
        }
    }
}