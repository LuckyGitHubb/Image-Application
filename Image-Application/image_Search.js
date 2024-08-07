// API Name: Image Search
var Container2id = document.getElementById('container2id');
var Container3id = document.getElementById('container3id');
var Box = document.getElementById('box');
var Heading1 = document.getElementById('heading1');
var Heading3 = document.getElementById('heading3');
var Anchor = document.getElementById('anchor');
var Thumbnail = document.getElementById('thumbnail');
var Thumbnail1 = document.getElementById('thumbnail1');
var Thumbnail2 = document.getElementById('thumbnail2');
var Thumbnail3 = document.getElementById('thumbnail3');
var Thumbnail4 = document.getElementById('thumbnail4');
var Thumbnail5 = document.getElementById('thumbnail5');
var Thumbnail6 = document.getElementById('thumbnail6');
var Thumbnail7 = document.getElementById('thumbnail7');
var Thumbnail8 = document.getElementById('thumbnail8');
var Thumbnail9 = document.getElementById('thumbnail9');
var Thumbnail10 = document.getElementById('thumbnail10');
var Thumbnail11 = document.getElementById('thumbnail11');
var Thumbnail12 = document.getElementById('thumbnail12');
var Thumbnail13 = document.getElementById('thumbnail13');
var Thumbnail14 = document.getElementById('thumbnail14');
var Thumbnail15 = document.getElementById('thumbnail15');
var Thumbnail16 = document.getElementById('thumbnail16');
var Thumbnail17 = document.getElementById('thumbnail17');
var Thumbnail18 = document.getElementById('thumbnail18');
var Thumbnail19 = document.getElementById('thumbnail19');
var Thumbnail20 = document.getElementById('thumbnail20');

function showData(){
    Container2id.style.display='block';
    Container3id.style.display='block';
    var searchItems = document.getElementById('searchItem');
    var url = `https://image-search13.p.rapidapi.com/?q=${searchItems.value}`;
    var method = 'GET';
    apiCalling(url,method);
}
function apiCalling(url,method){
    var clientReq = new XMLHttpRequest;
    clientReq.open(method,url,true);
    clientReq.setRequestHeader('X-RapidAPI-Key','2e6d6f07e1msh0710d3331a717cbp1af0e5jsnc9bae4cd63ed');
    clientReq.setRequestHeader('X-RapidAPI-Host','image-search13.p.rapidapi.com');
    clientReq.onload=callBackFun;
    clientReq.send();
}
function callBackFun(){
    var response = this.responseText;
    var jsonData = JSON.parse(response);
    // Heading1.innerHTML = jsonData.request.query;
    Thumbnail.src = jsonData.response.images[0].thumbnail.url;
    Thumbnail1.src = jsonData.response.images[1].thumbnail.url;
    Thumbnail2.src = jsonData.response.images[2].thumbnail.url;
    Thumbnail3.src = jsonData.response.images[3].thumbnail.url;
    Thumbnail4.src = jsonData.response.images[4].thumbnail.url;
    Thumbnail5.src = jsonData.response.images[5].thumbnail.url;
    Thumbnail6.src = jsonData.response.images[6].thumbnail.url;
    Thumbnail7.src = jsonData.response.images[7].thumbnail.url;
    Thumbnail8.src = jsonData.response.images[8].thumbnail.url;
    Thumbnail9.src = jsonData.response.images[9].thumbnail.url;
    Thumbnail10.src = jsonData.response.images[10].thumbnail.url;
    Thumbnail11.src = jsonData.response.images[11].thumbnail.url;
    Thumbnail12.src = jsonData.response.images[12].thumbnail.url;
    Thumbnail13.src = jsonData.response.images[13].thumbnail.url;
    Thumbnail14.src = jsonData.response.images[14].thumbnail.url;
    Thumbnail15.src = jsonData.response.images[15].thumbnail.url;
    Thumbnail16.src = jsonData.response.images[16].thumbnail.url;
    Thumbnail17.src = jsonData.response.images[17].thumbnail.url;
    Thumbnail18.src = jsonData.response.images[18].thumbnail.url;
    Thumbnail19.src = jsonData.response.images[19].thumbnail.url;
    Thumbnail20.src = jsonData.response.images[20].thumbnail.url;

    // Heading3.innerHTML =
    // Anchor.innerHTML =
}