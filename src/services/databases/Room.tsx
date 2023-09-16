import { serviceDB } from "./serviceDB";

export default class RoomDB extends serviceDB {
    private tableName = 'Room'
    private id = 'ID'
    private name = 'Name'
    private image = 'Image'
    private status = 'Status'
    RoomDB() { }
    async CreateDB() {
        try {
            (await this.GetConnection()).transaction((tx => {
                tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS Room (
                        ${this.id} INTEGER PRIMARY KEY AUTOINCREMENT,
                        ${this.name} nvarchar(50),
                        ${this.image} tinyint,
                        ${this.status} tinyint
                    )`,
                    [],
                    () => console.log('Table Room created or already exists!'),
                    (error) => console.error('Error creating table:', error)
                )
            }))
        } catch (error) {
            console.error(error)
        }
    }
    async Drop(){
        try{
            (await this.GetConnection()).transaction(tx=>{
                tx.executeSql(
                    `DROP TABLE ${this.tableName}`,
                    [],
                    ()=>console.log(`Droped ${this.tableName}`),
                    (error)=>console.error(error)
                )
            })
        }catch(error){
            console.error(error)
        }
    }
    async InsertRoom( name: string, image: string) {
        try {
            (await this.GetConnection()).transaction((tx => {
                tx.executeSql(
                    `
                    INSERT OR IGNORE INTO ${this.tableName} (${this.name}, ${this.image}, ${this.status})  
                    VALUES (?,?,1)
                    `,
                    [name, image],
                    () => console.log('Insert Succesfull!'),
                    (error) => console.error(error)
                )
            }))
        }
        catch (error) {
            console.error(error)
        }
    }
    async DropTable() {
        try {
            (await this.GetConnection()).transaction((tx => {
                tx.executeSql(
                    `DROP TABLE IF EXISTS ${this.tableName}`,
                    [],
                    () => console.log('Drop Succesfull!'),
                    (error) => console.error(error)
                )
            }))
        }
        catch (error) {
            console.error(error)
        }
    }
    async GetAllRoom() {
        const lst = (await this.GetConnection())
            .executeSql(`SELECT * FROM ${this.tableName}`)
        return (await lst);
    }
    async Delete(ID : Number){
        try {
            (await this.GetConnection()).transaction((tx)=>{
                tx.executeSql(
                    `DELETE FROM ${this.tableName} WHERE ${this.id} = ? `,
                    [ID],
                    () => console.log('Deleted !'),
                    (error) => console.error(error)
                )
            })
        } catch (error) {
            console.error(error)
        }
    }
}