        comment = "じょしこうせい、女子高生、女子校生"

        var synthes = new SpeechSynthesisUtterance(comment);
        synthes.lang = "ja-JP"
        synthes.pitch = 1000;
        synthes.rate = 1.2;
        synthes.volume = 1;
      
        speechSynthesis.speak(synthes);
        
        