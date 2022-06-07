require 'json'
pkg = JSON.parse(File.read("package.json"))

Pod::Spec.new do |s|
  s.name             = "ReactNativePayments"
  s.module_name      = s.name
  s.version          = pkg["version"]
  s.summary          = pkg["description"]
  s.requires_arc     = true
  s.license          = pkg["license"]
  s.homepage         = pkg["homepage"]
  s.author           = pkg["author"]
  s.source           = { :git => pkg["repository"] }
  s.source_files     = 'ios/*.{h,m,swift}'
  s.platform         = :ios, "14.0"

  s.frameworks       = 'Foundation', 'Security', 'WebKit', 'PassKit', 'Contacts', 'CoreLocation' 
  s.swift_version    = '5.0' 

  s.dependency 'React-Core'
  s.dependency 'StripeApplePay', '~> 22'

  s.pod_target_xcconfig = { "DEFINES_MODULE" => "YES" }
end
