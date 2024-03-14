import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {Winner} from "@api/model/winner";
import {AzupayMakePayment, AzupayPaymentStatus} from "@api/model/make-payment";

export const buildProxyEvent = (overrides: Partial<APIGatewayProxyEvent>): APIGatewayProxyEvent => {
    return {
        httpMethod: 'post',
        headers: {
            Authorization: "authorization-key",
            "Content-Type": "application/json"
        },
        body: null,
        isBase64Encoded: false,
        path: '/approval-required-details',
        multiValueQueryStringParameters: null,
        multiValueHeaders: null,
        pathParameters: null,
        queryStringParameters: null,
        stageVariables: null,
        requestContext: null,
        resource: '',
        ...overrides
    }
}

export const buildContext = (overrides: Partial<Context>): Context => {
    return {
        callbackWaitsForEmptyEventLoop: false,
        functionName: 'test',
        functionVersion: '1',
        invokedFunctionArn: 'arn',
        memoryLimitInMB: '1',
        awsRequestId: 'aws',
        logGroupName: 'log',
        logStreamName: 'stream',
        getRemainingTimeInMillis: () => 0,
        done: () => {
        },
        fail: () => {
        },
        succeed: () => {
        },
        ...overrides
    }
}

export const buildClientPaymentClaimExpectedWinner = (overrides: Partial<Winner>): Winner => {
    return {
        "winId": "nrlABC-nrl2021rd12-08dddf51-62dc-4cce-8bd3-77c937e14114-1626416184690",
        "groupId": "nrlABC",
        "firstName": "John or ABC Corp Pty Ltd",
        "lastName": "Smith or Corp",
        "payID": "engineering@azupay.com.au",
        "payIDType": "EMAIL",
        "accountId": "nrl2021rd12-08dddf51-62dc-4cce-8bd3-77c937e14114-1626416184690",
        "mobileNumber": "+61-4444444",
        "email": "test@winpay.com",
        "winPayStatus": 0,
        "prize": "1.95",
        "submissionTime": "8/3/2023, 7:29:00 PM",
        "updated": 1691054940559,
        "accountNumber": "12345678",
        "bsb": "012306",
        "paymentDescription": "Payment for winner",
        "paymentReference": "LOW6 competition",
        "ultimatePayerName": "SB1234",
        "paymentNotificationEndpointUrl": "https://help.com",
        "paymentNotificationAuthorizationHeaderValue": "358ff09a-2151-4831-8505-ba21c0e652c6",
        ...overrides
    }
}
export const buildClientPaymentClaimExpectedWinnerPaymentPending = (overrides: Partial<Winner>): Winner => {
    return {
        "winId": "nrlABC-nrl2021rd12-08dddf51-62dc-4cce-8bd3-77c937e14114-1626416184690",
        "groupId": "nrlABC",
        "firstName": "John or ABC Corp Pty Ltd",
        "lastName": "Smith or Corp",
        "payID": "something@example.com",
        "payIDType": "EMAIL",
        "accountId": "nrl2021rd12-08dddf51-62dc-4cce-8bd3-77c937e14114-1626416184690",
        "mobileNumber": "+61-4444444",
        "email": "test@winpay.com",
        "winPayStatus": 2,
        "prize": "1.95",
        "submissionTime": "8/3/2023, 7:29:00 PM",
        "updated": 1691054940559,
        "accountNumber": "12345678",
        "bsb": "012306",
        "paymentDescription": "Payment for winner",
        "paymentReference": "LOW6 competition",
        "ultimatePayerName": "SB",
        "paymentNotificationEndpointUrl": "https://help.com",
        "paymentNotificationAuthorizationHeaderValue": "358ff09a-2151-4831-8505-ba21c0e652c6",
        ...overrides
    }
}

const sampleAzupayMakePayment: AzupayMakePayment = {
    clientPaymentId: "hr20230712-2c8c5fe1-16bb-e911-a991-000d3aa00147-1689562515469",
    payeeName: "Mr John Smith or ABC Corp Pty Ltd",
    payID: "engineering@azupay.com.au",
    payIDType: "EMAIL",
    bsb: "012306",
    accountNumber: "12345678",
    paymentAmount: "1.95",
    paymentDescription: "Payment for wages August 2020",
    paymentReference: "ec6507a4-7f2c-4f41-b3b8-a989c222648d",
    ultimatePayerName: "Mr John Smith or ABC Corp Pty Ltd",
    paymentNotification: {
        "paymentNotificationEndpointUrl": "https://help.com",
        "paymentNotificationAuthorizationHeaderValue": "358ff09a-2151-4831-8505-ba21c0e652c6"
    },
}

export const buildClientPaymentClaimExpectedPayment = (overrides: Partial<AzupayMakePayment>): AzupayMakePayment => {
    const paymentTemplate = {...sampleAzupayMakePayment}
    paymentTemplate.payeeName = '' // ?
    paymentTemplate.paymentAmount = '' // ?
    paymentTemplate.paymentDescription = '' // ?
    paymentTemplate.paymentNotification.paymentNotificationAuthorizationHeaderValue = '' // ?
    paymentTemplate.paymentNotification.paymentNotificationEndpointUrl = '' // ?
    paymentTemplate.accountNumber = undefined
    paymentTemplate.bsb = undefined
    paymentTemplate.clientPaymentId = ''  // ?
    paymentTemplate.paymentReference = ''
    paymentTemplate.ultimatePayerName = ''
    return {
        ...paymentTemplate,
        ...overrides
    }
}

export const buildPayment = (overrides: Partial<AzupayMakePayment>): AzupayMakePayment => {
    return {
        ...sampleAzupayMakePayment,
        ...overrides
    }
}

export const buildAzupayPaymentStatus = (overrides: Partial<AzupayPaymentStatus>): AzupayPaymentStatus => {
    return {
        paymentId: "K+9p4EE0rJnMtomRfWKWEDRh82BnAboHP2KwgIPyEIA=",
        status: "CREATED",
        createdDatetime: "2019-08-24T14:15:22Z",
        settlementDatetime: "2019-08-24T14:15:22Z",
        completedDatetime: "2019-08-24T14:15:22Z",
        failureReason: "AG01",
        returnedReason: "AG01",
        returnedDatetime: "2019-08-24T14:15:22Z",
        currentBalance: 31050.95,
        nppTransactionId: "string",
        sentViaDE: true,
        ...overrides
    }
}
