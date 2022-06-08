"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStripe = void 0;
const react_1 = require("react");
const helpers_1 = require("../helpers");
const StripeController_1 = __importDefault(require("../StripeController"));
const functions_1 = require("../functions");
/**
 * useStripe hook
 */
function useStripe() {
    const [isApplePaySupported, setApplePaySupported] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        async function checkApplePaySupport() {
            const isSupported = helpers_1.isiOS && (await StripeController_1.default.isApplePaySupported());
            setApplePaySupported(isSupported);
        }
        checkApplePaySupport();
    }, []);
    const _createPaymentMethod = (0, react_1.useCallback)(async (data, options = {}) => {
        return (0, functions_1.createPaymentMethod)(data, options);
    }, []);
    const _createToken = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.createToken)(params);
    }, []);
    const _retrievePaymentIntent = (0, react_1.useCallback)(async (clientSecret) => {
        return (0, functions_1.retrievePaymentIntent)(clientSecret);
    }, []);
    const _retrieveSetupIntent = (0, react_1.useCallback)(async (clientSecret) => {
        return (0, functions_1.retrieveSetupIntent)(clientSecret);
    }, []);
    const _confirmPayment = (0, react_1.useCallback)(async (paymentIntentClientSecret, data, options = {}) => {
        return (0, functions_1.confirmPayment)(paymentIntentClientSecret, data, options);
    }, []);
    const _presentApplePay = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.presentApplePay)(params);
    }, []);
    const _updateApplePaySummaryItems = (0, react_1.useCallback)(async (summaryItems, errorAddressFields = []) => {
        return (0, functions_1.updateApplePaySummaryItems)(summaryItems, errorAddressFields);
    }, []);
    const _confirmApplePayPayment = (0, react_1.useCallback)(async (clientSecret) => {
        return (0, functions_1.confirmApplePayPayment)(clientSecret);
    }, []);
    const _handleNextAction = (0, react_1.useCallback)(async (paymentIntentClientSecret) => {
        return (0, functions_1.handleNextAction)(paymentIntentClientSecret);
    }, []);
    const _confirmSetupIntent = (0, react_1.useCallback)(async (paymentIntentClientSecret, data, options = {}) => {
        return (0, functions_1.confirmSetupIntent)(paymentIntentClientSecret, data, options);
    }, []);
    const _createTokenForCVCUpdate = (0, react_1.useCallback)(async (cvc) => {
        return (0, functions_1.createTokenForCVCUpdate)(cvc);
    }, []);
    const _isGooglePaySupported = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.isGooglePaySupported)(params);
    }, []);
    const _initGooglePay = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.initGooglePay)(params);
    }, []);
    const _presentGooglePay = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.presentGooglePay)(params);
    }, []);
    const _createGooglePayPaymentMethod = (0, react_1.useCallback)(async (params) => {
        return (0, functions_1.createGooglePayPaymentMethod)(params);
    }, []);
    const _openApplePaySetup = (0, react_1.useCallback)(async () => {
        return (0, functions_1.openApplePaySetup)();
    }, []);
    return {
        retrievePaymentIntent: _retrievePaymentIntent,
        retrieveSetupIntent: _retrieveSetupIntent,
        confirmPayment: _confirmPayment,
        createPaymentMethod: _createPaymentMethod,
        handleNextAction: _handleNextAction,
        isApplePaySupported: isApplePaySupported,
        presentApplePay: _presentApplePay,
        confirmApplePayPayment: _confirmApplePayPayment,
        confirmSetupIntent: _confirmSetupIntent,
        createTokenForCVCUpdate: _createTokenForCVCUpdate,
        updateApplePaySummaryItems: _updateApplePaySummaryItems,
        createToken: _createToken,
        isGooglePaySupported: _isGooglePaySupported,
        initGooglePay: _initGooglePay,
        presentGooglePay: _presentGooglePay,
        createGooglePayPaymentMethod: _createGooglePayPaymentMethod,
        openApplePaySetup: _openApplePaySetup,
    };
}
exports.useStripe = useStripe;
