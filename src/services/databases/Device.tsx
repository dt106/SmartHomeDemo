import { serviceDB } from "./serviceDB"

export default class Device extends serviceDB{
    private tableName = 'Device'
    private id = 'ID'
    private name = 'Name'
    private status = 'Status'
    private ip = 'IP'
    Device(){}
    async Insert(name: string, status: number, ip: string){
        try {
            (await this.GetConnection()).transaction(tx=>{
                tx.executeSql(
                    `INSERT INTO ${this.tableName}(${this.name}, ${this.status}, ${this.ip})
                    VALUES(?,?,?)`,
                    [name, status, ip],
                    ()=>console.log('Insert Successfull!'),
                    error=>console.log(error)
                )
            })
        } catch (error) {
            console.log(error)
        }
    }
    async GetAllDevice (){
        try {
            (await this.GetConnection()).transaction(tx=>{
                tx.executeSql(
                    `SELECT * FROM ${this.tableName}`,
                    [],
                    ()=>console.log('Insert Successfull!'),
                    error=>console.log(error)
                )
            })
        } catch (error) {
            console.log(error)
        }
    }
}