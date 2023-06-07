

const winston = require('winston');
const chalk = require('chalk');
//אוביקט לוגר
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  //תעבורה לקונסול
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(info => {
          const { level, message, timestamp } = info;
          const coloredMessage = level === 'warn' ? chalk.yellow(message) : message;
          return `${timestamp} [${level}]: ${coloredMessage}`;
        })
      )
    }),
    //תעבורה לקובץ
    new winston.transports.File({
      filename: 'log.log',
      format: winston.format.combine(
        winston.format.printf(info => {
          const { level, message, timestamp } = info;
          const coloredMessage = level === 'warn' ? chalk.yellow(message) : message;
          return `${timestamp} [${level}]: ${coloredMessage}`;
        })
      )
    })
  ]
});
logger.info('Starting the application...');
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Smith' }
];
if(users.length==3){
logger.info(`Found ${users.length} users`);
logger.warn('This is a warning message');
logger.warn(chalk.yellow('This is another warning message'));
module.exports = logger;
}

try {
  1000/0
  // your1000 code that may throw an error
} catch (error) {
  logger.error(error);
}
module.exports = logger;





// const winston = require('winston');
// const chalk = require('chalk');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(info => {
//       const { level, message, timestamp } = info;
//       const coloredMessage = level === 'warn' ? chalk.yellow(message) : message;
//       return `${timestamp} [${level}]: ${coloredMessage}`;
//     })
//   ),
//   transports: [
//     new winston.transports.File({
//       filename: 'log.log'
//     })
//   ]
// });

// module.exports = logger;