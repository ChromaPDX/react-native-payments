"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGooglePay = void 0;
const react_1 = require("react");
const useStripe_1 = require("./useStripe");
/**
 * useGooglePay hook
 */
function useGooglePay() {
    const { isGooglePaySupported, initGooglePay, presentGooglePay, createGooglePayPaymentMethod, } = (0, useStripe_1.useStripe)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const _isGooglePaySupported = (0, react_1.useCallback)(async (params) => {
        setLoading(true);
        const result = await isGooglePaySupported(params);
        setLoading(false);
        return result;
    }, [isGooglePaySupported]);
    const _initGooglePay = (0, react_1.useCallback)(async (params) => {
        setLoading(true);
        const result = await initGooglePay(params);
        setLoading(false);
        return result;
    }, [initGooglePay]);
    const _presentGooglePay = (0, react_1.useCallback)(async (params) => {
        setLoading(true);
        const result = await presentGooglePay(params);
        setLoading(false);
        return result;
    }, [presentGooglePay]);
    const _createGooglePayPaymentMethod = (0, react_1.useCallback)(async (params) => {
        setLoading(true);
        const result = await createGooglePayPaymentMethod(params);
        setLoading(false);
        return result;
    }, [createGooglePayPaymentMethod]);
    return {
        loading,
        isGooglePaySupported: _isGooglePaySupported,
        initGooglePay: _initGooglePay,
        presentGooglePay: _presentGooglePay,
        createGooglePayPaymentMethod: _createGooglePayPaymentMethod,
    };
}
exports.useGooglePay = useGooglePay;
