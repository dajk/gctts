const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // Construct the request
  const request = {
    input: {
      text: data
    },
    // Select the language and SSML Voice Gender (optional)
    voice: {
      languageCode: 'en-US',
      name: 'en-AU-Wavenet-D',
      ssmlGender: 'NEUTRAL',
      naturalSampleRateHertz: 24000
    },
    // Select the type of audio encoding
    audioConfig: {
      audioEncoding: 'MP3'
    }
  };

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }

    // Write the binary audio content to a local file
    fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
      if (err) {
        console.error('ERROR:', err);
        return;
      }
      console.log('Audio content written to file: output.mp3');
    });
  });
});
