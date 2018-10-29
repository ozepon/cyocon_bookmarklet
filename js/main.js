(function() {
  // 棒読み機能が動くか判定
  if (!window.SpeechSynthesisUtterance) {
    alert(
      "ブラウザが棒読み機能に対応してない(((;ꏿöꏿ;)))。あのイケメンに報告や！"
    );
  }
  // 更新日をversionとする
  var update_date = "2018.10.30 パパさん、MG対応";

  // 起動時ミュート
  var mute = document.getElementsByClassName("volumeMute")[0];
  mute.click();

  // 時間
  var time = document.getElementsByClassName("timeBox")[0];
  time.style.position = "absolute";
  time.style.zoom = "3";
  time.style.right = "0";
  var chat_bottom = document.getElementsByClassName("MdMN14Info")[0];
  chat_bottom.style.position = "relative";
  chat_bottom.appendChild(time);

  var comment_body = $(".LyTop");
  comment_body.attr("style", "position :relative;z-index:1;");

  // エンディングソング
  var youtube_ids = [
    "brUWAlQsWMg" // ホタルの光
  ];
  var hotaru_youtube = null;

  // 終了5分前になったら蛍の光を流す
  function check_live_close() {
    var close_time = 55;
    if (close_time <= parseInt(time.innerHTML) && hotaru_youtube === null) {
      time.style.color = "orange";
      var hotaru_wrap = $("<div></div>");
      hotaru_wrap.css("position", "absolute");
      hotaru_wrap.css("right", "8%");
      hotaru_wrap.css("top", "70%");
      hotaru_wrap.css("width", "350px");
      var youtube_id =
        youtube_ids[Math.floor(Math.random() * youtube_ids.length)];
      var ele_str =
        '<iframe width="100%" src=https://www.youtube.com/embed/' +
        youtube_id +
        '?loop=1&autoplay=1 frameborder="0" allowfullscreen></iframe>';
      hotaru_youtube = $(ele_str);
      hotaru_wrap.append(hotaru_youtube);

      comment_body.append(hotaru_wrap);
    }
  }

  function add_youtube() {
    var hotaru_wrap = $("<div></div>");
    hotaru_wrap.css("position", "absolute");
    hotaru_wrap.css("right", "8%");
    hotaru_wrap.css("top", "70%");
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

  // // screen_kurun_buttonボタン
  // var screen_kurun_button = document.createElement('div');
  // // start_button.innerText = '';
  // // start_button.style.background = 'rgb(0, 255, 133)';
  // screen_kurun_button.style.border = '1px solid'
  // screen_kurun_button.style.position = 'absolute';
  // screen_kurun_button.style.top = '20px';
  // screen_kurun_button.style.right = '464px';
  // screen_kurun_button.style.zIndex = 100000;
  // screen_kurun_button.style.width = '3em';
  // screen_kurun_button.style.textAlign = 'center';
  // screen_kurun_button.style.height = '2em';
  // screen_kurun_button.style.lineHeight = '2em';
  // screen_kurun_button.style.borderRadius = '5px';
  // screen_kurun_button.style.paddingLeft = '6px';
  // screen_kurun_button.classList.add('MdTxtReload');

  // comment_body.append(screen_kurun_button);

  // // 画面表示変更
  // function change_screen_style(video_box, video, video_styles, screen_kurun_status) {
  //   console.log("がめんへんこう");
  //   console.log(screen_kurun_status)
  //   // screen_kurun_status = screen_kurun_status == 1 ? 0 : 1;
  //   // console.log(screen_kurun_status)
  //   video_box.style.transform = video_styles[screen_kurun_status]["transform"];
  //   video_box.style.position  = video_styles[screen_kurun_status]["position"];
  //   video_box.style.left      = video_styles[screen_kurun_status]["left"];
  //   video.style.width  = video_styles[screen_kurun_status]["width"];
  //   video.style.height = video_styles[screen_kurun_status]["height"];
  // }
  // screen_kurun_button.addEventListener('click',function(){
  //   if((video_styles.length - 1)  <= screen_kurun_status){
  //     screen_kurun_status = 0;
  //   } else {
  //     screen_kurun_status++;
  //   }
  //   change_screen_style(video_box, video, video_styles, screen_kurun_status);
  // }, false);

  // ターゲットになったらはんなりする
  var comment_count = 0;
  var target_count = Math.floor(Math.random(1) * 40);

  // target_names
  var dandy_names = [];
  var geek_names = ["ISISかなめ"];
  var okinawa_names = ["さおりん"];
  var english_names = [];

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

  // target判定
  function set_target(comment) {
    var name = get_name_to_comment(comment);
    if (name === null) {
      return false;
    }

    if (/dandy/.test(comment)) {
      console.info("dandyに追加されました　＝＞" + name);
      dandy_names.push(name);

      //要素を削除する
      okinawa_names.some(function(v, i) {
        if (v == name) okinawa_names.splice(i, 1);
      });
      geek_names.some(function(v, i) {
        if (v == name) geek_names.splice(i, 1);
      });
      english_names.some(function(v, i) {
        if (v == name) english_names.splice(i, 1);
      });
    } else if (/okinawa/.test(comment)) {
      console.info("okinawaに追加されました　＝＞" + name);
      okinawa_names.push(name);
      dandy_names.some(function(v, i) {
        if (v == name) dandy_names.splice(i, 1);
      });
      geek_names.some(function(v, i) {
        if (v == name) geek_names.splice(i, 1);
      });
      english_names.some(function(v, i) {
        if (v == name) english_names.splice(i, 1);
      });
    } else if (/geek/.test(comment)) {
      console.info("geekに追加されました　＝＞" + name);
      geek_names.push(name);
      okinawa_names.some(function(v, i) {
        if (v == name) okinawa_names.splice(i, 1);
      });
      dandy_names.some(function(v, i) {
        if (v == name) dandy_names.splice(i, 1);
      });
      english_names.some(function(v, i) {
        if (v == name) english_names.splice(i, 1);
      });
    } else if (/しょけん/.test(comment)) {
      // all　削除
      okinawa_names.some(function(v, i) {
        if (v == name) okinawa_names.splice(i, 1);
      });
      dandy_names.some(function(v, i) {
        if (v == name) dandy_names.splice(i, 1);
      });
      geek_names.some(function(v, i) {
        if (v == name) geek_names.splice(i, 1);
      });
      english_names.some(function(v, i) {
        if (v == name) english_names.splice(i, 1);
      });
    } else if (/english/.test(comment)) {
      console.info("englishに追加されました　＝＞" + name);
      english_names.push(name);
      okinawa_names.some(function(v, i) {
        if (v == name) okinawa_names.splice(i, 1);
      });
      dandy_names.some(function(v, i) {
        if (v == name) dandy_names.splice(i, 1);
      });
      geek_names.some(function(v, i) {
        if (v == name) geek_names.splice(i, 1);
      });
    }
  }

  // 配列に渡された名前リストにコメントが前方一致するか判定
  // params names [Array<String>] 名前の配列
  // params comment [String]
  function is_names(names, comment) {
    var flg = false;
    names.forEach(function(val, index, arr) {
      var reg = new RegExp("^" + val);
      if (reg.test(comment)) {
        flg = true;
      }
    });
    return flg;
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

      synthes.pitch = 100;
      synthes.rate = 1.1;
      synthes.volume = 2;

      // 音声変更
      if (is_names(okinawa_names, comment)) {
        synthes.pitch = 2;
        synthes.rate = 0.5;
        synthes.volume = 0.5;
      } else if (is_names(geek_names, comment)) {
        synthes.pitch = -0.2;
        synthes.rate = 0.65;
        synthes.volume = 2.5;
      } else if (is_names(dandy_names, comment)) {
        synthes.pitch = -0.5;
        synthes.rate = 1.2;
        synthes.volume = 2.5;
      } else if (is_names(english_names, comment)) {
        console.log("is english■■■■■■■■■■■■■■■■■■■■■■");
        synthes.lang = "en-US";
        // jpのvoiceをセットする
        for (var i = 0; i < voices.length; i++) {
          console.log(voices[i]["lang"]);
          if (voices[i]["lang"] === "en-US") {
            synthes.voice = voices[i];
            console.log(voices[i]["lang"]);
            break;
          }
        }
      }
      speechSynthesis.speak(synthes);

      // taregetをセット
      set_target(comment);
      comment_count++;
    }
    tmp_comment = comment;
    // check_live_close();
  });
})();
