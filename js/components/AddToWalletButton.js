"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToWalletButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AddToWalletButtonNative = (0, react_native_1.requireNativeComponent)('AddToWalletButton');
/**
 *  Add to wallet button
 *
 * @example
 * ```ts
 *  <AddToWalletButton
 *    testEnv={true}
 *    style={styles.myButtonStyle}
 *    iOSButtonStyle="onLightBackground"
 *    cardDetails={{
 *      primaryAccountIdentifier: "V-123",
 *      name: "David Wallace",
 *      lastFour: "4242",
 *    }}
 *    ephemeralKey={myEphemeralKey} // This object is retrieved from your server. See https://stripe.com/docs/issuing/cards/digital-wallets?platform=react-native#update-your-backend
 *    onComplete={(error) => {
 *      Alert.alert(
 *        error ? error.code : 'Success',
 *        error
 *          ? error.message
 *          : 'Card was successfully added to the wallet.'
 *      );
 *    }}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
function AddToWalletButton({ onComplete, ...props }) {
    return (react_1.default.createElement(AddToWalletButtonNative, { ...props, onCompleteAction: (value) => onComplete(value.nativeEvent) }));
}
exports.AddToWalletButton = AddToWalletButton;
