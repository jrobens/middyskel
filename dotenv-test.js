
import * as path from "path";
import * as dotenv from "dotenv";

module.exports = async () => {
    dotenv.config({ path: path.resolve(__dirname, './.env.test') });
};
