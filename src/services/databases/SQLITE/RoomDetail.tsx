import {serviceDB} from '../serviceDB';

export default class RoomDetail extends serviceDB {
  private tableName = 'RoomDetail';
  private id = 'ID';
  private image = 'Name';
  private deviceID = 'DeviceID';
  private status = 'Status';
  private address = 'Address';
  private port = 'Port';
  private roomID = 'RoomID';
  RoomDetail() {}
  async CreateTable() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `IF NOT EXISTS CREATE TABLE ${this.tableName}(
                        ${this.id} INTEGER PRIMARY KEY AUTOINCREMENT,
                        ${this.image} VARCHAR(50),
                        ${this.deviceID} INT,
                        ${this.status} TINYINT,
                        ${this.address} VARCHAR(50),
                        ${this.port} SMALLINT,
                        ${this.roomID} INTEGER
                     );`,
          [],
          () => console.log('Table Created or Exists'),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
  async Insert(
    image: string,
    deviceID: any,
    status: number,
    address: string,
    port: string,
    roomID: any,
  ) {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `INSERT INTO ${this.tableName} 
                    (   ${this.image}, 
                        ${this.deviceID}, 
                        ${this.status}, 
                        ${this.address},
                        ${this.port},
                        ${this.roomID},
                    )
                    VALUES(?,?,?,?,?)`,
          [image, deviceID, status, address, port, roomID],
          () => console.log('Insert Ok'),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
  async GetDevice() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `SELECT * FROM ${this.tableName}`,
          [],
          () => console.log('Insert Ok'),
          error => console.error(error),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
}
