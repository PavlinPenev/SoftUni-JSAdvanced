function editElement(htmlElement, match, replacer) {
    let htmlStringValue = htmlElement.textContent;
    while(htmlStringValue.includes(match)) {
       htmlStringValue = htmlStringValue.replace(match, replacer);
    }
    htmlElement.textContent = htmlStringValue;
}