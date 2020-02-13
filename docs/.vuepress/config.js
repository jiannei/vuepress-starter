const {readFileSync} = require('fs')
const { resolve } = require('path');

function readConfig(){
    const cfgPath = resolve('./config.json')
    const config = readFileSync(cfgPath).toString()
    return JSON.parse(config)
}

module.exports = readConfig()
