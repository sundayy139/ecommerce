'use strict';

import mongoose from "mongoose";
import dotenv from 'dotenv'
import { countConnects } from "../helpers/check.connect";
import config from '../config/config.mongodb'

const { db: { host, name, port } } = config

const conectString = `mongodb://${host}:${port}/${name}`

console.log(conectString)

class Database {
    constructor() {
        this.connect()
    }

    // connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(conectString).then(_ => {
            console.log('Connected to database successfully !');
            countConnects()
        }).catch(err => {
            console.log(`Connect error !` + err)
        })
    }

    static getIntance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getIntance()


export default instanceMongodb