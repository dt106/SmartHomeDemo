import { enablePromise } from "react-native-sqlite-storage";
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
    async InsertRoom(name: string, image: number, status: number) {
        try {
            (await this.GetConnection()).transaction((tx => {
                tx.executeSql(
                    `INSERT INTO ${this.tableName}(${this.name}, ${this.image}, ${this.status})  
                    VALUES (?,?,?)`,
                    [name, image, status],
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
}