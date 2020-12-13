$(function(){

    //タブを作成
    $('#tabs').tabs({
        //初めに開くタブを指定
        selected: 0,
    });

    //クリックされたときにテキストエリアに入力
    $('.tag').children().on('click', function(){
        let word = $(this).text();
        $('textarea').append(word+'\n');
    });


    //語句にカーソルが重なったとき縦線でなくす
    $('.tag').children().css("cursor", "pointer");

    //ワードをドラッグ・タップ移動可能にする
    $('.tag').children().draggable({
        helper: 'clone'
    });

    //ワードをテキストエリアにドロップしたときワード入力
    $('#mainForm').find('textarea').droppable({
        drop: function(event, ui){
            let seletedWord = ui.draggable.text();
            $('textarea').append(selectedWord + '\n');
        }
    });

});