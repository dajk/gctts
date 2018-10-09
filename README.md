# Google cloud text-to-speech - For Zex, my bro!

### How to install

Open the project directory in your terminal and run following commands:

```sh
$ npm install # install dependencies
```

### How to run

```sh
$ npm run compile # compile input.txt to output.mp3 (text to speech)
$ npm run play # open output.mp3
$ npm run list-voices # log list of voices in terminal
```

In order to change a voice, go to `src/index.js` and change these lines accordingly:

```js
voice: {
  languageCode: 'en-US',
  name: 'en-AU-Wavenet-D',
  ssmlGender: 'NEUTRAL',
  naturalSampleRateHertz: 15000
}
```
