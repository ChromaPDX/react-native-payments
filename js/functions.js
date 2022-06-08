"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApplePaySetup = exports.createGooglePayPaymentMethod = exports.presentGooglePay = exports.initGooglePay = exports.isGooglePaySupported = exports.handleURLCallback = exports.createTokenForCVCUpdate = exports.confirmSetupIntent = exports.handleNextAction = exports.confirmApplePayPayment = exports.updateApplePaySummaryItems = exports.presentApplePay = exports.isApplePaySupported = exports.confirmPayment = exports.retrieveSetupIntent = exports.retrievePaymentIntent = exports.createToken = exports.createPaymentMethod = void 0;
const helpers_1 = require("./helpers");
const Errors_1 = require("./types/Errors");
const StripeController_1 = __importDefault(require("./StripeController"));
const types_1 = require("./types");
const APPLE_PAY_NOT_SUPPORTED_MESSAGE = "Apple pay is not supported on this device";
const createPaymentMethod = async (params, options = {}) => {
    try {
        const { paymentMethod, error } = await StripeController_1.default.createPaymentMethod(params, options);
        if (error) {
            return {
                error,
            };
        }
        return {
            paymentMethod: paymentMethod,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.createPaymentMethod = createPaymentMethod;
const createToken = async (params) => {
    if (params.type === "BankAccount" &&
        params.country?.toLowerCase() === "us" &&
        !params.routingNumber) {
        return {
            error: Errors_1.MissingRoutingNumber,
        };
    }
    try {
        const { token, error } = await StripeController_1.default.createToken(params);
        if (error) {
            return {
                error,
            };
        }
        return {
            token: token,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.createToken = createToken;
const retrievePaymentIntent = async (clientSecret) => {
    try {
        const { paymentIntent, error } = await StripeController_1.default.retrievePaymentIntent(clientSecret);
        if (error) {
            return {
                error,
            };
        }
        return {
            paymentIntent: paymentIntent,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.retrievePaymentIntent = retrievePaymentIntent;
const retrieveSetupIntent = async (clientSecret) => {
    try {
        const { setupIntent, error } = await StripeController_1.default.retrieveSetupIntent(clientSecret);
        if (error) {
            return {
                error,
            };
        }
        return {
            setupIntent: setupIntent,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.retrieveSetupIntent = retrieveSetupIntent;
const confirmPayment = async (paymentIntentClientSecret, params, options = {}) => {
    try {
        const { paymentIntent, error } = await StripeController_1.default.confirmPayment(paymentIntentClientSecret, params, options);
        if (error) {
            return {
                error,
            };
        }
        return {
            paymentIntent: paymentIntent,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.confirmPayment = confirmPayment;
const isApplePaySupported = async () => {
    return helpers_1.isiOS && (await StripeController_1.default.isApplePaySupported());
};
exports.isApplePaySupported = isApplePaySupported;
const presentApplePay = async (params) => {
    if (!(await StripeController_1.default.isApplePaySupported())) {
        return {
            error: {
                code: types_1.ApplePayError.Canceled,
                message: APPLE_PAY_NOT_SUPPORTED_MESSAGE,
            },
        };
    }
    try {
        const { paymentMethod, error } = await StripeController_1.default.presentApplePay(params);
        if (error) {
            return {
                error,
            };
        }
        return { paymentMethod: paymentMethod };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.presentApplePay = presentApplePay;
const updateApplePaySummaryItems = async (summaryItems, errorAddressFields = []) => {
    if (!(await StripeController_1.default.isApplePaySupported())) {
        return {
            error: {
                code: types_1.ApplePayError.Canceled,
                message: APPLE_PAY_NOT_SUPPORTED_MESSAGE,
            },
        };
    }
    try {
        await StripeController_1.default.updateApplePaySummaryItems(summaryItems, errorAddressFields);
        return {};
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.updateApplePaySummaryItems = updateApplePaySummaryItems;
const confirmApplePayPayment = async (clientSecret) => {
    if (!(await StripeController_1.default.isApplePaySupported())) {
        return {
            error: {
                code: types_1.ApplePayError.Canceled,
                message: APPLE_PAY_NOT_SUPPORTED_MESSAGE,
            },
        };
    }
    try {
        await StripeController_1.default.confirmApplePayPayment(clientSecret);
        return {};
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.confirmApplePayPayment = confirmApplePayPayment;
const handleNextAction = async (paymentIntentClientSecret) => {
    try {
        const { paymentIntent, error } = await StripeController_1.default.handleNextAction(paymentIntentClientSecret);
        if (error) {
            return {
                error,
            };
        }
        return {
            paymentIntent: paymentIntent,
        };
    }
    catch (error) {
        return {
            error: (0, helpers_1.createError)(error),
        };
    }
};
exports.handleNextAction = handleNextAction;
const confirmSetupIntent = async (paymentIntentClientSecret, params, options = {}) => {
    try {
        const { setupIntent, error } = await StripeController_1.default.confirmSetupIntent(paymentIntentClientSecret, params, options);
        if (error) {
            return {
                error,
            };
        }
        return {
            setupIntent: setupIntent,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.confirmSetupIntent = confirmSetupIntent;
const createTokenForCVCUpdate = async (cvc) => {
    try {
        const { tokenId, error } = await StripeController_1.default.createTokenForCVCUpdate(cvc);
        if (error) {
            return {
                error,
            };
        }
        return {
            tokenId: tokenId,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.createTokenForCVCUpdate = createTokenForCVCUpdate;
const handleURLCallback = async (url) => {
    const stripeHandled = await StripeController_1.default.handleURLCallback(url);
    return stripeHandled;
};
exports.handleURLCallback = handleURLCallback;
const isGooglePaySupported = async (params) => {
    return (helpers_1.isAndroid && (await StripeController_1.default.isGooglePaySupported(params ?? {})));
};
exports.isGooglePaySupported = isGooglePaySupported;
const initGooglePay = async (params) => {
    try {
        const { error } = await StripeController_1.default.initGooglePay(params);
        if (error) {
            return {
                error,
            };
        }
        return {};
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.initGooglePay = initGooglePay;
const presentGooglePay = async (params) => {
    try {
        const { error } = await StripeController_1.default.presentGooglePay(params);
        if (error) {
            return {
                error,
            };
        }
        return {};
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.presentGooglePay = presentGooglePay;
const createGooglePayPaymentMethod = async (params) => {
    try {
        const { error, paymentMethod } = await StripeController_1.default.createGooglePayPaymentMethod(params);
        if (error) {
            return {
                error,
            };
        }
        return {
            paymentMethod: paymentMethod,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.createGooglePayPaymentMethod = createGooglePayPaymentMethod;
const openApplePaySetup = async () => {
    try {
        const { error } = await StripeController_1.default.openApplePaySetup();
        if (error) {
            return {
                error,
            };
        }
        return {};
    }
    catch (error) {
        return {
            error,
        };
    }
};
exports.openApplePaySetup = openApplePaySetup;
