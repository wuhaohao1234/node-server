interface IDataBaseKey {
    [key: string]: any;
}
interface IDataBaseArr {
    [key: number]: IDataBaseKey;
}
export default class ConnectionMongo {
    private db;
    static _intance: ConnectionMongo;
    static getInstance(): ConnectionMongo;
    createMongo(url: string, runoob: string): Promise<void>;
    createCollection(runoob: string, site: string): Promise<void>;
    insertData(runoob: string, site: string, dataBase: IDataBaseKey | IDataBaseArr): Promise<void>;
}
export {};
