$(function(){

    //タブを作成
    $('#tabs').tabs({
        //初めに開くタブを指定
        selected: 0,
    });

    //クリックされたときにテキストエリアに入力
    // $('.tag').children().on('click', function(){
    //     let selectedWord = $(this).text();

    //     $('#inputForm').append(word+'\n');
    // });


    //語句にカーソルが重なったとき縦線でなくす
    $('.tag').children().css("cursor", "pointer");

    //ワードをドラッグ・タップ移動可能にする
    $('.tag').children().draggable({
        helper: 'clone'
    });

//ワードリストをテキストエリアにドロップしたときのイベント
$('#inputForm').droppable({
    //dropイベント
    drop: function(event, ui){
        let selectedWord = ui.draggable.text();
        let box = $('#inputForm');
        let judge = box.val().match(/\n+$/);

        if($('input[name=indent]:checked').val()=='indent'){
            //改行なしから改行ボタンが押されたときは改行されないため
            //前ステップの末尾に\nをつける必要がある
            if(judge || box.val()==""){
                box.val(box.val() + selectedWord);
            }else{
                box.val(box.val() + '\n' + selectedWord);
            }
        }
        if($('input[name=indent]:checked').val()=='noindent'){
            //改行から改行しないボタンが押されたときは
            //前ステップで入力された\nをはじく必要がある
            if(judge){
                box.val().replace(/\n+$/, "");
                box.val(box.val() + selectedWord);
            }else{
                box.val(box.val() + selectedWord);
            }
        }
    }
});

    // //ワードをテキストエリアにドロップしたときワード入力
    // $('#inputForm').droppable({
    //     drop: function(event, ui){
    //         let selectedWord = ui.draggable.text();
    //         let box = $('#inputForm');

    //         box.val(box.val() + selectedWord + '\n');
    //         //下の形では、ユーザが入力した後appendできなくなる
    //         // $('textarea').append(selectedWord + '\n');
    //     }
    // });

});