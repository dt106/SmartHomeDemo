import {serviceDB} from '../serviceDB';

export default class Dormitory extends serviceDB {
  private tableName = 'Dormitory';
  private id = 'id';
  private endUserId = 'endUserId';
  private name = 'name';
  private address = 'address';
  private longitude = 'longtitude';
  private latitude = 'latitude';
  private createdAt = 'createdAt';
  private updatedAt = 'updateAt';
  private deletedAt = 'deleteAt';
  private informations = 'information';
  private warnings = 'warning';
  private errors = 'errors';
  private disabled = 'disabled';
  private generalInformations = 'generalInformations';
  private generalWarnings = 'generalWarnings';
  private generalErrors = 'generalErrors';
  Dormitory() {}
  async CreateTable() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${this.tableName}(
                              ${this.id} VARCHAR(30) PRIMARY KEY,
                              ${this.endUserId} VARCHAR(30),
                              ${this.name} NVARCHAR(50),
                              ${this.address} NVARCHAR(150),
                              ${this.longitude} VARCHAR(50),
                              ${this.latitude} VARCHAR(50),
                              ${this.createdAt} DATE,
                              ${this.updatedAt} DATE,
                              ${this.deletedAt} DATE,
                              ${this.informations} NVARCHAR(50),
                              ${this.warnings} NVARCHAR(50),
                              ${this.errors} NVARCHAR(50),
                              ${this.disabled} BOOLEAN,
                              ${this.generalInformations} TEXT,
                              ${this.generalWarnings} TEXT,
                              ${this.generalErrors} TEXT
                          )`,
          [],
          () => console.log(`Table ${this.tableName} created or existed !`),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
  async Insert() {}
  async Update() {}
  async Delete() {}
  async DropTable(){
    const sql = `DROP TABLE ${this.tableName}`;
    try {
        (await this.GetConnection()).executeSql(
            sql,
            [],
            ()=>console.log(`${this.tableName} deleted`)
            )
    } catch (error) {
        console.log(error)
    }
}
  async GetDormitories() {
    const response = (await this.GetConnection()).executeSql(
      `SELECT * FROM ${this.tableName}`,
    );
    return (await response).at(0)?.rows.raw();
  }
}
