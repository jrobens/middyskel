
export interface AzupayMakePayment {
    clientPaymentId: string,
    payeeName: string,
    payID?: string,
    payIDType?: string
    bsb?: string,
    accountNumber?: string,
    paymentAmount: string,
    paymentDescription: string,
    paymentReference?: string,
    ultimatePayerName?: string,
    paymentNotification: {
        paymentNotificationEndpointUrl: string,
        paymentNotificationAuthorizationHeaderValue: string
    }
}

export interface AzupayPaymentStatus {
    paymentId: string,
    status: string,
    createdDatetime: string,
    settlementDatetime: string,
    completedDatetime: string,
    failureReason: string,
    returnedReason: string,
    returnedDatetime: string,
    currentBalance: number
    nppTransactionId: string,
    sentViaDE: boolean
}
