# Introduction
The intentieon of this project is to provide any Russian visitors with more reliable information about Russias attack on Ukraine. The creator of this project believes that such an attack would have been impossible to commence with a free media in the country.

Furthermore, the creator if this project believes that increasing Russophobia in the Western world is in dicatotr Putin's interests, otherwise his lies about the mean West thretening the existance of Russia would not match the reality the average Russian faces when visiting Western countries. So lets not surrender to Putin's wish, he should be left to die as the sad angry little bully he has become, with none of his last wishes coming to reliaty.

## Texts
Texts are written by me and translated to Russian using Google translate. If you are able to write better texts or know Russian, please provide a better original and/or translation :)
### Title
The truth about the war is hidden from you

Правда о войне от тебя скрыта

### Before video
Dear citizen of Russia, your president, mr Vladimir Putin has commenced a full-blown attack against the Republic of Ukraine, with fights ongoing every day. You may be told that this is just a special operation to "kill nazis and junkies from Kiyv". Till this day, hundreds of civilians in Ukraine have been killed due to Russia bombing residential areas, not to mention their soldiers. Furthermore, thousands of attacking Russian soldiers have lost their lives. Volodymyr Zelenskyi, the president of Ukraine tried to reach to you before the attack with an important message

Уважаемый гражданин России, ваш президент, господин Владимир Путин, начал полномасштабную атаку на Украинскую Республику, бои продолжаются каждый день. Вам могут сказать, что это просто спецоперация по «уничтожению нацистов и торчков из Киева». До сегодняшнего дня сотни мирных жителей Украины были убиты из-за российских бомбардировок жилых районов, не говоря уже об их солдатах. Кроме того, тысячи нападавших российских солдат погибли. Президент Украины Владимир Зеленский перед атакой пытался донести до вас важное сообщение

### After video
Your media is censored, because Putin fears that the letting you know the truth would bring his regime to an end. Do not believe what TASS writes, you can find more reliable news here: BBC, Meduza.io

If you can't open these, they are blocked to hide the truth. You can open the for example via a VPN-connection, TOR-network or Webproxy:

Finally some photos from the war

подвергаются цензуре, потому что Путин опасается, что если вы сообщите вам правду, его режиму придет конец. Не верьте тому, что пишет ТАСС, более достоверные новости можно найти здесь:

Если вы не можете их открыть, они заблокированы, чтобы скрыть правду. Можно открыть например через VPN-соединение, TOR-сеть или Webproxy

Наконец-то фото с войны


# Usage
To show this on your webpage, you just need to add two lines to your html:
```html
<script src="https://cdn.jsdelivr.net/gh/vladiput/antiwar@main/result/antiwar.js"></script>
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
