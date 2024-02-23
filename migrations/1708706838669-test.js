"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const mongodb_1 = require("mongodb");
const mongoUrl = process.env.MONGO_URL;
const up = async () => {
    const client = new mongodb_1.MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const db = client.db();
        // Implement your up migration logic here
    }
    finally {
        await client.close();
    }
};
exports.up = up;
const down = async () => {
    const client = new mongodb_1.MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const db = client.db();
        // Implement your down migration logic here
    }
    finally {
        await client.close();
    }
};
exports.down = down;
