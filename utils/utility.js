export async function fetchData(url) {
    try {
        let responseData = await fetch(url, {
            headers: {
                "x-apikey": "6038d03110f29b640ed97b20",
                "content-type": "application/json",
            },
        });
        return responseData.json();
    } catch (error) {
        return [];
    }
}
export function statusStyling(elementName, deviceStatus) {
    elementName.classList.add('status-bar');
    switch (deviceStatus.toLowerCase()) {
        case "allotted":
            elementName.classList.add('alloted-status-border');
            break;
        case "deprecated":
            elementName.classList.add('deprecated-status-border');
            break;
        case "out of order":
            elementName.classList.add('outoforder-status-border');
            break;
        case "broken":
            elementName.classList.add('broken-status-border');
            break;

        case "available":
            elementName.classList.add('available-status-border');
            break;
        default:
            elementName.classList.add('default-status');
            break;
    }
}
export function getUserName()
{
    const symbol=document.querySelector('.symbol');
    const letter=Cookies.get('LoggedIn').charAt(0);
    symbol.append(letter);
    const userName=document.querySelector('.user-name');
    userName.append(Cookies.get('LoggedIn'));
    
}


