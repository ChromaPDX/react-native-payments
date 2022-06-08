"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status["Succeeded"] = "Succeeded";
    Status["RequiresPaymentMethod"] = "RequiresPaymentMethod";
    Status["RequiresConfirmation"] = "RequiresConfirmation";
    Status["Canceled"] = "Canceled";
    Status["Processing"] = "Processing";
    Status["RequiresAction"] = "RequiresAction";
    Status["RequiresCapture"] = "RequiresCapture";
    Status["Unknown"] = "Unknown";
})(Status = exports.Status || (exports.Status = {}));
