import type { CardBrand, BankAcccountHolderType, BankAcccountType } from "./Token";
import type { FutureUsage } from "./PaymentIntent";
import type { Address, BillingDetails } from "./Common";
export interface Result {
    id: string;
    liveMode: boolean;
    customerId: string;
    billingDetails: BillingDetails;
    paymentMethodType: Type;
    AuBecsDebit: AuBecsDebitResult;
    BacsDebit: BacsDebitResult;
    Card: CardResult;
    Fpx: FpxResult;
    Ideal: IdealResult;
    SepaDebit: SepaDebitResult;
    Sofort: SofortResult;
    Upi: UpiResult;
    USBankAccount: USBankAccountResult;
}
export declare type CreateParams = CardParams | IdealParams | OxxoParams | P24Params | AlipayParams | GiropayParams | SepaParams | EpsParams | SofortParams | GrabPayParams | FPXParams | AfterpayClearpayParams | KlarnaParams | BancontactParams | USBankAccountParams | PayPalParams;
export declare type ConfirmParams = CreateParams;
export declare type CreateOptions = {
    setupFutureUsage?: FutureUsage;
};
export declare type ConfirmOptions = CreateOptions;
export declare type ShippingDetails = BillingDetails;
export declare type CardParams = {
    paymentMethodType: "Card";
    paymentMethodData?: {
        token?: string;
        billingDetails?: BillingDetails;
    };
} | {
    paymentMethodType: "Card";
    paymentMethodData: {
        paymentMethodId: string;
        cvc?: string;
        billingDetails?: BillingDetails;
    };
};
export interface IdealParams {
    paymentMethodType: "Ideal";
    paymentMethodData?: {
        bankName?: string;
        billingDetails?: BillingDetails;
    };
}
export interface FPXParams {
    paymentMethodType: "Fpx";
    paymentMethodData?: {
        testOfflineBank?: boolean;
    };
}
export interface AlipayParams {
    paymentMethodType: "Alipay";
}
export interface OxxoParams {
    paymentMethodType: "Oxxo";
    paymentMethodData: {
        billingDetails: BillingDetails;
    };
}
export interface SofortParams {
    paymentMethodType: "Sofort";
    paymentMethodData: {
        country: string;
        billingDetails: BillingDetails;
    };
}
export interface GrabPayParams {
    paymentMethodType: "GrabPay";
    paymentMethodData?: {
        billingDetails?: BillingDetails;
    };
}
export interface BancontactParams {
    paymentMethodType: "Bancontact";
    paymentMethodData: {
        billingDetails: BillingDetails;
    };
}
export interface SepaParams {
    paymentMethodType: "SepaDebit";
    paymentMethodData: {
        iban: string;
        billingDetails: BillingDetails;
    };
}
export interface GiropayParams {
    paymentMethodType: "Giropay";
    paymentMethodData: {
        billingDetails: BillingDetails;
    };
}
export interface AfterpayClearpayParams {
    paymentMethodType: "AfterpayClearpay";
    paymentMethodData: {
        shippingDetails: ShippingDetails;
        billingDetails: BillingDetails;
    };
}
export declare type KlarnaParams = {
    paymentMethodType: "Klarna";
    paymentMethodData: {
        billingDetails: Pick<Required<BillingDetails>, "email"> & {
            address: Pick<Required<Address>, "country">;
        } & BillingDetails;
    };
};
export interface EpsParams {
    paymentMethodType: "Eps";
    paymentMethodData: {
        billingDetails: BillingDetails;
    };
}
export interface P24Params {
    paymentMethodType: "P24";
    paymentMethodData: {
        billingDetails: BillingDetails;
    };
}
export interface WeChatPayParams {
    paymentMethodType: "WeChatPay";
    paymentMethodData: {
        appId: string;
        billingDetails?: BillingDetails;
    };
}
/**
 * If paymentMethodData is null, it is assumed that the bank account details have already been attached
 * via `collectBankAccountForPayment` or `collectBankAccountForSetup`.
 */
export declare type USBankAccountParams = {
    paymentMethodType: "USBankAccount";
    paymentMethodData?: {
        billingDetails: Pick<Required<BillingDetails>, "name"> & BillingDetails;
        accountNumber: string;
        routingNumber: string;
        /** Defaults to Individual */
        accountHolderType?: BankAcccountHolderType;
        /** Defaults to Checking */
        accountType?: BankAcccountType;
    };
};
export declare type PayPalParams = {
    paymentMethodType: "PayPal";
    paymentMethodData?: {
        billingDetails?: BillingDetails;
    };
};
export interface AuBecsDebitResult {
    fingerprint?: string;
    last4?: string;
    bsbNumber?: string;
}
export interface BacsDebitResult {
    sortCode?: string;
    last4?: string;
    fingerprint?: string;
}
export interface CardResult {
    brand?: CardBrand;
    country?: string;
    expYear?: number;
    expMonth?: number;
    fingerprint?: string;
    funding?: string;
    last4?: string;
}
export interface FpxResult {
    bank?: string;
}
export interface IdealResult {
    bankIdentifierCode?: string;
    bank?: string;
}
export interface SepaDebitResult {
    bankCode?: string;
    country?: string;
    fingerprint?: string;
    last4?: string;
}
export interface SofortResult {
    country?: string;
}
export interface UpiResult {
    vpa?: string;
}
export declare type USBankAccountResult = {
    routingNumber?: string;
    accountHolderType?: BankAcccountHolderType;
    accountType?: BankAcccountType;
    last4?: string;
    bankName?: string;
    linkedAccount?: string;
    fingerprint?: string;
    preferredNetwork?: string;
    supportedNetworks?: string[];
};
export declare type Type = "AfterpayClearpay" | "Card" | "Alipay" | "GrabPay" | "Ideal" | "Fpx" | "CardPresent" | "SepaDebit" | "AuBecsDebit" | "BacsDebit" | "Giropay" | "P24" | "Eps" | "Bancontact" | "Oxxo" | "Sofort" | "Upi" | "USBankAccount" | "PayPal" | "Unknown";
export declare type CollectBankAccountParams = {
    paymentMethodType: "USBankAccount";
    paymentMethodData: {
        billingDetails: {
            name: string;
            email?: string;
        };
    };
};
