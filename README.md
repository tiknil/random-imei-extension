# random-imei-extension
A chrome extension to generate a random IMEI on the input fields that expect a valid IMEI. Useful for testing and debugginf purposes

To install:

- clone the repo locally

`git clone https://github.com/tiknil/random-imei-extension.git`

- Open chrome and go to `chrome://extensions/`

- Select `Load unpacked extension`

- Select the project folder on your device

- Enjoy!

![Extension in action GIF](https://github.com/tiknil/random-imei-extension/blob/master/sample.gif)

The extension will match any `input[type="text"]` in the page if its name or class contain the word `imei`

