const { accountInfoLogging } = require("./utils/helpers");
const logger = require("./utils/logger");
const transaction1 = require("./transactions/transaction1");

const PROCESS_ID = Math.floor(Math.random() * 100000);

async function main() {
    const transactionDetail = {
        processId: PROCESS_ID,
        transactions: []
    };

    // Start continuous account info logging
    accountInfoLogging();

    // Start the trading logic
    try {
        await transaction1(transactionDetail);
    } catch (error) {
        logger.error(`${PROCESS_ID} - Error in main transaction process: ${error}`);
    }
}

main();