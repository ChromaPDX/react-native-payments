"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GooglePayButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const GooglePayButtonNative = (0, react_native_1.requireNativeComponent)('GooglePayButton');
/**
 *  Google Pay Button Component
 *
 * @example
 * ```ts
 *  <GooglePayButton
 *    onPress={pay}
 *    style={styles.payButton}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
function GooglePayButton({ type = 'pay', onPress, disabled, ...props }) {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { disabled: disabled, activeOpacity: 1, onPress: onPress, style: disabled ? styles.disabled : {} },
        react_1.default.createElement(GooglePayButtonNative, { buttonType: type, ...props })));
}
exports.GooglePayButton = GooglePayButton;
const styles = react_native_1.StyleSheet.create({
    disabled: {
        opacity: 0.3,
    },
});
