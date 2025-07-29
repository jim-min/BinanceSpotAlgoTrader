require("dotenv").config();

const config = {
    BASE_URL: process.env.NODE_ENV === "prod" ? "https://api.binance.com" : "https://testnet.binance.vision",
    API_KEY: process.env.NODE_ENV === "prod" ? process.env.API_KEY_PROD : process.env.API_KEY_STAGE,
    API_SECRET: process.env.NODE_ENV === "prod" ? process.env.API_SECRET_PROD : process.env.API_SECRET_STAGE,
    ORDER_PATH: "/api/v3/order",
    ACCOUNT_INFO_PATH: "/api/v3/account",
    MARKET_PRICES_PATH: "/api/v3/ticker/price",
};

module.exports = config;
