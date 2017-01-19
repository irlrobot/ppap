var Alexa = require('alexa-sdk');
  APP_ID = "amzn1.ask.skill.8ad7202f-cdfc-4771-9901-5e5be169ef86";
  SKILL_NAME = "Pen Pineapple Apple Pen";
  enUsHandlers = require('./handlers/en-us.handler');
  lyrics = require('./modules/lyrics');

exports.handler = function(event, context, callback) {
  console.log("Starting PPAP...");
  console.log("Intent is:  " + event.request.intent);
  var alexa = Alexa.handler(event, context);
  var locale = event.request.locale;
  console.log("Locale is:  " + locale);
  alexa.appId = APP_ID;
  if (locale == 'en-US') {
    console.log("Registering en-us.handler...");
    alexa.registerHandlers(enUsHandlers);
  } else {
    console.log("Unsupported locale!");
  }
  alexa.execute();
};
