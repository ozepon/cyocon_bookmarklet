  (function() {
    // 棒読み機能が動くか判定
    if(!window.SpeechSynthesisUtterance){
      alert('ブラウザが棒読み機能に対応してない(((;ꏿöꏿ;)))。あのイケメンに報告や！')
    }
    // 更新日をversionとする
    var update_date = '2018.3.13: 画面変更無効。初期値に固定';

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

    // // videoが縦なので横にする 
    // var video_styles = [
    //   {
    //     "transform":"rotate(-90deg)",
    //     "position":"absolute",
    //     "left":"-22%",
    //     "width":"100%",
    //     "height":"178%"
    //   },
    //   {
    //     "transform":"rotate(-270deg)",
    //     "position":"absolute",
    //     "left":"22%",
    //     "width":"100%",
    //     "height":"178%"
    //   }]
    // var screen_kurun_status = 0; 
    // var video_box = document.getElementsByClassName('videoBox')[0];
    // video_box.style.transform = video_styles[screen_kurun_status]["transform"];
    // video_box.style.position  = video_styles[screen_kurun_status]["position"];
    // video_box.style.left      = video_styles[screen_kurun_status]["left"];

    // var video = video_box.children[0];
    // video.style.width  = video_styles[screen_kurun_status]["width"];
    // video.style.height = video_styles[screen_kurun_status]["height"];

    var comment_body = $('.LyTop')
    comment_body.attr('style', 'position :relative;z-index:1;');

    // エンディングソング
    var youtube_ids = [
      'brUWAlQsWMg' // ホタルの光
    // , 'LL9kcGra9Rs' // また逢う日まで
    // , 'rU5yhk5_BMU' // できっこないをやらなくちゃ
    // , 'wEoyzisgokw' //　歩いて帰ろう
    // , '6lKTQbrM9RI' // 今夜はブギー・バック (音ちっさ！)
    // , 'tSJ2t2QHcxo' // raindow MONGOL800
    // , 'esSMW7kTkk0' // 夢叶う
    // , 'Dw2Qfwk3z9c' // カントリーロード
    // , 'YJSbFjqS8Ek' // colory starry ななひら

    // , '0hgL0TvbNqE' // にんげんっていいな、気付かないうちに・・・
    // , 'ApbW2XKwhPU' // 東京は夜の七時 -リオは朝の七時-
    // , '7CBaJFcqnPc' // PooRush - Junk (Official Music Video)
    // , 'DzIOuiVQUvQ' // ひるね姫 主題歌 デイ･ドリーム･ビリーバー 高畑充希
    // , 'etU18FB5Qew' // チームしゃちほこ - START / Team Syachihoko
    // , 'Nc_VuqmTgso' // 沖縄人トリセツ / 西野カナ（オトコ版）映画『ヒロイン失格』主題歌
    // , 'J5oytYDMWHA' // ヤバイTシャツ屋さん - 「あつまれ！パーティーピーポー」Music Video［メジャー版］

    // , '3cdvKw5dctA' // #吉木悠佳「Daybreak」
    // , 'yR0KgP7OrSw' // My Hair is Bad – 告白　(Official Music Video)
    // , 'VZLEOcYpCng' // sumika / 春風【Music Video 】
    // , 'jYoaGPEhaC0' // sumika / リグレット【Music Video】
    // , 'jliijW1RhM8' // ウソツキ - 一生分のラブレター（MV）
    // , 'ZpvYkTJZogw' // ウソツキ - 新木場発、銀河鉄道（MV）
    // , 'cAm_hgAfduA' // 04 Limited Sazabys「fiction」(Official Music Video)
    // , 'e3857A5uuCA' // コレサワ「あたしを彼女にしたいなら」【Music Video】
    // , '8xc20yXXRCI' // おいしくるメロンパン「シュガーサーフ」
    // , 'ds1fmhHXd0E' // バンドじゃないもん！／しゅっとこどっこい[MUSIC VIDEO]
    // , '_RRbVhobb9o' // BiSH / オーケストラ[OFFICIAL VIDEO]
    // , 'YPK23Sa9q5Y' // 【MV】まねきケチャ『きみわずらい』
    // , 'c3_1Vpi7RN0' // Party Rockets GT 8thシングル「START!!」MV #パティロケ
    // , '3zwWQ3xAiQg' // 熱苦しくてうっとおしい!? ベイビーレイズJAPAN「夜明けBrand New Days」【LIVE映像】
    // , 'OIS0UkIxcPM' // たこやきレインボー / RAINBOW～私は私やねんから～
    // , 'pOYXQBy5Pqw' // 私立恵比寿中学 『感情電車』Music Video
    // , '7LBUEYGfisQ' // METAFIVE - Don’t Move -Studio Live Version-
    // , '6LnDwc6BW28' // PARADISE【MV】RADIO FISH/Full ver.
    // , 'auofz0gr7C8' // WANIMA-1106 (OFFICIAL VIDEO)
    // , 'Pi42wUO4tVg' // Party Rockets GT 7thシングル「真夏のマジ☆ロケット」MV #パティロケ
    // , 'RXKsBPv9BMk' // おいしくるメロンパン「色水」
    // , '0M3HoC2uGhM' // My Hair is Bad - 真赤 (Official Music Video)
    // , 'dZRo0-cwob4' // Hump Back - 月まで (Official Music Video)
    // , 'NQJtWuLhtlA' // グッドモーニングアメリカ「空ばかり見ていた」PV
    // , 'X6JU6SkBOAU' // 平井 大 / Story of Our Life (Music video)
    // , 'tkfmSK2Xk0Q' // みそっかす　「アメリカと中国と静岡」PV
    // , 'Sl7B_7h2-OM' // 【Silent Siren】「チェリボム」MUSIC VIDEO full ver.【サイレントサイレン】
    // , 'NS-xd7f-W34' // わーすた / うるとらみらくるくるふぁいなるアルティメットチョコびーむ MUSIC VIDEO Short Ver.
    // , 'Qs9C5sVJuVs' // 岡崎体育 『Natural Lips』Music Video
    // , 'mzVzrnXxaeg' // 東京カランコロン / 16のbeat【MUSIC VIDEO&特典DVD映像】
    // , 'iD0Iw2WdejQ' // アイドルネッサンス「君の知らない物語」（MV）
    // , 'njHa9pefKvc' // アイドルネッサンス「ベステンダンク」（MV）
    // , 'E_xBlRnjG04' // アイドルネッサンス「Funny Bunny」（MV）
    // , 'XWT2MHwDg8g' // アイドルネッサンス「夏の決心」（MV）
    // , 'e1ys_U7oRaQ' // アイドルネッサンス「YOU」（MV）
    // , 'c5zj5vFOBoc' // アイドルネッサンス「初恋」（MV）
    // , 'NcXP133MUsE' // アイドルネッサンス「太陽と心臓」（MV）
    // , 'LMBo8dIXxQc' // アイドルネッサンス「１７才」（MV）
    // , 'brN4Asv7QHA' // アイドルネッサンス「前髪」（MV）
    // , 'iNR0Ee5tFao' // アイドルネッサンス「5センチメンタル」（MV）
    // , 'cS7NIpdhrpw' // アイドルネッサンス「交感ノート」（MV）
    // , 'cL81kpOCzh4' // アイドルネッサンス「Blue Love Letter」（Official Audio）＜映像＞ライブまとめ
    ];
    var hotaru_youtube = null;

    // 終了5分前になったら蛍の光を流す 
    function check_live_close() {
      var close_time = 55;
      if(close_time <= parseInt(time.innerHTML) && hotaru_youtube === null) {
        time.style.color = 'orange'
        var hotaru_wrap = $('<div></div>');
        hotaru_wrap.css('position','absolute');
        hotaru_wrap.css('right','8%');
        hotaru_wrap.css('top','70%');
        hotaru_wrap.css('width','350px');
        var youtube_id = youtube_ids[Math.floor(Math.random() * youtube_ids.length)];
        var ele_str = '<iframe width="100%" src=https://www.youtube.com/embed/' + youtube_id + '?loop=1&autoplay=1 frameborder="0" allowfullscreen></iframe>';
        hotaru_youtube = $(ele_str);
        hotaru_wrap.append(hotaru_youtube);

        comment_body.append(hotaru_wrap);
      }
    }

    // versionを表示
    var version = document.createElement('div');
    version.innerText = 'update: ' + update_date;
    version.style.position = 'absolute';
    version.style.right = '4%';
    version.style.top =  '96%';
    version.style.padding = '0.5em';
    comment_body.append(version);

    // twitterリンク
    var twitter_link = document.createElement('div');
    var twitter_link__a = document.createElement('a');
    twitter_link__a.href = 'https://twitter.com/ozepon';
    twitter_link__a.text = '棒読みさんのバグ報告はこちらまで';
    twitter_link__a.target = '_blank';
    twitter_link__a.style.color = '#b1b4b1';
    twitter_link.appendChild(twitter_link__a);
    twitter_link.style.position = 'absolute';
    twitter_link.style.right = '4%';
    twitter_link.style.borderRadius = '5em'
    twitter_link.style.padding = '0.5em';
    twitter_link.style.background = 'white';
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
    var target_count = Math.floor(Math.random(1)*40);

    // target_names
    var dandy_names = [];
    var geek_names = ['ISISかなめ'];
    var okinawa_names = ['さおりん'];
    var english_names = [];
    
    // 棒読みちゃん
    var tmp_comment = '';

    // namesにcommentから取得した名前を返却する
    function get_name_to_comment(comment) {
      var target_name = null;
      var target_info = comment.split(' '); 
      console.info(target_info);
      // ハートやフォローの場合の対応は対象外にしてtarget_countをインクリメントする
      // 判定方法はtarget_infoのlenghtがひとつの場合、コメント以外とみなす
      console.info(target_info.length);
      console.info(2 <= target_info.length);
      if(2 <= target_info.length) {
        console.info('set_target yes');
        var reg = new RegExp(/[\(||\)||\{||\}||\.||\\]/, 'g');
        target_name = target_info[0].replace(reg,'');
      }
      return target_name;
    }

    // target判定
    function set_target(comment) {
      var name = get_name_to_comment(comment);
      if (name === null) { return false;}

      if (/dandy/.test(comment)) {
        console.info('dandyに追加されました　＝＞' + name);
        dandy_names.push(name);

        //要素を削除する
        okinawa_names.some(function(v, i){
            if (v==name) okinawa_names.splice(i,1);    
        });
        geek_names.some(function(v, i){
          if (v==name) geek_names.splice(i,1);    
        });
        english_names.some(function(v, i){
          if (v==name) english_names.splice(i,1);    
        });
      } else if (/okinawa/.test(comment)) {
        console.info('okinawaに追加されました　＝＞' + name);
        okinawa_names.push(name);
        dandy_names.some(function(v, i){
            if (v==name) dandy_names.splice(i,1);    
        });
        geek_names.some(function(v, i){
          if (v==name) geek_names.splice(i,1);    
        });
        english_names.some(function(v, i){
          if (v==name) english_names.splice(i,1);    
        });
      } else if (/geek/.test(comment)) {
        console.info('geekに追加されました　＝＞' + name);
        geek_names.push(name);
        okinawa_names.some(function(v, i){
            if (v==name) okinawa_names.splice(i,1);    
        });
        dandy_names.some(function(v, i){
            if (v==name) dandy_names.splice(i,1);    
        });
        english_names.some(function(v, i){
          if (v==name) english_names.splice(i,1);    
        });
      } else if (/しょけん/.test(comment)) {
        // all　削除
        okinawa_names.some(function(v, i){
            if (v==name) okinawa_names.splice(i,1);    
        });
        dandy_names.some(function(v, i){
            if (v==name) dandy_names.splice(i,1);    
        });
        geek_names.some(function(v, i){
          if (v==name) geek_names.splice(i,1);    
        });
        english_names.some(function(v, i){
          if (v==name) english_names.splice(i,1);    
        });
      } else if (/english/.test(comment)) {
        console.info('englishに追加されました　＝＞' + name);
        english_names.push(name);
        okinawa_names.some(function(v, i){
            if (v==name) okinawa_names.splice(i,1);    
        });
        dandy_names.some(function(v, i){
            if (v==name) dandy_names.splice(i,1);    
        });
        geek_names.some(function(v, i){
          if (v==name) geek_names.splice(i,1);    
        });
      }
    }

    // 配列に渡された名前リストにコメントが前方一致するか判定
    // params names [Array<String>] 名前の配列
    // params comment [String]
    function is_names(names, comment) {
      var flg = false;
      names.forEach(function(val, index, arr){
        var reg = new RegExp('^' + val);
        if (reg.test(comment)) {
          flg = true; 
        }
      })
      return flg;
    }

    // 置換する文字列
    var replase_map = {'甲虫装機':'インセクター',
                      '🌻':'',
                      'www':'ワラワラワラ',
                      'JK':'女子校生',
                      '初見':'しょけん',
                      'hshs':'はすはす',
                      'prpr':'ぺろぺろ',
                      'wktk':'わくてか',
                      'デブ':'',
                      'でぶ':'',
                      'ブス':'',
                      'ぶす':'',
                      '桃白白': 'タオパイパイ',
                      'ちょこん':'しゅきしゅきラブリーちょこんたむ',
                      'Da-iCE':'ダイス',
                      '超介':'ちょうすけ',
                      'お大事':'おだいじ',
                      '陰陽師':'おんみょーじ',
                      'ノレネ':'だいちゃんまる',
                      'ヒロポン':'プロフェッサー・ヒロポン'
                    };

    $($('.mdMN15Scroll')[0]).bind('DOMSubtreeModified', function(e) {
      var comment = e.target.lastElementChild.innerText;
      // 読み方を変更する
      for ( var key in replase_map) {
        var reg = new RegExp(key, 'gi');
        comment = comment.replace(reg,replase_map[key]);
      }

      console.info("validation前" + comment);
      if(comment !== tmp_comment) {
        console.info("読み上げる言葉" + comment);
        var synthes = new SpeechSynthesisUtterance(comment);
        var voices = window.speechSynthesis.getVoices();
        synthes.voice = voices[20];
        synthes.lang = "ja-JP"
        // jpのvoiceをセットする
        for(var i = 0; i < voices.length; i++) {
          console.log(voices[i]['lang']); 
          if (voices[i]['lang'] === 'ja-JP') {
            synthes.voice = voices[i];   
            console.log(voices[i]['lang']);
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
          console.log('is english■■■■■■■■■■■■■■■■■■■■■■');
          synthes.lang = "en-US";
          // jpのvoiceをセットする
          for(var i = 0; i < voices.length; i++) {
            console.log(voices[i]['lang']); 
            if (voices[i]['lang'] === 'en-US') {
              synthes.voice = voices[i];   
              console.log(voices[i]['lang']);
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