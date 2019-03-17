(function() {
  // 棒読み機能が動くか判定
  if (!window.SpeechSynthesisUtterance) {
    alert(
      "ブラウザが棒読み機能に対応してない(((;ꏿöꏿ;)))。あのイケメンに報告や！"
    );
  }
  // 更新日をversionとする
  var update_date =
    "2019.03.17 [追加・変更] Voiceタイプ一括変換追加, Voiceタイプ見直し。 [削除]個別音声設定";

  // 起動時ミュート
  var mute = document.getElementsByClassName("volumeMute")[0];
  if (mute) {
    mute.click();
  }

  // voice type
  var voiceType = {
    normal: {
      pitch: 100,
      rate: 1.1,
      volume: 2
    },
    dandy: {
      pitch: -0.5,
      rate: 1.2,
      volume: 2.5
    },
    okinawa: {
      pitch: 2,
      rate: 0.5,
      volume: 0.5
    },
    geek: {
      pitch: -0.2,
      rate: 0.65,
      volume: 2.5
    }
  };

  // default voice
  var defaultVoice = "normal";
  // active voice
  var activeVoice = defaultVoice;

  // 時間
  var time = document.getElementsByClassName("timeBox")[0];
  if (time) {
    time.style.position = "absolute";
    time.style.zoom = "3";
    time.style.right = "0";
    var chat_bottom = document.getElementsByClassName("MdMN14Info")[0];
    chat_bottom.style.position = "relative";
    chat_bottom.appendChild(time);
  }

  var comment_body = $(".LyTop");
  comment_body.attr("style", "position :relative;z-index:1;");

  // エンディングソング
  var youtube_ids = [
    "brUWAlQsWMg" // ホタルの光
  ];
  var hotaru_youtube = null;

  function add_youtube() {
    var hotaru_wrap = $("<div></div>");
    hotaru_wrap.css("position", "absolute");
    hotaru_wrap.css("right", "37%");
    hotaru_wrap.css("top", "75%");
    hotaru_wrap.css("width", "350px");

    var message = $("<div>BGMに困ったらこちらの再生リストをどうぞ！</div>");
    message.css("background", "#0000009c");
    message.css("color", "white");
    message.css("font-size", ".8rem");
    message.css("text-indent", ".8rem");
    hotaru_wrap.append(message);

    var play_list_id =
      "?listType=playlist&list=PLRbcSF64EjLLB9KOxguIc_9W_c7EG9rGq";
    var ele_str =
      '<iframe width="100%" src=https://www.youtube.com/embed/' +
      play_list_id +
      '&loop=1&autoplay=0 frameborder="0" allowfullscreen></iframe>';
    hotaru_youtube = $(ele_str);
    hotaru_wrap.append(hotaru_youtube);

    comment_body.append(hotaru_wrap);
  }
  add_youtube();

  // versionを表示
  var version = document.createElement("div");
  version.innerText = "update: " + update_date;
  version.style.position = "absolute";
  version.style.right = "4%";
  version.style.top = "96%";
  version.style.padding = "0.5em";
  comment_body.append(version);

  // twitterリンク
  var twitter_link = document.createElement("div");
  var twitter_link__a = document.createElement("a");
  twitter_link__a.href = "https://twitter.com/ozepon";
  twitter_link__a.text = "棒読みさんのバグ報告はこちらまで";
  twitter_link__a.target = "_blank";
  twitter_link__a.style.color = "#b1b4b1";
  twitter_link.appendChild(twitter_link__a);
  twitter_link.style.position = "absolute";
  twitter_link.style.right = "4%";
  twitter_link.style.borderRadius = "5em";
  twitter_link.style.padding = "0.5em";
  twitter_link.style.background = "white";
  comment_body.append(twitter_link);

  // select voice typeエレメント
  var voice_select_button = document.createElement("div");
  var select_voice_ele = document.createElement("select");
  for (voice in voiceType) {
    var option = document.createElement("option");
    if (voice == defaultVoice) {
      voice.selected = true;
    }
    option.value = voice;
    option.text = voice;
    console.log(voice);
    select_voice_ele.append(option);
  }

  var voice_select_label = document.createElement("div");
  voice_select_label.innerText = "Select Voice";
  voice_select_button.append(voice_select_label);
  voice_select_button.append(select_voice_ele);

  voice_select_button.style.padding = ".5rem";
  voice_select_button.style.border = "1px solid";
  voice_select_button.style.position = "absolute";
  voice_select_button.style.top = "82px";
  voice_select_button.style.right = "465px";
  voice_select_button.style.zIndex = 100000;
  voice_select_button.style.height = "auto";
  voice_select_button.style.width = "auto";

  voice_select_button.style.textAlign = "center";

  voice_select_button.style.lineHeight = "2em";
  voice_select_button.style.borderRadius = "5px";
  voice_select_button.style.paddingLeft = "6px";
  // voice_select_button.classList.add("MdTxtReload");

  comment_body.append(voice_select_button);

  // 画面表示変更
  function change_screen_style(
    video_box,
    video,
    video_styles,
    screen_kurun_status
  ) {
    console.log("がめんへんこう");
    console.log(screen_kurun_status);
    // screen_kurun_status = screen_kurun_status == 1 ? 0 : 1;
    // console.log(screen_kurun_status)
    video_box.style.transform = video_styles[screen_kurun_status]["transform"];
    video_box.style.position = video_styles[screen_kurun_status]["position"];
    video_box.style.left = video_styles[screen_kurun_status]["left"];
    video.style.width = video_styles[screen_kurun_status]["width"];
    video.style.height = video_styles[screen_kurun_status]["height"];
  }

  // voiceが選択されたら発火
  // activeVoiceにselectされたものが設定される
  select_voice_ele.addEventListener(
    "change",
    function(e) {
      var index = e.target.selectedIndex;
      var value = e.target.options[index].value;
      activeVoice = value;

      console.log(`changeVoice => ${value}`);
    },
    false
  );

  // ターゲットになったらはんなりする
  var comment_count = 0;
  var target_count = Math.floor(Math.random(1) * 40);

  // 棒読みちゃん
  var tmp_comment = "";

  // namesにcommentから取得した名前を返却する
  function get_name_to_comment(comment) {
    var target_name = null;
    var target_info = comment.split(" ");
    console.info(target_info);
    // ハートやフォローの場合の対応は対象外にしてtarget_countをインクリメントする
    // 判定方法はtarget_infoのlenghtがひとつの場合、コメント以外とみなす
    console.info(target_info.length);
    console.info(2 <= target_info.length);
    if (2 <= target_info.length) {
      console.info("set_target yes");
      var reg = new RegExp(/[\(||\)||\{||\}||\.||\\]/, "g");
      target_name = target_info[0].replace(reg, "");
    }
    return target_name;
  }

  // ちょこん専用map
  var chocon_map = [
    "しゅきしゅきラブリーちょこんたむ",
    "ラブリーちょこん",
    "しゅきしゅきちょこん",
    "しゅき、ちょこん",
    "スーパーちょこん",
    "ちょこん",
    "ちょこんたむたむ",
    "ちょこんたむ",
    "ちょこん姉さん",
    "ちょこんちゃん",
    "しゅきしゅきラブリーしゅきしゅきちょこんしゅきしゅき",
    "ちょ、ちょ、ちょ、ちょーこーーーん",
    "ちょこーーーん"
  ];
  var chocon_num = Math.floor(Math.random() * chocon_map.length);

  // 置換する文字列
  var replase_map = {
    甲虫装機: "インセクター",
    "🌻": "",
    www: "ワラワラワラ",
    JK: "女子校生",
    初見: "しょけん",
    hshs: "はすはす",
    prpr: "ぺろぺろ",
    wktk: "わくてか",
    デブ: "",
    でぶ: "",
    ブス: "",
    ぶす: "",
    桃白白: "タオパイパイ",
    ちょこん: chocon_map[chocon_num],
    "Da-iCE": "ダイス",
    超介: "ちょうすけ",
    お大事: "おだいじ",
    陰陽師: "おんみょーじ",
    ノレネ: "だいちゃんまる",
    ヒロポン: "プロフェッサー・ヒロポン",
    MG: "マネージャー",
    神塚: "かずか"
  };

  $($(".mdMN15Scroll")[0]).bind("DOMSubtreeModified", function(e) {
    var comment = e.target.lastElementChild.innerText;
    // 読み方を変更する
    for (var key in replase_map) {
      var reg = new RegExp(key, "gi");

      comment = comment.replace(reg, replase_map[key]);
    }

    console.info("validation前" + comment);
    if (comment !== tmp_comment) {
      console.info("読み上げる言葉" + comment);
      var synthes = new SpeechSynthesisUtterance(comment);
      var voices = window.speechSynthesis.getVoices();
      synthes.voice = voices[20];
      synthes.lang = "ja-JP";
      // jpのvoiceをセットする
      for (var i = 0; i < voices.length; i++) {
        console.log(voices[i]["lang"]);
        if (voices[i]["lang"] === "ja-JP") {
          synthes.voice = voices[i];
          console.log(voices[i]["lang"]);
          break;
        }
      }

      // voiceセット
      voice = voiceType[activeVoice];
      if (voice) {
        synthes.pitch = voice.pitch;
        synthes.rate = voice.rate;
        synthes.volume = voice.volume;
      } else {
        // default
        synthes.pitch = 100;
        synthes.rate = 1.1;
        synthes.volume = 2;
      }
      speechSynthesis.speak(synthes);

      comment_count++;
    }
    tmp_comment = comment;
  });
})();
