import {APIGatewayProxyResult} from "aws-lambda";
import {buildContext, buildProxyEvent} from "@libs/__test__/winpay-test-util";
import {main} from "@functions/hello/handler";

describe('Hello middy tester', function () {
    test('middy', async () => {
        const result: APIGatewayProxyResult = await main(buildProxyEvent({}), buildContext({})) as APIGatewayProxyResult
        expect(result).toBeTruthy();
    })
})
