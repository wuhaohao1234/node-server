"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class ConnectionMongo {
    static getInstance() {
        if (!this._intance) {
            this._intance = new ConnectionMongo();
        }
        return this._intance;
    }
    createMongo(url, runoob) {
        try {
            url = url + runoob;
            return Promise.resolve(mongodb_1.MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
                if (error) {
                    throw error;
                }
                console.log(`${runoob}数据库已经创建或者连接`);
                this.db = db;
            }));
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    createCollection(runoob, site) {
        try {
            let dbase = this.db.db(runoob);
            return Promise.resolve(dbase.createCollection(site, (error, res) => {
                if (error) {
                    throw error;
                }
                console.log(`${runoob}中的${site}表已经创建`);
            }));
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    insertData(runoob, site, dataBase) {
        let dbase = this.db.db(runoob);
        try {
            return Promise.resolve(dbase.collection(site).insertOne(dataBase, (error, res) => {
                if (error) {
                    throw error;
                }
                console.log(`${runoob}中的${site}表已插入${dataBase}`);
            }));
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.default = ConnectionMongo;
