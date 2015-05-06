module.exports = {
    AnahtarKelimeler:require('./ortak/anahtarKelimeler'),
    Ihale:require('./ortak/ihale'),
    Kalem:require('./ortak/kalem'),
    Kullanici:require('./ortak/kullanici'),
    Kurum:require('./ortak/kurum'),

    IhaleProviders:require('./providers/ihale/index'),
    Ekap:require('./providers/ihale/ekap'),
    SaglikBank:require('./providers/ihale/saglikbank'),

    LoginProviders:require('./providers/login/index'),
    ActiveDirectory:require('./providers/login/providerActiveDirectory'),
    Facebook:require('./providers/login/providerFacebook'),
    GooglePlus:require('./providers/login/providerGooglePlus'),
    Twitter:require('./providers/login/providerTwitter')
};