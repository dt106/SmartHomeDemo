import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage'
export class serviceDB {
    constructor() { }
    public async GetConnection() {
        enablePromise(true);
        return await openDatabase({ name: 'SmartHome.db', location: 'default' })
    }
}