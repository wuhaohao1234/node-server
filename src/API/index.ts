import { MongoClient, Db } from 'mongodb'
interface IDataBaseKey {
    [key: string]: any
}
interface IDataBaseArr {
    [key: number]: IDataBaseKey
}
/**
 * @param 连接mongo
 */
export default class ConnectionMongo {
    private db!: MongoClient
    public static _intance: ConnectionMongo
    public static getInstance(): ConnectionMongo {
        if (!this._intance) {
            this._intance = new ConnectionMongo()
        }
        return this._intance
    }
    /**
     * @param createMongo 连接mongo并创建数据库
     * @argument runoob: 数据库名称
     * @argument url: 数据库地址
     */
    public createMongo(url: string, runoob: string): Promise<void> {
        try {
            url = url + runoob
            return Promise.resolve(MongoClient.connect(url, { useNewUrlParser: true }, (error, db: MongoClient) => {
                if (error) {
                    throw error
                }
                console.log(`${runoob}数据库已经创建或者连接`)
                this.db = db
            }))
        } catch (error) {
            return Promise.reject(error)
        }
    }
    /**
     * @param createCollection 在指定数据库中创建表
     * @argument runoob: 数据库名称
     * @argument site: 表名
     */
    public createCollection(runoob: string, site: string): Promise<void> {
        try {
            let dbase: Db = this.db.db(runoob)
            return Promise.resolve(dbase.createCollection(site, (error, res) => {
                if (error) {
                    throw error
                }
                console.log(`${runoob}中的${site}表已经创建`)
            }))
        } catch (error) {
            return Promise.reject(error)
        }
    }
    /**
     * @param insertData 插入数据
     * @argument runoob: 数据库名
     * @argument site: 表名
     * @argument dataBase: 数据
     */
    public insertData(runoob: string, site: string, dataBase: IDataBaseKey | IDataBaseArr) {
        let dbase: Db = this.db.db(runoob)
        try {
            return Promise.resolve(dbase.collection(site).insertOne(dataBase, (error, res) => {
                if (error) {
                    throw error
                }
                console.log(`${runoob}中的${site}表已插入${dataBase}`)
            }))
        } catch (error) {
            return Promise.reject(error)
        }
    }
}