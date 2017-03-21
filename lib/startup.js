if (Meteor.isClient) {
    // A store to use for the current language
    // Set language zh-CN, zh_cn
    setLanguage = function() {
      //http://www.jianshu.com/p/84b0a85f6ff3
      var language = window.navigator.userLanguage || window.navigator.language;
      language='zh-CN';
      // T9n.setLanguage(language);
      i18nLang = language.split('-')[0];
      i18nLang = 'zh';
      TAPi18n.setLanguage(i18nLang);
    }

    Meteor.startup(function() {
       setLanguage();
    })

}
