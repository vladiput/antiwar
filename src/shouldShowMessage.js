import {detectCountry} from "./detectCountry";
import {detectLanguage} from "./detectLanguage";
import { isDismissed } from "./dismiss";

export const shouldShowMessage = async showMsgAttr => {
    let attrs = showMsgAttr.replace(/\s+/g,'').split(',');
    if (attrs.includes('always')) {
        return true;
    }
    if (isDismissed()) {
        return false;
    }
    if (attrs.includes('lang')) {
        if (detectLanguage() === 'ru') {
            return true;
        }
    }
    if (attrs.includes('country')) {
        const country = await detectCountry();
        if (country === 'RU') {
            return true;
        }
    }
    return false;
}

