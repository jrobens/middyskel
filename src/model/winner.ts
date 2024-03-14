/**
 */

export interface Winner {
    winId: string;
    groupId: string;
    firstName: string;
    lastName: string;
    accountId: string;
    email: string;
    mobileNumber: string;
    winPayStatus: {};
    prize: string;
    submissionTime: string;
    updated: number;
    payID?: string;
    payIDType?: string;
    accountNumber?: string; // Australian $ accounts, leading zeros
    bsb?: string;
    paymentDescription?: string;
    paymentReference?: string;
    ultimatePayerName?: string;
    paymentNotificationEndpointUrl?: string;
    paymentNotificationAuthorizationHeaderValue?: string,
    paymentNotificationExternalSuccessTime?: number,
    notificationSentTime?: number;
    reminderSentTime?: number;
    expirySentTime?: number;
    authority1?: string;
    authority2?: string;

    statusMessage?: string;
    winDate?: Date;
    winType?: string;

    receiveEmailInd?: boolean;
    receivePushNotificationInd?: boolean;
    verificationStatus?: string; // Mandatory from the upload file
    firstTipTs?: Date;
    lastTipTs?: Date;
    FirstTipNtTs?: Date;
    pick1?: string;
    pick1SelectionId?: number;
    pick1EventId?: number;
    pick1Result?: string;
    pick2?: string;
    pick2SelectionId?: number;
    pick2EventId?: number;
    pick2Result?: string;
    pick3?: string;
    pick3SelectionId?: number;
    pick3EventId?: number;
    pick3Result?: string;
    pick4?: string;
    pick4SelectionId?: number;
    pick4EventId?: number;
    pick4Result?: string;
    pick5?: string;
    pick5SelectionId?: number;
    pick5EventId?: number;
    pick5Result?: string;
    pick6?: string;
    pick6SelectionId?: number;
    pick6EventId?: number;
    pick6Result?: string;
    pick7?: string;
    pick7SelectionId?: number;
    pick7EventId?: number;
    pick7Result?: string;
    totalWins?: number;
    totalPlaces?: number;
    totalLosses?: number;
}

export const winnerInitialiser: Winner = {
    winId: '',
    groupId: '',
    firstName: '',
    lastName: '',
    accountId: '',
    mobileNumber: '',
    email: '',
    winPayStatus: 1,
    prize: "0",
    submissionTime: new Date().toLocaleString(),
    updated: 0,
    payID: '',
    accountNumber: '',
    bsb: '',
}

