# Google Sheet to HTML 
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fsheet-to-html&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://github.com/saffiullahfahim/sheet-to-html)           
## Init Google Apps Script
First we need to deploy google apps script. Copy code below and replace <Sheet Name> to which sheet you want to get data.
### Code.js
```js
function doGet() {
  const sheetName = "<Sheet Name>";

  try {
    let now = new Date();

    const ss = SpreadsheetApp.getActive();
    const sheet = ss.getSheetByName(sheetName);
    const range = sheet.getDataRange();
    const data = range.getValues();

    return ContentService.createTextOutput(
      JSON.stringify({
        data: data,
        time: new Date() - now,
      })
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        error: err.message,
      })
    );
  }
}
```

## Add Javascript in your html code
```html
<script src="https://saffiullahfahim.github.io/sheet-to-html/sheetToHtml.js"></script>
```

## Use Code and Get Data

```js
// init SheetToHtml
new SheetToHtml({
  scriptUrl: "..." // Google Apps Script Link i.e https://script.google.com/macros/s/AKfycbz3Cn6900c9_d9KK7rXUU4w_CuCd98wt87oCn25gUr7COjTVx1DeZ5gRH84BHEqRxhz/exec
  callBack: showData, // callback which run after get sheet data
});

function showData(sheetData) {
  let cellA1Data = sheetData.getData("A1"); // get data by A1 Notation
  let cellA2Data = sheetData.getData("A2"); // get A2 cell data
  let cellB2Data = sheetData.getRowColumn("B2"); // get row = 1, column = 1 data

  // ... next what you want with these data
}
```
