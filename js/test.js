// var comment = 'おはようございます';
var comment = 'Hello world';

var synthes = new SpeechSynthesisUtterance(comment);
var voices = window.speechSynthesis.getVoices();
// synthes.lang = "ja-JP"
synthes.lang = "en-US";
synthes.voice = voices[11];
// 一般
// synthes.pitch = 100;
// synthes.rate = 1.3;
// synthes.volume = 2;      

// さおりん
// synthes.pitch = 2;
// synthes.rate = 0.5;
// synthes.volume = 0.5;

// かなめ
// synthes.pitch = -0.2;
// synthes.rate = 0.65;
// synthes.volume = 2.5;

speechSynthesis.speak(synthes);