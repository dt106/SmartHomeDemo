import HCDTO from "../DTO/HCDTO";
import { serviceDB } from "../serviceDB";

export default class HC extends serviceDB{
    private tableName = 'HC';
    private id= 'id';
    private endUserProfileId= 'endUserProfileId';
    private dormitoryId= 'dormitoryId';
    private name= 'name';
    private macAddress= 'macAddress';
    private ipAddress= 'ipAddress';
    private wifiName= 'wifiName';
    private timeZone= 'timezone';
    private version= 'version';
    private versionUpdatedAt= 'versionUpdateAt';
    private isMaster= 'isMaster';
    private homeControllerActiveStatusId= 'homeControllerActiveStatusId';
    private homeControllerTypeId= 'homeControllerTypeId';
    private createdAt= 'createdAt';
    private updatedAt= 'updatedAt';
    private deletedAt= 'deletedAt';
    private apiPingAt= 'apiPingAt';
    private signalrPingAt= 'signalrPingAt';
    private homeControllerActiveStatus= 'homeControllerActiveStatus';
    private homeControllerType= 'homeControllerType';
    private informations= 'informations';
    private warnings= 'warnings';
    private errors= 'errors';
    private disabled= 'disabled';
    private generalInformations= 'generalInformations';
    private generalWarnings= 'generalWarnings';
    private generalErrors= 'generalErrors';
    
    HC(){}
    async CreateTable(){
        const sql = `CREATE TABLE IF NOT EXISTS ${this.tableName}(
            ${this.id} VARCHAR(30) PRIMARY KEY,
            ${this.endUserProfileId} VARCAR(30),
            ${this.dormitoryId} VARCHAR(30),
            ${this.name} NVARCHAR(50),
            ${this.macAddress} VARCHAR(20) UNIQUE,
            ${this.ipAddress} VARCHAR(20) ,
            ${this.wifiName} NVARCHAR(50),
            ${this.timeZone} DATE,
            ${this.version} VARCHAR(50),
            ${this.versionUpdatedAt} DATE,
            ${this.isMaster} BOOLEAN,
            ${this.homeControllerActiveStatusId} VARCHAR(50),
            ${this.homeControllerTypeId} VARCHAR (30),
            ${this.createdAt} DATE,
            ${this.updatedAt} DATE,
            ${this.deletedAt} DATE,
            ${this.apiPingAt} DATE,
            ${this.signalrPingAt} DATE,
            ${this.homeControllerActiveStatus} VARCHAR(50),
            ${this.homeControllerType} VARCHAR(30),
            ${this.informations} NVARCHAR(50),
            ${this.warnings} NVARCHAR(50),
            ${this.errors} NVARCHAR(50),
            ${this.disabled} VARCHAR(20)
            
        )`
        try {
            (await this.GetConnection()).executeSql(
                sql,
                [],
                ()=>{console.log(`${this.tableName} existed`)},
                error=>console.log(error)
            )
        } catch (error) {
            console.log(error)
        }
    }
    async Insert(hc: HCDTO){
        const cols: string = Object.keys(hc).join(",");
        const values: any = Object.values(hc).map((value)=>`\'${value}\'`).slice(0,24).join(",");
        let paramKeys = "";
        let paramValues = ""
        const sql = `INSERT OR IGNORE INTO ${this.tableName} VALUES (${values})`
        // console.log(values)
        try {
            (await this.GetConnection()).executeSql(
                sql,
                [],
                (doc)=>{console.log('ok')},
                error=>console.log(error)
            )
        } catch (error) {
            
        }
    }
    async GetAll(){
        const sql = `SELECT * FROM ${this.tableName}`;
        const response = (await this.GetConnection()).executeSql(sql)
        return (await response).at(0)?.rows.raw();
    }
}