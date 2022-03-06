import 'regenerator-runtime/runtime'
import $ from 'jquery';
import {shouldShowMessage} from "./shouldShowMessage";
import { setDismissed } from './dismiss';

const shrink = window.innerWidth < 650;
const shrinkHalf = window.innerWidth < 800;

const newsWidth = shrink ? window.innerWidth : Math.max(Math.min(Math.round(window.innerWidth * 0.25), 450), 200);
const videoWidth = shrink ? window.innerWidth - 40 : window.innerWidth - newsWidth * (shrinkHalf ? 1 : 2)-60;

const textStyle = {
    "font-family": "Helvetica, Arial, sans-serif",
    "font-size": "12pt",
    "font-weight": "normal",
    "color": "#fff",
}

const titleStyle = {
    ...textStyle,
    "font-size": "18pt",
    "font-weight": "700",
}

const linkStyle = {
    ...textStyle,
    "font-weight": "bold",
    "text-decoration": "underline",
}

const parentContainerStyle = {
    ...textStyle,
    "z-index": "100000",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "bottom": "0",
    "right": "0",
    "background-color": "#000",
    "margin": 0,
    "padding": 0,
    "overflow-x": "hidden",
    "overflow-y": "scroll",
};

const closeButtonStyle = {
    "position": "absolute",
    "top": "20px",
    "right": "20px",
    "color": "#fff",
    "text-decoration": "none",
}

const closeLinkStyle = {
    ...textStyle,
    "color": "#fff !important",
    "text-decoration": "none",
}

const containerStyle = {
    "margin": "0",
    "padding": "0",
    "margin-top": "50px",
    "display": "flex",
    "justify-content": "space-between",
    "flex-direction": "row",
    "flex-wrap": "wrap",
}

const newsBoxStyle = {
    "width": `${newsWidth}px`,
    "padding": "0",
    "margin": "0",
    "border": 0,
}

const mainContentStyle = {
    "width": `${videoWidth}px`,
    "padding": "0",
    "margin": "20px",
}

const stringifyCss = (cssObj) => (
    Object.entries(cssObj).map(x=>x.join(":")).join(";")
)

const stringifiedTextStyle = stringifyCss(textStyle);
const stringifiedLinkStyle = stringifyCss(linkStyle);
const stringifiedTitleStyle = stringifyCss(titleStyle);

const closeMessage = (container, oldOverflowValue) => {
    container.css('display', 'none');
    container.empty();
    $('body').css('overflow', oldOverflowValue);
    setDismissed();
}

const createContent = (parent, oldOverflowValue) => {

    const closeLink = $('<a />', {href: "#", text: 'close [x]', css: closeLinkStyle});
    closeLink.click(() => closeMessage(parent, oldOverflowValue));
    const closeButton = $('<div />', {'css': closeButtonStyle}).append(closeLink);
    closeLink.css('color', 'fff');
    parent.append(closeButton);

    let russianNewsContainer = $('<div />', {'css': newsBoxStyle}).append(
        $('<iframe />', {
            "width": newsWidth,
            "height": shrinkHalf ? Math.round((window.innerHeight-70) * 0.5) : (window.innerHeight-70),
            "src": "https://meduza.io",
        })
    );

    let englishNewsContainer = $('<div />', {'css': newsBoxStyle}).append(
        $('<iframe />', {
            "width": newsWidth,
            "height": shrinkHalf ? Math.round((window.innerHeight-70) * 0.5) : (window.innerHeight-70),
            "src": "https://www.euronews.com/tag/ukraine",
        })
    );

    let mainContent = $('<div />', {'css': mainContentStyle}).html(`
        <h2 style="${stringifiedTitleStyle}">Правда о войне от тебя скрыта</h2>
        <div style="${stringifiedTextStyle}">
Уважаемый гражданин России, ваш президент, господин Владимир Путин, начал полномасштабную атаку на Украинскую Республику, бои продолжаются каждый день. Вам могут сказать, что это просто спецоперация по «уничтожению нацистов и торчков из Киева». До сегодняшнего дня сотни мирных жителей Украины были убиты из-за российских бомбардировок жилых районов, не говоря уже об их солдатах. Кроме того, тысячи нападавших российских солдат погибли. Президент Украины Владимир Зеленский перед атакой пытался донести до вас важное сообщение:
        </div>
        <iframe width="${videoWidth-40}" height="${Math.round((videoWidth-40)*0.5625)}""
        src="https://www.youtube.com/embed/Fwzb_JX7u04?&autoplay=1"frameborder="0"
        allowfullscreen style="margin-top: 20px;"></iframe>
        <div style="margin-top: 20px; ${stringifiedTextStyle}">
подвергаются цензуре, потому что Путин опасается, что если вы сообщите вам правду, его режиму придет конец. Не верьте тому, что пишет ТАСС, более достоверные новости можно найти здесь: <a href="https://www.bbc.com/russian" style="${stringifiedLinkStyle}">https://www.bbc.com/russian</a>, <a href="https://meduza.io" style="${stringifiedLinkStyle}">https://meduza.io</a>.</div>

<div style="margin-top: 20px; ${stringifiedTextStyle}">
Если вы не можете их открыть, они заблокированы, чтобы скрыть правду. Можно открыть например через VPN-соединение, TOR-сеть или Webproxy: <a href="https://www.proxysite.com/" style="${stringifiedLinkStyle}">https://www.proxysite.com/</a>.</div>

<div style="margin-top: 20px; ${stringifiedTextStyle}">
Наконец-то фото с войны:
        </div>
        <div>
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/68BA/production/_123401862_gettyimages-1238720000.jpg" width="${(videoWidth-40)}" />
            <img src="https://ichef.bbci.co.uk/news/976/mcs/media/images/76281000/jpg/_76281693_023167374-1.jpg"
             width="${(videoWidth-40)}" />
        </div>
    `)

    let contentContainer = $('<div />', {'css': containerStyle});
    if(shrink) {
        contentContainer.append(mainContent);
        contentContainer.append(russianNewsContainer);
        contentContainer.append(englishNewsContainer);
    } else if(shrinkHalf) {
        let newsContainer = $('<div />', {'css': newsBoxStyle});
        newsContainer.append(russianNewsContainer);
        newsContainer.append(englishNewsContainer);
        contentContainer.append(newsContainer);
        contentContainer.append(mainContent);
    } else {
        contentContainer.append(russianNewsContainer);
        contentContainer.append(mainContent);
        contentContainer.append(englishNewsContainer);
    }
    parent.append(contentContainer);
}

$(document).ready(async () => {

        const container = $('#antiWarMessage');
        const showMsg = await shouldShowMessage(container.attr('showTo'));

        if(showMsg) {
            const oldOverflowValue = $('body').css('overflow');
            $('body').css('overflow', 'hidden')
            container.css(parentContainerStyle);
            createContent(container, oldOverflowValue);
        }
    }
)
