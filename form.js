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
    $('.tag').children().draggable({helper: 'clone'});

    //語句にカーソルが重なったとき縦線でなくす
    $('.tag').children().css("cursor", "pointer");

    
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
                
                // box.val(box.val() + selectedWord + '\n');
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
                // box.val(box.val() + selectedWord);
            }

            // box.val(box.val() + selectedWord + '\n');
        }
    });
    //語句がドロップされたときの処理
    // $('#mainForm').find('textarea').droppable({
    //     drop: function(event, ui){
    //         //ドラッグされた要素情報取得
    //         let selectedWord = ui.draggable.text();;
    //         $('textarea').append(selectedWord+ '\n');
    //         // console.log(selectedWord);
    //     }
    // })

});