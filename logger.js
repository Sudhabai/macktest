const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;
    fs.appendFilesSync(path.join(__dirname, '../logs.txt'), log);
    next();
};
module.expors= logger;
