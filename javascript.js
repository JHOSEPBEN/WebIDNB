function doGet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var programaSheet = sheet.getSheetByName("Programa");
    var anunciosSheet = sheet.getSheetByName("Anuncios");
  
    var programa = programaSheet.getDataRange().getValues();
    var anuncios = anunciosSheet.getDataRange().getValues();
  
    return ContentService.createTextOutput(JSON.stringify({
      programa: programa,
      anuncios: anuncios
    })).setMimeType(ContentService.MimeType.JSON);
  }
  