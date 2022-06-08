"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeProvider = exports.initStripe = void 0;
const react_1 = __importStar(require("react"));
const StripeController_1 = __importDefault(require("../StripeController"));
const helpers_1 = require("../helpers");
// const repository: any = pjson.repository;
const appInfo = {
    name: '@chromapdx/react-native-payments'
    // partnerId: shouldAttributeExpo() ? EXPO_PARTNER_ID : undefined,
};
const initStripe = async (params) => {
    const extendedParams = { ...params, appInfo };
    StripeController_1.default.initialise(extendedParams);
};
exports.initStripe = initStripe;
/**
 *  StripeProvider Component
 *
 * @example
 * ```ts
 *  <StripeProvider
 *    publishableKey="_publishableKey"
 *    merchantIdentifier="merchant.com.stripe.react.native"
 *    threeDSecureParams={{
 *      backgroundColor: "#FFF",
 *      timeout: 5,
 *    }}
 *  >
 *    <App />
 *  </StripeProvider>
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
function StripeProvider({ children, publishableKey, merchantIdentifier, threeDSecureParams, stripeAccountId, urlScheme, setReturnUrlSchemeOnAndroid, }) {
    (0, react_1.useEffect)(() => {
        if (!publishableKey) {
            return;
        }
        if (helpers_1.isAndroid) {
            StripeController_1.default.initialise({
                publishableKey,
                appInfo,
                stripeAccountId,
                threeDSecureParams,
                urlScheme,
                setReturnUrlSchemeOnAndroid,
            });
        }
        else {
            StripeController_1.default.initialise({
                publishableKey,
                appInfo,
                stripeAccountId,
                threeDSecureParams,
                merchantIdentifier,
                urlScheme,
            });
        }
    }, [
        publishableKey,
        merchantIdentifier,
        stripeAccountId,
        threeDSecureParams,
        urlScheme,
        setReturnUrlSchemeOnAndroid,
    ]);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
}
exports.StripeProvider = StripeProvider;
