import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'

export const middyfy = (handler) => {
    return middy().handler(handler).use(httpJsonBodyParser());
}
