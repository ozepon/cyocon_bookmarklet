// 起動時ミュート
var mute = document.getElementsByClassName('volumeMute')[0];
mute.click();

// // 時間
// var time = $('.timeBox')[0];
// var min = time.innerHTML.split(":")[0];
// console.log(min);

// var header = document.getElementsByClassName('mdMN15Ul')[0];
// var clock = document.createElement("div");
// clock.classList.add('timeBox');
// header.appendChild(clock);

// s.src = "http://example.jp/big.js"; /* あなたの書いたプログラム */
//   document.body.appendChild(s);

// videoが縦なので横にする 
var video_box = document.getElementsByClassName('videoBox')[0];
video_box.style.transform = "rotate(-90deg)";
video_box.style.position = "absolute";
video_box.style.left = "-22%";

var video = video_box.children[0];
video.style.width = "100%";
video.style.height = "178%";

// 棒読みちゃん
var tmp_comment = '';
$($('.mdMN15Scroll')[0]).bind('DOMSubtreeModified', function(e) {
  var comment = e.target.lastElementChild.innerText; 
  if(comment !== tmp_comment) {
    var synthes = new SpeechSynthesisUtterance(comment);
    synthes.lang = "ja-JP"
    speechSynthesis.speak(synthes);
  }
  tmp_comment = comment;
});
