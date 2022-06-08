"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentlyFocusedInput = exports.unregisterInput = exports.registerInput = exports.focusInput = exports.unsupportedMethodMessage = exports.createError = exports.isAndroid = exports.isiOS = exports.shouldAttributeExpo = void 0;
const react_native_1 = require("react-native");
const TextInputState = require('react-native/Libraries/Components/TextInput/TextInputState');
/**
 * Determines whether or not this library is being used inside of
 * an "Expo" project by identifying if Expo's native module
 * infrastructure (react-native-unimodules AKA expo-modules) is available.
 */
const shouldAttributeExpo = () => {
    try {
        return !!react_native_1.NativeModules.NativeUnimoduleProxy;
    }
    catch {
        return false;
    }
};
exports.shouldAttributeExpo = shouldAttributeExpo;
exports.isiOS = react_native_1.Platform.OS === 'ios';
exports.isAndroid = react_native_1.Platform.OS === 'android';
function createError(error) {
    return {
        code: error.code,
        message: error.message,
        localizedMessage: error.localizedMessage,
        declineCode: error.declineCode,
        stripeErrorCode: error.stripeErrorCode,
        type: error.type,
    };
}
exports.createError = createError;
const unsupportedMethodMessage = (field) => `${field} method is not supported. Consider to upgrade react-native version to 0.63.x or higher`;
exports.unsupportedMethodMessage = unsupportedMethodMessage;
const focusInput = (ref) => {
    if ('focusInput' in TextInputState) {
        TextInputState.focusInput(ref);
    }
    else {
        if (__DEV__) {
            console.log((0, exports.unsupportedMethodMessage)('focusInput'));
        }
    }
};
exports.focusInput = focusInput;
const registerInput = (ref) => {
    if ('registerInput' in TextInputState) {
        TextInputState.registerInput(ref);
    }
    else {
        if (__DEV__) {
            console.log((0, exports.unsupportedMethodMessage)('registerInput'));
        }
    }
};
exports.registerInput = registerInput;
const unregisterInput = (ref) => {
    if ('unregisterInput' in TextInputState) {
        TextInputState.unregisterInput(ref);
    }
    else {
        if (__DEV__) {
            console.log((0, exports.unsupportedMethodMessage)('unregisterInput'));
        }
    }
};
exports.unregisterInput = unregisterInput;
const currentlyFocusedInput = () => {
    if ('currentlyFocusedInput' in TextInputState) {
        return TextInputState.currentlyFocusedInput();
    }
    else {
        if (__DEV__) {
            console.log((0, exports.unsupportedMethodMessage)('currentlyFocusedInput'));
        }
    }
};
exports.currentlyFocusedInput = currentlyFocusedInput;
