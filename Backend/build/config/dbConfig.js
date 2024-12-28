"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: "localhost",
    user: "sabin",
    password: "Mysql@123",
    db: "project2database",
    dialect: "mysql",
    pool: {
        idle: 10000,
        max: 5,
        min: 0,
        acquire: 10000,
    },
};
exports.default = dbConfig;
