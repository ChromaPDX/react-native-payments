"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectBankAccountError = exports.VerifyMicrodepositsError = exports.MissingRoutingNumber = exports.GooglePayError = exports.PaymentSheetError = exports.ApplePayError = exports.RetrieveSetupIntentError = exports.RetrievePaymentIntentError = exports.CreateTokenError = exports.CreatePaymentMethodError = exports.ConfirmSetupIntentError = exports.CardActionError = exports.ConfirmPaymentError = void 0;
var ConfirmPaymentError;
(function (ConfirmPaymentError) {
    ConfirmPaymentError["Canceled"] = "Canceled";
    ConfirmPaymentError["Failed"] = "Failed";
    ConfirmPaymentError["Unknown"] = "Unknown";
})(ConfirmPaymentError = exports.ConfirmPaymentError || (exports.ConfirmPaymentError = {}));
var CardActionError;
(function (CardActionError) {
    CardActionError["Canceled"] = "Canceled";
    CardActionError["Failed"] = "Failed";
    CardActionError["Unknown"] = "Unknown";
})(CardActionError = exports.CardActionError || (exports.CardActionError = {}));
var ConfirmSetupIntentError;
(function (ConfirmSetupIntentError) {
    ConfirmSetupIntentError["Canceled"] = "Canceled";
    ConfirmSetupIntentError["Failed"] = "Failed";
    ConfirmSetupIntentError["Unknown"] = "Unknown";
})(ConfirmSetupIntentError = exports.ConfirmSetupIntentError || (exports.ConfirmSetupIntentError = {}));
var CreatePaymentMethodError;
(function (CreatePaymentMethodError) {
    CreatePaymentMethodError["Failed"] = "Failed";
})(CreatePaymentMethodError = exports.CreatePaymentMethodError || (exports.CreatePaymentMethodError = {}));
var CreateTokenError;
(function (CreateTokenError) {
    CreateTokenError["Failed"] = "Failed";
})(CreateTokenError = exports.CreateTokenError || (exports.CreateTokenError = {}));
var RetrievePaymentIntentError;
(function (RetrievePaymentIntentError) {
    RetrievePaymentIntentError["Unknown"] = "Unknown";
})(RetrievePaymentIntentError = exports.RetrievePaymentIntentError || (exports.RetrievePaymentIntentError = {}));
var RetrieveSetupIntentError;
(function (RetrieveSetupIntentError) {
    RetrieveSetupIntentError["Unknown"] = "Unknown";
})(RetrieveSetupIntentError = exports.RetrieveSetupIntentError || (exports.RetrieveSetupIntentError = {}));
var ApplePayError;
(function (ApplePayError) {
    ApplePayError["Canceled"] = "Canceled";
    ApplePayError["Failed"] = "Failed";
    ApplePayError["Unknown"] = "Unknown";
})(ApplePayError = exports.ApplePayError || (exports.ApplePayError = {}));
var PaymentSheetError;
(function (PaymentSheetError) {
    PaymentSheetError["Failed"] = "Failed";
    PaymentSheetError["Canceled"] = "Canceled";
})(PaymentSheetError = exports.PaymentSheetError || (exports.PaymentSheetError = {}));
var GooglePayError;
(function (GooglePayError) {
    GooglePayError["Failed"] = "Failed";
    GooglePayError["Canceled"] = "Canceled";
    GooglePayError["Unknown"] = "Unknown";
})(GooglePayError = exports.GooglePayError || (exports.GooglePayError = {}));
exports.MissingRoutingNumber = {
    code: CreateTokenError.Failed,
    message: 'You must provide a routing number for US bank accounts. This should be the ACH routing number.',
};
var VerifyMicrodepositsError;
(function (VerifyMicrodepositsError) {
    VerifyMicrodepositsError["Canceled"] = "Canceled";
    VerifyMicrodepositsError["Failed"] = "Failed";
    VerifyMicrodepositsError["Unknown"] = "Unknown";
})(VerifyMicrodepositsError = exports.VerifyMicrodepositsError || (exports.VerifyMicrodepositsError = {}));
var CollectBankAccountError;
(function (CollectBankAccountError) {
    CollectBankAccountError["Canceled"] = "Canceled";
    CollectBankAccountError["Failed"] = "Failed";
    CollectBankAccountError["Unknown"] = "Unknown";
})(CollectBankAccountError = exports.CollectBankAccountError || (exports.CollectBankAccountError = {}));
