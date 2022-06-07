import PassKit
import StripeApplePay

class Mappers {
    class func createResult(_ key: String, _ value: NSDictionary?) -> NSDictionary {
        return [key: value ?? NSNull()]
    }

    class func mapToPKContactField(field: String) -> PKContactField {
        switch field {
        case "emailAddress": return PKContactField.emailAddress
        case "name": return PKContactField.name
        case "phoneNumber": return PKContactField.phoneNumber
        case "phoneticName": return PKContactField.phoneticName
        case "postalAddress": return PKContactField.postalAddress
        default: return PKContactField.name
        }
    }

    class func mapToPaymentSummaryItemType(type: String?) -> PKPaymentSummaryItemType {
        if let type = type {
            switch type {
            case "pending": return PKPaymentSummaryItemType.pending
            case "final": return PKPaymentSummaryItemType.final
            default: return PKPaymentSummaryItemType.final
            }
        }
        return PKPaymentSummaryItemType.final
    }

    class func mapToShippingMethods(shippingMethods: NSArray?) -> [PKShippingMethod] {
        var shippingMethodsList: [PKShippingMethod] = []

        if let methods = shippingMethods as? [[String : Any]] {
            for method in methods {
                let label = method["label"] as? String ?? ""
                let amount = NSDecimalNumber(string: method["amount"] as? String ?? "")
                let identifier = method["identifier"] as! String
                let detail = method["detail"] as? String ?? ""
                let type = Mappers.mapToPaymentSummaryItemType(type: method["type"] as? String)
                let pm = PKShippingMethod.init(label: label, amount: amount, type: type)
                pm.identifier = identifier
                pm.detail = detail
                shippingMethodsList.append(pm)
            }
        }

        return shippingMethodsList
    }

    class func mapFromShippingMethod(shippingMethod: PKShippingMethod) -> NSDictionary {
        let method: NSDictionary = [
            "detail": shippingMethod.detail ?? "",
            "identifier": shippingMethod.identifier ?? "",
            "amount": shippingMethod.amount.stringValue,
            "type": shippingMethod.type,
            "label": shippingMethod.label
        ]

        return method
    }

    class func mapFromShippingContact(shippingContact: PKContact) -> NSDictionary {
        let name: NSDictionary = [
            "familyName": shippingContact.name?.familyName ?? "",
            "namePrefix": shippingContact.name?.namePrefix ?? "",
            "nameSuffix": shippingContact.name?.nameSuffix ?? "",
            "givenName": shippingContact.name?.givenName ?? "",
            "middleName": shippingContact.name?.middleName ?? "",
            "nickname": shippingContact.name?.nickname ?? "",
        ]
        let contact: NSDictionary = [
            "emailAddress": shippingContact.emailAddress ?? "",
            "phoneNumber": shippingContact.phoneNumber?.stringValue ?? "",
            "name": name,
            "postalAddress": [
                "city": shippingContact.postalAddress?.city,
                "country": shippingContact.postalAddress?.country,
                "postalCode": shippingContact.postalAddress?.postalCode,
                "state": shippingContact.postalAddress?.state,
                "street": shippingContact.postalAddress?.street,
                "isoCountryCode": shippingContact.postalAddress?.isoCountryCode,
                "subAdministrativeArea": shippingContact.postalAddress?.subAdministrativeArea,
                "subLocality": shippingContact.postalAddress?.subLocality,
            ],
        ]

        return contact
    }

    class func mapAddressFields(_ addressFields: [String]) -> [String] {
        return addressFields.map {
            if ($0 == "street") {
                return CNPostalAddressStreetKey
            } else if ($0 == "city") {
                return CNPostalAddressCityKey
            } else if ($0 == "subAdministrativeArea") {
                return CNPostalAddressSubAdministrativeAreaKey
            } else if ($0 == "state") {
                return CNPostalAddressStateKey
            } else if ($0 == "postalCode") {
                return CNPostalAddressPostalCodeKey
            } else if ($0 == "country") {
                return CNPostalAddressCountryKey
            } else if ($0 == "countryCode") {
                return CNPostalAddressISOCountryCodeKey
            } else if ($0 == "subLocality") {
                return CNPostalAddressSubLocalityKey
            }
            return ""
        }
    }

    class func mapToReturnURL(urlScheme: String) -> String {
        return urlScheme + "://safepay"
    }

    class func convertDateToUnixTimestamp(date: Date?) -> String? {
        if let date = date {
            let value = date.timeIntervalSince1970 * 1000.0
            return String(format: "%.0f", value)
        }
        return nil
    }

    class func mapToPKAddPassButtonStyle(style: String?) -> PKAddPassButtonStyle {
        if let style = style {
            if (style == "onDarkBackground") {
                return .blackOutline
            }
        }
        return .black
    }
}
