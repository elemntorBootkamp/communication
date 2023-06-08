const winston = require('winston');

const chalk = require('chalk');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  // 'קונסול'
  transports: [
    new winston.transports.Console({
      format: winston.format().combine(
        winston.format.colorize(),
        winston.format.printf((info) => {
          const { level, message, timestamp } = info;
          const coloredMessage = level === 'warn' ? chalk.yellow(message) : message;
          return `${timestamp} [${level}]: ${coloredMessage}`;
        }),
      ),
    }),
    // 'קובץ'
    new winston.transports.File({

      filename: 'log.log',
      format: winston.format().combine(winston.format.printf, ((info) => {
        const { level, message, timestamp } = info;
        const coloredMessage = level === 'warn' ? chalk.yellow(message) : message;
        return `${timestamp} [${level}]: ${coloredMessage}`;
      })),
    }),
  ],
});

logger.info('hi logger');
