$(function(){

    //タブを指定
    $("#tabs").tabs();

    //クリックされたときにテキストエリアに入力
    $('#often').children().on('click', function(){
        let word = $(this).text();
        console.log(word);
        $('textarea').append(word+'\n');
    });
    //語句をドラッグ可能にする
    $('#often').children().draggable({helper: "clone"});

    //語句がドロップされたときの処理
    $("#main").find('textarea').droppable({
        drop: function(event, ui){
            //ドラッグされた要素情報取得
            let selectedWord = ui.draggable.text();;
            $('textarea').append(selectedWord+ '\n');
            // console.log(selectedWord);
        }
    })

    // //語句がドロップされたときの処理
    // $(".main").droppable({
    //     //dropイベント
    //     drop: function(event, ui){
    //         let selectedSrc = ui.draggable.attr("href");
    //     }
    // });
});