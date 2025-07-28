console.log("jqueryを読み込みました。")

// セレクタ
let test_p_1=$("#test-p-1").text();
console.log(test_p_1);

let test_p_2=$(".test-p-2").text()
console.log(test_p_2);

let p_123=$("p").text();

cosole.log(p_123)

// ページ読み込み後に消しておく
$("#test-p-1").hide();

// メソッド
// toggle
function toggle(){

    // 表示・非表示
    $("#test-p-1").toggle();
}

function slide(){
    // スライドアップ・ダウン
    $(".w").slideToggle();

    
}

function fade(){
 // フェードイン＆ダウン
    $(".test-p-2").fadeToggle();

}

// スタイルシートと同じ
function color(){
     
    $("#test-p-1").css("color","red");
    $("#test-p-1").css("fontSinze","64px");


}

function customAnimate(){
    // JSON形式でプロパティ値を渡す
    $("#test-p-1").animate({
        "fontSize": "64px",
    });

    $("#test-p-1").animate({
        "fontSize": "64px",
    }).animate({
        "fontSize": "16px"
    });

}

// イベントハンドラ
// focusイベントを取得する
$("#input-1").on("focus", function(){
    console.log("インプットタグがフォーカスされました");
});

// clickイベント
$("h3").on("click", function(){
    console.log("h3タグがクリックされました");
    $(this).next().slideToggle();
});