const fs = require("fs");
const { resolve } = require("path");

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}