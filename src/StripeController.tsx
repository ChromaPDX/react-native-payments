import { NativeModules } from 'react-native';
import type {
  PaymentMethod,
  ApplePay,
  SetupIntent,
  InitialiseParams,
  CreatePaymentMethodResult,
  RetrievePaymentIntentResult,
  RetrieveSetupIntentResult,
  ConfirmPaymentResult,
  HandleNextActionResult,
  ConfirmSetupIntentResult,
  CreateTokenForCVCUpdateResult,
  ApplePayResult,
  CreateTokenResult,
  GooglePayInitResult,
  PayWithGooglePayResult,
  CreateGooglePayPaymentMethodResult,
  GooglePay,
  OpenApplePaySetupResult,
  Token
} from './types';

type NativeStripeSdkType = {
  initialise(params: InitialiseParams): Promise<void>;
  createPaymentMethod(
    params: PaymentMethod.CreateParams,
    options: PaymentMethod.CreateOptions
  ): Promise<CreatePaymentMethodResult>;
  handleNextAction(
    paymentIntentClientSecret: string
  ): Promise<HandleNextActionResult>;
  confirmPayment(
    paymentIntentClientSecret: string,
    params: PaymentMethod.ConfirmParams,
    options: PaymentMethod.ConfirmOptions
  ): Promise<ConfirmPaymentResult>;
  isApplePaySupported(): Promise<boolean>;
  presentApplePay(params: ApplePay.PresentParams): Promise<ApplePayResult>;
  confirmApplePayPayment(clientSecret: string): Promise<void>;
  updateApplePaySummaryItems(
    summaryItems: ApplePay.CartSummaryItem[],
    errorAddressFields: Array<{
      field: ApplePay.AddressFields;
      message?: string;
    }>
  ): Promise<void>;
  confirmSetupIntent(
    paymentIntentClientSecret: string,
    params: SetupIntent.ConfirmParams,
    options: SetupIntent.ConfirmOptions
  ): Promise<ConfirmSetupIntentResult>;
  retrievePaymentIntent(
    clientSecret: string
  ): Promise<RetrievePaymentIntentResult>;
  retrieveSetupIntent(clientSecret: string): Promise<RetrieveSetupIntentResult>;
  createTokenForCVCUpdate(cvc: string): Promise<CreateTokenForCVCUpdateResult>;
  handleURLCallback(url: string): Promise<boolean>;
  createToken(params: Token.CreateParams): Promise<CreateTokenResult>;
  isGooglePaySupported(params: GooglePay.IsSupportedParams): Promise<boolean>;
  initGooglePay(params: GooglePay.InitParams): Promise<GooglePayInitResult>;
  presentGooglePay(
    params: GooglePay.PresentParams
  ): Promise<PayWithGooglePayResult>;
  createGooglePayPaymentMethod(
    params: GooglePay.CreatePaymentMethodParams
  ): Promise<CreateGooglePayPaymentMethodResult>;
  openApplePaySetup(): Promise<OpenApplePaySetupResult>;
};

const { StripeApplePay } = NativeModules;

export default StripeApplePay as NativeStripeSdkType;
