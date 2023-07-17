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
