# Usage
To show this on your webpage, you just need to add two lines to your html:
```html
<script src=""></script>
<div id="antiWarMessage" showTo="country,lang" />
```

showTo attribute defines who sees the message:
* country: Ip-address detected to be Russian
* lang: Language detected to be russian

These are evaluated as or, e.g. "country,lang" shows the message to anybody that either has a Russian IP-address, or browser language is set to Russian.

# Preview
You can preview the page by visiting http://htmlpreview.github.io/?https://github.com/vladiput/antiwar/blob/main/result/index.html

The preview page is conigured with showTo="always", so it shown to everybody.

# Contributing
Contributions are more than welcome. Following areas are most wanted:
* Reliable source of news in Russian
* UI design, communications to Russians

Please raise issues or more preferably pull requests.

## Development environment
You must have node installed: https://nodejs.org

To install dependencies, run:
```bash
$ npm install
```

We use Parcel for bundling, install it globally:
```
$ npm install -g parcel-bundler
```

## Running the test page
Src/index.html contains configuration which is always shown.

```bash
$ parcel src/index.html
```
Starts a development server where you can see the message shown.

## Testing
```bash
$ npm test
```