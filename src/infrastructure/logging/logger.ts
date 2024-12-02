/**
 * Logger instance configured with Winston.
 *
 * This logger is set to 'info' level and outputs logs in JSON format with timestamps.
 * It uses the console as the transport mechanism.
 *
 * @module Logger
 */

import { createLogger, transports, format } from 'winston'

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            const colorizer = format.colorize().colorize
            const coloredMessage =
                level === 'error'
                    ? colorizer('error', String(message))
                    : colorizer('info', String(message))
            return `${timestamp} [${level}]: ${coloredMessage}`
        }),
        format.json()
    ),
    transports: [new transports.Console()],
})

export { logger }
