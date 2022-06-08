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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayButton = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ApplePayButtonNative = (0, react_native_1.requireNativeComponent)('ApplePayButton');
/**
 *  Apple Pay Button Component
 *
 * @example
 * ```ts
 *  <ApplePayButton
 *    onPress={pay}
 *    type="plain"
 *    buttonStyle="black"
 *    borderRadius={4}
 *    style={styles.payButton}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
function ApplePayButton({ onPress, buttonStyle = 'black', type = 'plain', borderRadius = 4, ...props }) {
    const buttonType = (0, react_1.useMemo)(() => mapButtonType(type), [type]);
    const style = (0, react_1.useMemo)(() => mapButtonStyle(buttonStyle), [buttonStyle]);
    return (react_1.default.createElement(ApplePayButtonNative, { type: buttonType, buttonStyle: style, borderRadius: borderRadius, onPressAction: onPress, ...props }));
}
exports.ApplePayButton = ApplePayButton;
function mapButtonType(type) {
    switch (type) {
        case 'plain':
            return 0;
        case 'buy':
            return 1;
        case 'setUp':
            return 2;
        case 'inStore':
            return 3;
        case 'donate':
            return 4;
        case 'checkout':
            return 5;
        case 'book':
            return 6;
        case 'subscribe':
            return 7;
        case 'reload':
            return 8;
        case 'addMoney':
            return 9;
        case 'topUp':
            return 10;
        case 'order':
            return 11;
        case 'rent':
            return 12;
        case 'support':
            return 13;
        case 'contribute':
            return 14;
        case 'tip':
            return 15;
        default:
            return 0;
    }
}
function mapButtonStyle(type) {
    switch (type) {
        case 'white':
            return 0;
        case 'whiteOutline':
            return 1;
        case 'black':
            return 2;
        case 'automatic':
            return 3;
        default:
            return 2;
    }
}
