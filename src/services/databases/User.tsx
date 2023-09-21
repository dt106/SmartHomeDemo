import {serviceDB} from './serviceDB';

export default class User extends serviceDB {
  private tableName: string = 'User';
  private id = 'ID';
  private name = 'Name';
  private email = 'Email';
  private gender = 'Gender';
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
                        ${this.gender} TINYINT,
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
  async Insert(
    name: string,
    email: string,
    gender: number,
    birthday: Date,
    phonenumber: string,
  ) {
    try {
      (await this.GetConnection()).executeSql(
        `
                INSERT OR IGNORE INTO ${this.tableName} (${this.name}, ${this.email},${this.gender} ,${this.birthday}, ${this.phonenumber})
                VALUES (?,?,?,?,?)
                `,
        [name, email, gender, birthday, phonenumber],
        () => {},
        error => console.error(error),
      );
    } catch (error) {
      console.log(error);
    }
  }
  async Drop() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `DROP TABLE ${this.tableName}`,
          [],
          () => console.log(`Droped ${this.tableName}`),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
  async GetUser(email: any) {
    const response = (await this.GetConnection()).executeSql(
      `SELECT * FROM ${this.tableName} WHERE ${this.email} = '${email}' LIMIT 1`,
    );
    return (await response).at(0)?.rows.raw().at(0);
  }
  async Getalluser() {
    const lst = (await this.GetConnection()).executeSql(
      `SELECT * FROM ${this.tableName}`,
    );
    return await lst;
  }
}
