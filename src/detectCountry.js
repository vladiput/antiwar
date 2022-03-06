
const ipApi = () => 'https://api.ipify.org?format=json';
const ipDetailsApi = ipAddress => `https://www.iplocate.io/api/lookup/${ipAddress}`;

export const detectCountry = async () => {
    let ipAddress;
    try {
        let resp = await fetch(ipApi());
        resp = await resp.json();
        ipAddress = resp.ip;

        // Find country
        resp = await fetch(ipDetailsApi(ipAddress));
        resp = await resp.json();
        return resp.country_code;
    } catch (e) {
        console.log(e);
    }
}
