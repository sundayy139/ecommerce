'use strict';

import mongoose from "mongoose";
import os from 'os'
import process from "process";

const _SECONDS = 5000

// count connect database
export const countConnects = () => {
    const numConnections = mongoose.connections.length
    console.log(`Number of connections: ${numConnections}`)
}


// check over load

export const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length
        const numCores = os.cpus().length
        const memorryUsage = process.memoryUsage().rss
        // Example maximum number of connections based on number of cores

        const maxConnections = numCores * 5

        console.log(`Active connections: ${numConnections}`);
        console.log(`Memory usage: ${memorryUsage / 1024 / 1024} MB`)

        if (numConnections > maxConnections) {
            console.log('Connections overload detected');
        }

    }, _SECONDS);
    // Monitor connection every 5 seconds
}