import 'regenerator-runtime/runtime'
import $ from 'jquery';
import {shouldShowMessage} from "./shouldShowMessage";

const shrink = window.innerWidth < 650;
const shrinkHalf = window.innerWidth < 800;

const newsWidth = shrink ? window.innerWidth : Math.max(Math.min(Math.round(window.innerWidth * 0.25), 450), 200);
const videoWidth = shrink ? window.innerWidth - 40 : window.innerWidth - newsWidth * (shrinkHalf ? 1 : 2)-60;

const parentContainerStyle = {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "background-color": "#000",
    "color": "#fff",
    "width": "100%",
    "height": "100%",
    "margin": 0,
    "padding": 0,
    "font-family": "Helvetica, Arial, sans-serif",
    "font-size": "12pt",
    "overflow-x": "none",
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

const closeMessage = container => {
    container.css('display', 'none');
    container.empty();
}

const createContent = parent => {

    const closeLink = $('<a />', {href: "#", text: 'close [x]', css: closeLinkStyle});
    closeLink.click(() => closeMessage(parent));
    const closeButton = $('<div />', {'css': closeButtonStyle}).append(closeLink);
    closeLink.css('color', 'fff');
    parent.append(closeButton);

    let russianNewsContainer = $('<div />', {'css': newsBoxStyle}).append(
        $('<iframe />', {
            "width": newsWidth,
            "height": shrinkHalf ? Math.round((window.innerHeight-70) * 0.5) : (window.innerHeight-70),
            "src": "https://graniru.org/Politics/World/Europe/Ukraine/",
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
        <h2>Stop the war</h2>
        <div>
Dear citizen of Russia, your president, mr Vladimir Putin has commenced a full-blown attack against the Republic of Ukraine, with fights ongoing every day. You may be told that this is just a special operation to "kill nazis and junkies from Kiyv". Till this day, hundreds of civilians in Ukraine have been killed due to Russia bombing residential areas, not to mention their soldiers. Furthermore, thousands of attacking Russian soldiers have lost their lives. Volodymyr Zelenskyi, the president of Ukraine tried to reach to you before the attack with an important message:
        </div>
        <iframe width="${videoWidth-40}" height="${Math.round((videoWidth-40)*0.5625)}""
        src="https://www.youtube.com/embed/Fwzb_JX7u04?&autoplay=1"frameborder="0"
        allowfullscreen></iframe>
        <div style="margin-top: 20px;">
Nobody wants this war, nobody threatens Russia. Ukraine is not controller by nazis and junkies. Do not believe what TASS writes, you can read more reliable news here: <a href="https://www.bbc.com/russian">https://www.bbc.com/russian</a> or <a href="https://meduza.io">https://meduza.io</a>. These are probably blocked in Russia due to Putin fearing that the truth would hurt his violent regieme, but you can use a simple webproxy to access the content: <a href="https://www.proxysite.com/">https://www.proxysite.com/</a>. You are the only ones who can end it, go out on the streets to protest! We have huge respect for every individual that is brave enough to oppose the war. Finally, just a few pictures of these "enemies" and "critical military infrastructure" Putin is attacking:
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
        console.log('show: ', showMsg);

        if(showMsg) {
            container.css(parentContainerStyle);
            createContent(container);
        }
    }
)