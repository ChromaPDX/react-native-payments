import { ApplePay, ApplePayError, ApplePayResult, ConfirmPaymentResult, SetupIntent, PaymentIntent, ConfirmSetupIntentResult, CreatePaymentMethodResult, CreateTokenForCVCUpdateResult, CreateTokenResult, GooglePayInitResult, HandleNextActionResult, PaymentMethod, PayWithGooglePayResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, StripeError, GooglePay, CreateGooglePayPaymentMethodResult, OpenApplePaySetupResult, Token } from "./types";
export declare const createPaymentMethod: (params: PaymentMethod.CreateParams, options?: PaymentMethod.CreateOptions) => Promise<CreatePaymentMethodResult>;
export declare const createToken: (params: Token.CreateParams) => Promise<CreateTokenResult>;
export declare const retrievePaymentIntent: (clientSecret: string) => Promise<RetrievePaymentIntentResult>;
export declare const retrieveSetupIntent: (clientSecret: string) => Promise<RetrieveSetupIntentResult>;
export declare const confirmPayment: (paymentIntentClientSecret: string, params: PaymentIntent.ConfirmParams, options?: PaymentIntent.ConfirmOptions) => Promise<ConfirmPaymentResult>;
export declare const isApplePaySupported: () => Promise<boolean>;
export declare const presentApplePay: (params: ApplePay.PresentParams) => Promise<ApplePayResult>;
export declare const updateApplePaySummaryItems: (summaryItems: ApplePay.CartSummaryItem[], errorAddressFields?: Array<{
    field: ApplePay.AddressFields;
    message?: string;
}>) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
export declare const confirmApplePayPayment: (clientSecret: string) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
export declare const handleNextAction: (paymentIntentClientSecret: string) => Promise<HandleNextActionResult>;
export declare const confirmSetupIntent: (paymentIntentClientSecret: string, params: SetupIntent.ConfirmParams, options?: SetupIntent.ConfirmOptions) => Promise<ConfirmSetupIntentResult>;
export declare const createTokenForCVCUpdate: (cvc: string) => Promise<CreateTokenForCVCUpdateResult>;
export declare const handleURLCallback: (url: string) => Promise<boolean>;
export declare const isGooglePaySupported: (params?: GooglePay.IsSupportedParams | undefined) => Promise<boolean>;
export declare const initGooglePay: (params: GooglePay.InitParams) => Promise<GooglePayInitResult>;
export declare const presentGooglePay: (params: GooglePay.PresentParams) => Promise<PayWithGooglePayResult>;
export declare const createGooglePayPaymentMethod: (params: GooglePay.CreatePaymentMethodParams) => Promise<CreateGooglePayPaymentMethodResult>;
export declare const openApplePaySetup: () => Promise<OpenApplePaySetupResult>;
