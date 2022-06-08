import PassKit
import StripeApplePay

class Mappers {
    class func mapFromPaymentMethod(_ paymentMethod: StripeAPI.PaymentMethod?) -> NSDictionary? {
        guard let paymentMethod = paymentMethod else {
            return nil
        }
        
        let card: NSDictionary = [
            "brand": paymentMethod.card!.brand,
            "country": paymentMethod.card!.country ?? "",
            "expYear": paymentMethod.card!.expYear,
            "expMonth": paymentMethod.card!.expMonth,
            "fingerprint": paymentMethod.card!.fingerprint ?? "",
            "funding": paymentMethod.card!.funding ?? "",
            "last4": paymentMethod.card!.last4 ?? ""
        ]
        let paymentMethodType = Mappers.mapPaymentMethodType(type: paymentMethod.type!)
        
        let billingDetails = Mappers.mapFromBillingDetails(billingDetails: paymentMethod.billingDetails)
        
        let method: NSDictionary = [
            "id": paymentMethod.id,
            "paymentMethodType": paymentMethodType,
            "livemode": paymentMethod.livemode,
            "customerId": paymentMethod.customerId ?? "",
            "billingDetails": billingDetails ?? [],
            "card": card,
            "fingerprint": paymentMethod.card?.fingerprint ?? "",
//            "threeDSecureUsage": paymentMethod.threeDSecureUsage
            //            "Ideal": [
            //                "bankIdentifierCode": paymentMethod.iDEAL?.bankIdentifierCode ?? "",
            //                "bankName": paymentMethod.iDEAL?.bankName ?? ""
            //            ],
            //            "Fpx": [
            //                "bank": paymentMethod.fpx?.bankIdentifierCode ?? "",
            //            ],
            //            "SepaDebit": sepaDebit,
            //            "BacsDebit": bacsDebit,
            //            "AuBecsDebit": auBECSDebit,
            //            "Sofort": [
            //                "country": paymentMethod.sofort?.country
            //            ],
            //            "Upi": [
            //                "vpa": paymentMethod.upi?.vpa
            //            ],
        ]
        return method
    }
    
    class func createResult(_ key: String, _ value: NSDictionary?) -> NSDictionary {
        return [key: value ?? NSNull()]
    }
    
    
    //    class func mapFromCardBrand(_ brand: StripeAPI.PaymentMethod.Card.Brand?) -> String {
    //        if let brand != nil {
    //            switch brand {
    //            case StripeAPI.PaymentMethod.Card.Brand.visa: return "Visa"
    //            case StripeAPI.PaymentMethod.Card.Brand.amex: return "AmericanExpress"
    //            case StripeAPI.PaymentMethod.Card.Brand.mastercard: return "MasterCard"
    //            case StripeAPI.PaymentMethod.Card.Brand.discover: return "Discover"
    //            case StripeAPI.PaymentMethod.Card.Brand.jcb: return "JCB"
    //            case StripeAPI.PaymentMethod.Card.Brand.diners: return "DinersClub"
    //            case StripeAPI.PaymentMethod.Card.Brand.unionpay: return "UnionPay"
    //            default: return "Unknown"
    //            }
    //        }
    //    }
    //
    
    
    class func mapPaymentMethodType(type: StripeAPI.PaymentMethod.PaymentMethodType) -> String {
        switch type {
        case StripeAPI.PaymentMethod.PaymentMethodType.card: return "Card"
        case StripeAPI.PaymentMethod.PaymentMethodType.unknown: return "Unknown"
        default: return "Unknown"
        }
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
    
    class func mapFromBillingDetails(billingDetails: StripeAPI.BillingDetails?) -> NSDictionary? {
        guard let billingDetails = billingDetails else {
            return nil
        }
        
        //        let address = billingDetails.address?.line1?.split(whereSeparator: \.isNewline)
        //        if (address?.indices.contains(0) == true) {
        //            billingDetails.address?.line1 = String(address?[0] ?? "")
        //        }
        //        if (address?.indices.contains(1) == true) {
        //            billingDetails.address?.line2 = String(address?[1] ?? "")
        //        }
        
        return [
            "email": billingDetails.email ?? "",
            "phone": billingDetails.phone ?? "",
            "name": billingDetails.name ?? "",
            "address": [
                "city": billingDetails.address?.city,
                "country": billingDetails.address?.country,
                "postalCode": billingDetails.address?.postalCode,
                "state": billingDetails.address?.state,
                "street": billingDetails.address?.line1
            ],
        ]
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
