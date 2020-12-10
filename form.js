$(function(){

    //タブを指定
    $('#tabs').tabs({
        selected: 0,
    });

    //クリックされたときにテキストエリアに入力
    $('.tag').children().on('click', function(){
        let word = $(this).text();
        $('textarea').append(word+'\n');
    });


    //語句をドラッグ可能にする
    $('.tag').children().draggable({helper: "clone"});

    //語句にカーソルが重なったとき縦線でなくす
    $('.tag').children().css("cursor", "pointer");

    //語句がドロップされたときの処理
    $('#mainForm').find('textarea').droppable({
        drop: function(event, ui){
            //ドラッグされた要素情報取得
            let selectedWord = ui.draggable.text();;
            $('textarea').append(selectedWord+ '\n');
            // console.log(selectedWord);
        }
    })

});