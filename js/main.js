// 起動時ミュート
var mute = document.getElementsByClassName('volumeMute')[0];
mute.click();

// 時間
var time = document.getElementsByClassName('timeBox')[0];
time.style.position =  "absolute";
time.style.zoom = "3";
time.style.right = "0";
var chat_bottom = document.getElementsByClassName("MdMN14Info")[0];
chat_bottom.style.position = "relative";
chat_bottom.appendChild(time);

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