function listVoices() {
  // [START tts_list_voices]
  const textToSpeech = require('@google-cloud/text-to-speech');

  const client = new textToSpeech.TextToSpeechClient();

  client
    .listVoices({})
    .then(results => {
      const voices = results[0].voices;
      console.log(voices);

      console.log('Voices:');
      voices.forEach(voice => {
        console.log(`Name: ${voice.name}`);
        console.log(`  SSML Voice Gender: ${voice.ssmlGender}`);
        console.log(
          `  Natural Sample Rate Hertz: ${voice.naturalSampleRateHertz}`
        );
        console.log(`  Supported languages:`);
        voice.languageCodes.forEach(languageCode => {
          console.log(`    ${languageCode}`);
        });
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END tts_list_voices]
}

listVoices();
