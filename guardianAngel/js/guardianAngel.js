$(function () {

    // 重新整理
    refreshBtn.onclick = () => { history.go(0); }

    //控制靜音圖隱藏
    $('#musicOn').hide();

    var flag = false; // 設定音樂撥放初始化
    // 點音樂圖片
    $('#musicBtn').on('click', function () {
        $('#musicOn').toggle();
        $('#musicOff').toggle();

        if (flag) {
            console.log(flag);
            musicPlayer.pause(); //music stop
            flag = false;
        } else {
            console.log(flag);
            musicPlayer.play(); //music play
            flag = true;
        }

    });

    $('#boxCard1').fadeOut(); //過去 製作淡出特效
    $('#boxCard2').fadeOut(); //現在 製作淡出特效
    $('#boxCard3').fadeOut(); //未來 製作淡出特效



    //此為說明按鈕上下頁
    var readMePage = 1; //預設為第一頁
    $('.readMePageBtn').click(function () {

        //判斷下一頁或上一下
        if (this.value == "1") {
            console.log(this);
            readMePage++;
        } else {
            console.log(this);
            readMePage--;
        }
        //判斷頁數
        switch (readMePage) {
            case 1:
                $('#readMeHeader').text("守護天使是什麼呢 !?");
                $('#readMeBody').prop('src', `./cardInfo/readMe${readMePage}.html`);
                $('#readMePreBtn').prop('hidden', true);
                $('#readMeNextBtn').prop('hidden', false);
                $('#readMeClose').prop('hidden', true);
                break;
            case 2:
                $('#readMeHeader').text("如何使用神諭占卜卡");
                $('#readMeBody').prop('src', `./cardInfo/readMe${readMePage}.html`);
                $('#readMePreBtn').prop('hidden', false);
                $('#readMeNextBtn').prop('hidden', false);
                $('#readMeClose').prop('hidden', true);
                break;
            case 3:
                $('#readMeHeader').text("牌陣 => 過去、現在、未來");
                $('#readMeBody').prop('src', `./cardInfo/readMe${readMePage}.html`);
                $('#readMePreBtn').prop('hidden', false);
                $('#readMeNextBtn').prop('hidden', false);
                $('#readMeClose').prop('hidden', true);
                break;
            case 4:
                $('#readMeHeader').text("起牌 & 禱告 & 提問");
                $('#readMeBody').prop('src', `./cardInfo/readMe${readMePage}.html`);
                $('#readMePreBtn').prop('hidden', false);
                $('#readMeNextBtn').prop('hidden', false);
                $('#readMeClose').prop('hidden', true);

                break;
            case 5:
                $('#readMeHeader').text('卡牌解讀與說明')
                $('#readMeBody').prop('src', `./cardInfo/readMe${readMePage}.html`);
                $('#readMePreBtn').prop('hidden', false);
                $('#readMeNextBtn').prop('hidden', true)
                $('#readMeClose').prop('hidden', false)

                break;

            default:
                break;
        }


    });

    var randNum1 = 1; //隨機過去 初始化
    var randNum2 = 1; //隨機現在 初始化
    var randNum3 = 1; //隨機未來 初始化

    // 1~44隨機選數字
    function getRandom() {
        return Math.floor(Math.random() * 44) + 1;
    };

    var clickStartCard = false;  //是否可亮牌
    //開始執行發牌
    $("#startBtn").click(function () {
        // 按鈕隱藏
        $("#startBtn").attr("hidden", "true")

        // 卡牌分半
        $(".row .d1").css({ "transform": "translate(350px,-200px)" });
        $(".row .d2").css({ "transform": "translate(-350px,200px)" });

        // 展開d1排組 
        setTimeout(function () {
            $(".row .d1").each(function (index) {
                $(this).css("transform", "translate(" + '' + (350 - index * 32) + "px,-200px)");
            });
        }, 1000);

        // 展開d2排組 
        setTimeout(function () {
            $(".row .d2").each(function (index) {
                $(this).css("transform", "translate(" + '' + ((-350) + index * 32) + "px,200px)");
            });
        }, 1000);

        clickStartCard = true; //可亮牌
    });



    // .d1區間 點擊執行亂數選牌
    $(".row .d1").click(function (index) {

        // 選擇過去
        if ($("#box1").val() == 0 && clickStartCard == true) {
            randNum1 = getRandom();
            $('#boxCard1').fadeIn(2000);
            $("#boxCard1").attr("src", "./img/card/card (" + "" + randNum1 + ").png");
            $(this).fadeOut(1500);
            $("#box1").val(1);
            // 選擇現在
        } else if ($("#box2").val() == 0 && clickStartCard == true) {
            randNum2 = getRandom();

            // 判斷是否前面抽過
            while (randNum2 == randNum1) {
                console.log("出現相同 randNum2 = " + randNum2 + " randNum1 = " + randNum1);
                randNum2 = getRandom();
                console.log("randNum2 : " + randNum2);
            }
            $('#boxCard2').fadeIn(2000);
            $("#boxCard2").attr("src", "./img/card/card (" + "" + randNum2 + ").png");
            $(this).fadeOut(1500);
            $("#box2").val(1);
            //選擇未來
        } else if ($("#box3").val() == 0 && clickStartCard == true) {
            randNum3 = getRandom();

            // 判斷是否前面抽過
            while (randNum3 == randNum1 || randNum3 == randNum2) {
                console.log("出現相同 randNum3 = " + randNum3 + " randNum2 = " + randNum2 + " randNum1 = " + randNum1);
                randNum3 = getRandom();
                console.log("randNum3 : " + randNum3);
            }
            $('#boxCard3').fadeIn(2000);
            $("#boxCard3").attr("src", "./img/card/card (" + "" + randNum3 + ").png");
            $(this).fadeOut(1500);
            $("#box3").val(1);
        }



    });
    // .d2區間 點擊執行亂數選牌
    $(".row .d2").click(function (index) {
        // 選擇過去
        if ($("#box1").val() == 0 && clickStartCard == true) {
            randNum1 = getRandom();
            console.log("randNum1 : " + randNum1);

            // 放入過去
            $('#boxCard1').fadeIn(2000);
            $("#boxCard1").attr("src", "./img/card/card (" + "" + randNum1 + ").png");
            $(this).fadeOut(1500);
            $("#box1").val(1);

            // 選擇現在
        } else if ($("#box2").val() == 0 && clickStartCard == true) {
            randNum2 = getRandom();
            console.log("randNum2 : " + randNum2);

            // 判斷是否前面抽過
            while (randNum2 == randNum1) {
                console.log("出現相同 randNum2 = " + randNum2 + " randNum1 = " + randNum1);
                randNum2 = getRandom();
                console.log("randNum2 : " + randNum2)
            }
            // 放入現在
            $('#boxCard2').fadeIn(2000);
            $("#boxCard2").attr("src", "./img/card/card (" + "" + randNum2 + ").png");
            $(this).fadeOut(1500);
            $("#box2").val(1);

            // 選擇未來
        } else if ($("#box3").val() == 0 && clickStartCard == true) {
            randNum3 = getRandom();
            console.log("randNum3 : " + randNum3);

            // 判斷是否前面抽過
            while (randNum3 == randNum1 || randNum3 == randNum2) {
                console.log("出現相同 randNum3 = " + randNum3 + " randNum2 = " + randNum2 + " randNum1 = " + randNum1);
                randNum3 = getRandom();
                console.log("randNum3 : " + randNum3);
            }
            // 放入未來
            $('#boxCard3').fadeIn(2000);
            $("#boxCard3").attr("src", "./img/card/card (" + "" + randNum3 + ").png");
            $(this).fadeOut(1500);
            $("#box3").val(1);

        }

    });

    // 點擊過去
    $(".modalCard1").click(function () {
        $("#cardTitle").text(" 過去 LAST ");
        $("#modalBoxCard").attr("src", "./img/card/card (" + "" + randNum1 + ").png");
        $("#cardT").attr("src", `./cardInfo/cardT${randNum1}.html`);
        $("#cardB").attr("src", `./cardInfo/cardB${randNum1}.html`);
        $("#cardF").attr("src", `./cardInfo/cardF${randNum1}.html`);

    });
    // 點擊現在
    $(".modalCard2").click(function () {
        $("#cardTitle").text(" 現在 Now ");
        $("#modalBoxCard").attr("src", "./img/card/card (" + "" + randNum2 + ").png");
        $("#cardT").attr("src", `./cardInfo/cardT${randNum2}.html`);
        $("#cardB").attr("src", `./cardInfo/cardB${randNum2}.html`);
        $("#cardF").attr("src", `./cardInfo/cardF${randNum2}.html`);
    });
    // 點擊未來
    $(".modalCard3").click(function () {
        $("#cardTitle").text(" 未來 Future ");
        $("#modalBoxCard").attr("src", "./img/card/card (" + "" + randNum3 + ").png");
        $("#cardT").attr("src", `./cardInfo/cardT${randNum3}.html`);
        $("#cardB").attr("src", `./cardInfo/cardB${randNum3}.html`);
        $("#cardF").attr("src", `./cardInfo/cardF${randNum3}.html`);
    });


    //設定webStroage
    $('#saveBtn').click(function () {
        var QuestionString = prompt("你所問之事為何?? : ", '限10以字內');
        // console.log(QuestionString);
        if (QuestionString != null) {

            var myQuestion = QuestionString.substring(0, 10);
            var checkData = localStorage.getItem('saveData');
            let storTimer = new Date();
            let dataDate = storTimer.toLocaleDateString(); //寫入時間
            console.log(checkData);
            if (checkData == null) {  //saveData都未建立
                console.log('1');
                var newData = [];
                newData[0] = [dataDate, myQuestion, randNum1, randNum2, randNum3];
                localStorage.setItem('saveData', JSON.stringify(newData)); //轉物件存入
                console.log(localStorage.getItem('saveData'));


            } else {  //saveData已建立

                var data1 = localStorage.getItem('saveData'); //回傳String 型別
                var saveData = JSON.parse(data1);  //轉成Array物件

                saveData[saveData.length] = [dataDate, myQuestion, randNum1, randNum2, randNum3];
                localStorage.setItem('saveData', JSON.stringify(saveData));
                console.log(localStorage.getItem('saveData'));

            }
            alert('儲存成功~');
            history.go(0); //重新整理
        } else {
            alert('此次未儲存~');
        }
    });

    $('#listClear').click(() => {
        localStorage.clear();
        history.go(0);
    });


    // 取得歷史紀錄
    var storageData = localStorage.getItem('saveData'); //回傳String 型別
    var historyData = JSON.parse(storageData);
    if (storageData != null) {

        var temp = "";
        for (var k = 0; k < historyData.length; k++) {
            temp += '<tr>'
            for (var j = 0; j < 5; j++) {
                if (j == 0 || j == 1) {
                    // index 0~1 放<td>
                    temp += `<td>${historyData[k][j]}</td>`;
                } else {
                    // index 2~4 放<img>
                    temp += `<td>
                            <img value='${historyData[k][j]}' src='./img/card/card (${historyData[k][j]}).png' data-toggle="modal" data-target="#myModal" type='button'>
                            </td>`;
                }
            }
            temp += '</tr>'

        }

        $('.listData').append(temp);
    }

    // 歷史紀錄 裡的卡牌解釋
    $('td>img').click(function () {
        console.log(this);
        var cardNum = $(this).attr('value');
        console.log(cardNum);
        $("#cardTitle").text("卡牌解釋");
        $("#modalBoxCard").attr("src", `./img/card/card (${cardNum}).png`);
        $("#cardT").attr("src", `./cardInfo/cardT${cardNum}.html`);
        $("#cardB").attr("src", `./cardInfo/cardB${cardNum}.html`);
        $("#cardF").attr("src", `./cardInfo/cardF${cardNum}.html`);


    });


});