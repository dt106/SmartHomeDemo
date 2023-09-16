import {serviceDB} from './serviceDB';

export default class User extends serviceDB {
  private tableName: string = 'User';
  private id = 'ID';
  private name = 'Name';
  private email = 'Email';
  private password = 'Password';
  private birthday = 'Birthday';
  private phonenumber = 'Phonenumber';
  private User() {}
  async CreateTable() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${this.tableName}(
                        ${this.id} INTEGER PRIMARY KEY AUTOINCREMENT,
                        ${this.name} NVARCHAR(50),
                        ${this.email} VARCHAR(150) NOT NULL UNIQUE,
                        ${this.birthday} DATE,
                        ${this.phonenumber} VARCHAR(10)
                    )`,
          [],
          () => console.log('Table created or existed !'),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
  async Insert(name: string, email: string, birthday: Date, phonenumber: string) {
    try {
        (await this.GetConnection()).executeSql(
                `
                INSERT OR IGNORE INTO ${this.tableName} (${this.name}, ${this.email}, ${this.birthday}, ${this.phonenumber})
                VALUES (?,?,?,?)
                `,
                [name, email, birthday, phonenumber],
                ()=>{},
                (error)=>console.error(error)
                )
    } catch (error) {
      console.log(error)
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
  async GetUser(userID: any){
    (await this.GetConnection()).transaction(tx=>{
        tx.executeSql(
            `SELECT * FROM ${this.tableName} WHERE ${this.id} = ?`,
            [userID],
            ()=>console.log(),
            (error)=>console.error(error)
        )
    })
  }
  async Getalluser(){
    const lst = (await this.GetConnection())
        .executeSql(`SELECT * FROM ${this.tableName}`)
    return (await lst);
}
}
