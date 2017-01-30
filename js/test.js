comment = "運営の都合により削除されました"

var synthes = new SpeechSynthesisUtterance(comment);
synthes.lang = "ja-JP"

// 一般
synthes.pitch = 1000;
synthes.rate = 1.3;
synthes.volume = 2;      

// さおりん
// synthes.pitch = 2;
// synthes.rate = 0.5;
// synthes.volume = 0.5;

// かなめ
// synthes.pitch = -0.2;
// synthes.rate = 0.65;
// synthes.volume = 2.5;

speechSynthesis.speak(synthes);

// =======================================================
// comment = "JKとjk" 
// key = 'JK';
// var reg = new RegExp(key, 'gi');
// comment = comment.replace(reg,"女子");