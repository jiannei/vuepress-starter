const {readFileSync} = require('fs');
const { resolve } = require('path');

function config(key){
    const cfgPath = resolve(`./config/${key}.json`)
    const cfg = readFileSync(cfgPath).toString()
    return JSON.parse(cfg)
}

const app = config('app')

module.exports = config(`themes/${app.theme}`)
