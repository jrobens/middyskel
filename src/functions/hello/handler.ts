import {formatJSONResponse} from "../../libs/apiGateway";
import {middyfy} from '@libs/lambda';


// @ts-ignore
export const hello = async (event, context): Promise<unknown> => {
    return formatJSONResponse({message: 'hello'})
}

export const main = middyfy(hello);
