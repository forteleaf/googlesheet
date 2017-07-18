function getJSON(addr) {
  var point = {};
  var apiURL = 'https://openapi.naver.com/v1/map/geocode.xml?query='+addr;
  var option = {
    'method' : 'get',
    'headers' : {
      'X-Naver-Client-Id' : '------',
      'X-Naver-Client-Secret' : '------'
    }
  }
  var xml = UrlFetchApp.fetch(apiURL,option).getContentText();
  var doc = XmlService.parse(xml);
  var root = doc.getRootElement();

  var lng = root.getChild('items').getChild('item').getChild('point').getChild('x').getText();
  var lat = root.getChild('items').getChild('item').getChild('point').getChild('y').getText();

  point = { lng : lng, lat : lat};
  
//  point = { lng : "333.2323", lat : "87.3333"}; // test
  return point;
}

function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveCell(); // active cell
  var addr = cell.getValue(); 
  Logger.log(addr);
  var point = getJSON(addr);

  // 오른쪽 두개에 입력하기
  var cellright2 = cell.offset(0, 2);
  var cellright3 = cell.offset(0, 3);

  // 입력
  cellright2.setValue(point.lat);
  cellright3.setValue(point.lng);
  
  var val = cell.getValue();
  
  Logger.log(val);
  

}
