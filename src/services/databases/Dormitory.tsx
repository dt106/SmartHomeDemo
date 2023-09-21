import { serviceDB } from "./serviceDB";

export default class Dormitory extends serviceDB{
    private tableName = 'Dormitory'
    private id = 'ID'
    private name = 'Name'
    private address = 'Address'
    private longitude = 'Longitude'
    private latitude = 'Latitude'
    private enduser = 'EndUserID'
    Dormitory(){}
    async CreateTable(){
        try {
            (await this.GetConnection()).transaction(tx => {
              tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${this.tableName}(
                              ${this.id} VARCHAR(30) PRIMARY KEY,
                              ${this.name} NVARCHAR(50),
                              ${this.address} NVARCHAR(150),
                              ${this.longitude} VARCHAR(50),
                              ${this.latitude} VARCHAR(50),
                              ${this.enduser} VARCHAR(10)
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
    async Insert(){

    }
    async Update(){

    }
    async Delete(){
 
    }
    async GetDormitories(){
      const response = (await this.GetConnection())
      .executeSql(
          `SELECT * FROM ${this.tableName}`,
        )
      return (await response).at(0)?.rows.raw()
    }
}