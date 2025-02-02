import type { ApplePayError, CardActionError, ConfirmPaymentError, ConfirmSetupIntentError, CreatePaymentMethodError, CreateTokenError, GooglePayError, PaymentSheetError, RetrievePaymentIntentError, RetrieveSetupIntentError, StripeError, VerifyMicrodepositsError, CollectBankAccountError } from "./Errors";
import * as ApplePay from "./ApplePay";
import * as PaymentIntent from "./PaymentIntent";
import * as PaymentMethod from "./PaymentMethod";
import * as SetupIntent from "./SetupIntent";
import * as ThreeDSecure from "./ThreeDSecure";
import * as GooglePay from "./GooglePay";
import * as ApplePayButtonComponent from "./components/ApplePayButtonComponent";
import * as Token from "./Token";
export { ApplePay, PaymentIntent, PaymentMethod, SetupIntent, ThreeDSecure, GooglePay, ApplePayButtonComponent, Token, };
export * from "./Errors";
export { Address, BillingDetails } from "./Common";
/**
 * @ignore
 */
export declare type Dictionary<T> = {
    [key: string]: T;
};
export interface AppInfo {
    name?: string;
    partnerId?: string;
    url?: string;
    version?: string;
}
export declare type CreatePaymentMethodResult = {
    paymentMethod: PaymentMethod.Result;
    error?: undefined;
} | {
    paymentMethod?: undefined;
    error: StripeError<CreatePaymentMethodError>;
};
export declare type RetrievePaymentIntentResult = {
    paymentIntent: PaymentIntent.Result;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError<RetrievePaymentIntentError>;
};
export declare type RetrieveSetupIntentResult = {
    setupIntent: SetupIntent.Result;
    error?: undefined;
} | {
    setupIntent?: undefined;
    error: StripeError<RetrieveSetupIntentError>;
};
export declare type ConfirmPaymentResult = {
    paymentIntent: PaymentIntent.Result;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError<ConfirmPaymentError>;
};
export declare type HandleNextActionResult = {
    paymentIntent: PaymentIntent.Result;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError<CardActionError>;
};
export declare type ConfirmSetupIntentResult = {
    setupIntent: SetupIntent.Result;
    error?: undefined;
} | {
    setupIntent?: undefined;
    error: StripeError<ConfirmSetupIntentError>;
};
export declare type CreateTokenForCVCUpdateResult = {
    tokenId: string;
    error?: undefined;
} | {
    tokenId?: undefined;
    error: StripeError<ConfirmSetupIntentError>;
};
export declare type CreateTokenResult = {
    token: Token.Result;
    error?: undefined;
} | {
    token?: undefined;
    error: StripeError<CreateTokenError>;
};
export declare type ConfirmPaymentSheetPaymentResult = {
    error?: StripeError<PaymentSheetError>;
};
export declare type ApplePayResult = {
    paymentMethod: PaymentMethod.Result;
    error?: undefined;
} | {
    paymentMethod?: undefined;
    error: StripeError<ApplePayError>;
};
export interface InitStripeParams {
    publishableKey: string;
    stripeAccountId?: string;
    threeDSecureParams?: ThreeDSecure.ConfigurationParams;
    merchantIdentifier?: string;
    urlScheme?: string;
    setReturnUrlSchemeOnAndroid?: boolean;
}
export interface InitialiseParams extends InitStripeParams {
    appInfo: AppInfo;
}
export declare type GooglePayInitResult = {
    error?: undefined;
} | {
    error: StripeError<GooglePayError>;
};
export declare type PayWithGooglePayResult = {
    error?: undefined;
} | {
    error: StripeError<GooglePayError>;
};
export declare type CreateGooglePayPaymentMethodResult = {
    paymentMethod: PaymentMethod.Result;
    error?: undefined;
} | {
    paymentMethod?: undefined;
    error: StripeError<GooglePayError>;
};
export declare type OpenApplePaySetupResult = {
    error?: undefined;
} | {
    error: StripeError<ApplePayError>;
};
export declare type VerifyMicrodepositsParams = {
    amounts: number[];
    descriptorCode?: undefined;
} | {
    amounts?: undefined;
    descriptorCode: string;
};
export declare type VerifyMicrodepositsForPaymentResult = {
    paymentIntent: PaymentIntent.Result;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError<VerifyMicrodepositsError>;
};
export declare type VerifyMicrodepositsForSetupResult = {
    setupIntent: SetupIntent.Result;
    error?: undefined;
} | {
    setupIntent?: undefined;
    error: StripeError<VerifyMicrodepositsError>;
};
export declare type CollectBankAccountForPaymentResult = {
    paymentIntent: PaymentIntent.Result;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError<CollectBankAccountError>;
};
export declare type CollectBankAccountForSetupResult = {
    setupIntent: SetupIntent.Result;
    error?: undefined;
} | {
    setupIntent?: undefined;
    error: StripeError<CollectBankAccountError>;
};
export declare type GooglePayCardToken = {
    id: string;
    cardLastFour: string;
    network: number;
    serviceProvider: number;
    issuer: string;
    status: "TOKEN_STATE_NEEDS_IDENTITY_VERIFICATION" | "TOKEN_STATE_PENDING" | "TOKEN_STATE_SUSPENDED" | "TOKEN_STATE_ACTIVE" | "TOKEN_STATE_FELICA_PENDING_PROVISIONING" | "TOKEN_STATE_UNTOKENIZED";
};
export declare type IsCardInWalletResult = {
    isInWallet: boolean;
    token?: GooglePayCardToken;
    error?: undefined;
} | {
    isInWallet?: undefined;
    token?: undefined;
    error: StripeError<GooglePayError>;
};
