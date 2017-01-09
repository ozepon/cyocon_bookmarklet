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

// 置換する文字列
var replase_map = {'甲虫装機':'インセクター',
                  '🌻':''};
                  
$($('.mdMN15Scroll')[0]).bind('DOMSubtreeModified', function(e) {
  var comment = e.target.lastElementChild.innerText;
  // 読み方を変更する
  for ( var key in replase_map) {
    console.log('key' + key);
    var reg = new RegExp(key, 'g');
    comment = comment.replace(reg,replase_map[key]);
  }

  console.log(comment);

  if(comment !== tmp_comment) {
    var synthes = new SpeechSynthesisUtterance(comment);
    synthes.lang = "ja-JP";
    synthes.pitch = 1;
    synthes.rate = 1.2;
    synthes.volume = 0.5;
    speechSynthesis.speak(synthes);
  }
  tmp_comment = comment;
});
