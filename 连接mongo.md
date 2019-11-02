# mongodb

## 命令行

### 安装

https://www.mongodb.com/download-center/community

Custom 自定义安装

install mongoDB compass mongo图形化管理界面(不选)

### 快速开始

项目目录test-mongo

```
mkdir data && cd data && mkdir db && cd db

mongod --dbpath D:\wuhao-study\test-mongo\data\db
```

--dbpath 为数据库路径

```
mongo 
```

### 创建数据库

use abu

如果abu数据库不存在，则创建数据库，否则切换到指定数据库。

db

查看当前数据库

show dbs

查看所有的数据库(abu数据库里面没有插入数据，所以无法显示)

插入一条数据

db.abu.insert({"name": "阿布"})

### 删除数据库

db.dropDatabase()

删除当前数据库

### 创建集合

db.createCollection("runoob")

类似数据库中的表

show tables

runoob

### 删除集合

db.runoob.drop()

### 插入文档

db.COLLECTION_NAME.insert(document)

```
db.col.insert({
    title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

### 更新文档

```
db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
```

### 查询文档

db.abu.find()

### 根据指定条件查询文档

db.abu.find({key: value})

### 删除文档

## node

