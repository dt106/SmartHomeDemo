import DeviceDTO from '../DTO/DeviceDTO';
import {serviceDB} from '../serviceDB';

export default class Device extends serviceDB {
  private tableName = 'Device';
  private id = 'id';
  private tuyaId = 'tuyaId';
  private dormitoryId = 'dormitoryId';
  private roomId = 'roomId';
  private endUserProfileId = 'endUserProfileId';
  private deviceTypeId = 'deviceTypeId';
  private deviceClassId = 'deviceClassId';
  private tuyaIrRemoteId = 'tuyaIrRemoteId';
  private tuyaIrRemoteBrandId = 'tuyaIrRemoteBrandId';
  private tuyaIrRemoteBrandName = 'tuyaIrRemoteBrandName';
  private unicastId = 'unicastId';
  private name = 'name';
  private macAddress = 'macAddress';
  private firmwareVersion = 'firmwareVersion';
  private appKey = 'appKey';
  private netKey = 'netKey';
  private deviceKey = 'deviceKey';
  private ipAddress = 'ipAddress';
  private iconId = 'iconId';
  private statusId = 'statusId';
  private networkTypeId = 'networkTypeId';
  private homeControllerId = 'homeControllerId';
  private parentId = 'parentId';
  private createdAt = 'createAt';
  private updatedAt = 'updateAt';
  private deletedAt = 'deleteAt';
  private isLightingDevice = 'isLightingDevice';
  private informations = 'informations';
  private warnings = 'warnings';
  private errors = 'errors';
  private disabled = 'disabled';
  private generalInformations = 'generalInformations';
  private generalWarnings = 'generalWarnings';
  private generalErrors = 'generalErrors';
  Device() {}
  async CreateTable() {
    const Sql = `CREATE TABLE IF NOT EXISTS ${this.tableName} (
            ${this.id} VARCHAR(30) PRIMARY KEY,
            ${this.tuyaId} VARCHAR(30),
            ${this.dormitoryId} VARCHAR(30),
            ${this.roomId} VARCHAR(30),
            ${this.endUserProfileId} VARCHAR(30),
            ${this.deviceTypeId} INT,
            ${this.deviceClassId} INT,
            ${this.tuyaIrRemoteId} INT,
            ${this.tuyaIrRemoteBrandId} INT,
            ${this.tuyaIrRemoteBrandName} INT,
            ${this.unicastId} INT,
            ${this.name} NVARCHAR(50),
            ${this.macAddress} VARCHAR(30),
            ${this.firmwareVersion} int,
            ${this.appKey} VARCHAR(30),
            ${this.netKey} VARCHAR(30),
            ${this.deviceKey} VARCHAR(30),
            ${this.ipAddress} VARCHAR(20),
            ${this.iconId} INT,
            ${this.statusId} INT,
            ${this.networkTypeId} INT,
            ${this.homeControllerId} INT,
            ${this.parentId} VARCHAR(30),
            ${this.createdAt} DATE,
            ${this.updatedAt} DATE,
            ${this.deletedAt} DATE,
            ${this.isLightingDevice} BOOLEAN,
            ${this.informations} NVARCHAR(100),
            ${this.warnings} NVARCHAR(100),
            ${this.errors} NVARCHAR(100),
            ${this.disabled} BOOLEAN,
            ${this.generalInformations} TEXT,
            ${this.generalWarnings} TEXT,
            ${this.generalErrors} TEXT
        )`;
        try {
            (await this.GetConnection()).executeSql(
                Sql,
                [],
                ()=>console.log(`${this.tableName} created`)
            )
        } catch (error) {
            console.log(error)
        }
  }
  async Insert(Device: DeviceDTO) {
    const cols: string = Object.keys(Device).join(',');
    const values: string = Object.values(Device).map((value)=>`\'${value}\'`).join(',');
    const Sql = `INSERT OR IGNORE INTO ${this.tableName} VALUES(${values})`
    try {
        (await this.GetConnection()).executeSql(
            Sql,
            [],
            ()=>console.log('OK'),
            error=>console.log(error)
        )
    } catch (error) {
      console.log(error);
    }
  }
  async GetAllDevice() {
    try {
      (await this.GetConnection()).transaction(tx => {
        tx.executeSql(
          `SELECT * FROM ${this.tableName}`,
          [],
          () => console.log('Insert Successfull!'),
          error => console.log(error),
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
  async DropTable() {
    const sql = `DROP TABLE ${this.tableName}`;
    try {
      (await this.GetConnection()).executeSql(sql, [], () =>
        console.log(`${this.tableName} deleted`),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
