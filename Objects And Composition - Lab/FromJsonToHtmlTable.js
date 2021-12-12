function fromJSONToHTMLTable(array) {
    let jsonArrayResult = JSON.parse(array);
    let finalArray = ['<table> '];
    finalArray.push(makeHeaders(jsonArrayResult));
    jsonArrayResult.forEach(el => finalArray.push(makeRecords(el)));
    finalArray.push('</table>');
    console.log(finalArray.join('\n'));

    function makeHeaders(array) {
        let result = '   <tr>';
        Object.keys(array[0]).forEach(key => {
            result += `<th>${escapeFunc(key)}</th>`
        });
        result += '</tr>'
        return result;
    }

    function makeRecords(records) {
        let result = '   <tr>';
        Object.values(records).forEach(rec => {
            result += `<td>${escapeFunc(rec)}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeFunc(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
console.log('===================================');
console.log('===================================');
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);