"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplePay = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useStripe_1 = require("./useStripe");
const eventEmitter = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.StripeApplePay);
const SET_SHIPPING_METHOD_CALLBACK_NAME = 'onDidSetShippingMethod';
const SET_SHIPPING_CONTACT_CALLBACK_NAME = 'onDidSetShippingContact';
/**
 * useApplePay hook
 */
function useApplePay({ onShippingMethodSelected, onShippingContactSelected, } = {}) {
    const { isApplePaySupported, presentApplePay: _presentApplePay, confirmApplePayPayment: _confirmApplePayPayment, updateApplePaySummaryItems, openApplePaySetup: _openApplePaySetup, } = (0, useStripe_1.useStripe)();
    const [items, setItems] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const onDidSetShippingMethod = (0, react_1.useCallback)((result) => {
        if (onShippingMethodSelected) {
            onShippingMethodSelected(result.shippingMethod, updateApplePaySummaryItems);
        }
        else {
            updateApplePaySummaryItems(items);
        }
    }, [items, onShippingMethodSelected, updateApplePaySummaryItems]);
    const onDidSetShippingContact = (0, react_1.useCallback)((result) => {
        if (onShippingContactSelected) {
            onShippingContactSelected(result.shippingContact, updateApplePaySummaryItems);
        }
        else {
            updateApplePaySummaryItems(items);
        }
    }, [items, onShippingContactSelected, updateApplePaySummaryItems]);
    (0, react_1.useEffect)(() => {
        const didSetShippingMethodListener = eventEmitter.addListener(SET_SHIPPING_METHOD_CALLBACK_NAME, onDidSetShippingMethod);
        const didSetShippingContactListener = eventEmitter.addListener(SET_SHIPPING_CONTACT_CALLBACK_NAME, onDidSetShippingContact);
        return () => {
            didSetShippingMethodListener.remove();
            didSetShippingContactListener.remove();
        };
    }, [onDidSetShippingContact, onDidSetShippingMethod]);
    const presentApplePay = (0, react_1.useCallback)(async (params) => {
        setLoading(true);
        setItems(params.cartItems);
        const result = await _presentApplePay(params);
        console.log("presentApplePay result", result);
        if (result.error) {
            setItems(null);
        }
        setLoading(false);
        return result;
    }, [_presentApplePay]);
    const openApplePaySetup = (0, react_1.useCallback)(async () => {
        setLoading(true);
        const result = await _openApplePaySetup();
        setLoading(false);
        return result;
    }, [_openApplePaySetup]);
    const confirmApplePayPayment = (0, react_1.useCallback)(async (clientSecret) => {
        setLoading(true);
        console.log("confirmApplePayPayment", clientSecret);
        const result = await _confirmApplePayPayment(clientSecret);
        setItems(null);
        setLoading(false);
        return result;
    }, [_confirmApplePayPayment]);
    return {
        loading,
        presentApplePay,
        confirmApplePayPayment,
        isApplePaySupported,
        openApplePaySetup,
    };
}
exports.useApplePay = useApplePay;
