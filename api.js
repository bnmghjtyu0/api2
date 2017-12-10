// api查詢
// https://avgle.github.io/doc/#get-all-video-categories

// 宣告DOM
var list = document.querySelector('.list');
var send = document.querySelector('#send');
// 監聽
send.addEventListener('click',sendFunc,false)


// 分類
// var categories = 'https://api.avgle.com/v1/categories';
// var xhr = new XMLHttpRequest();
// xhr.open('get',categories,true);
// xhr.send(null);
// xhr.onload = function(){
//     var data = JSON.parse(xhr.responseText);
//     console.log(data.response.categories[0]);
// }

// 收集
// var collections = 'https://api.avgle.com/v1/collections/';
// var page = 0;
// var limit = '?limit=2';
// var xhr = new XMLHttpRequest();
// xhr.open('get',collections+page+limit,true);
// xhr.send(null);
// xhr.onload = function(){
//     var data = JSON.parse(xhr.responseText);
//     console.log(data.response.collections);
// }

// 影片
// var videos = 'https://api.avgle.com/v1/videos/';
// var page = 0;
// var limit = '?limit=2';
// var xhr = new XMLHttpRequest();
// xhr.open('get',videos+page+limit,true);
// xhr.send(null);
// xhr.onload = function(){
//     var data = JSON.parse(xhr.responseText);
//     var link = data.response.videos[0].video_url;
//     list.innerHTML = `<li><a href="${link}">${link}</a></li>`
// }

// 搜尋
// 麻里梨夏｜葵｜倉多｜佳苗
var _data;
var inputText;


function sendFunc(e) {
var query = document.querySelector('#input').value;
var search = 'https://api.avgle.com/v1/search/';
var page = 0;
var xhr = new XMLHttpRequest();
xhr.open('get',search+encodeURIComponent(query)+'/'+page,true);
xhr.send(null);
xhr.onload = function(){
    _data = JSON.parse(xhr.responseText);
    video(_data);
}

}

function video(){
    var str = '';
    video = _data.response.videos;
    console.log(video[0])
    for(var i=0; video.length > i ;i++) {
        str += `<li><a href="${video[i].video_url}" target="_blank">${video[i].title}</a></li>`
    }
    list.innerHTML = str;
}










// var AVGLE_GET_VIDEO_API_URL = 'https://api.avgle.com/v1/video';
// var vid = '5824';
// $.getJSON(AVGLE_GET_VIDEO_API_URL + vid, function (response) {
//     console.log(response);
//     if (response.success) {
//         var video = response.response.video;
//         doSomethingWith(video);
//     }
// })