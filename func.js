$(function(){
    function clearButton(clearArea){
        $(`textarea[name=${clearArea}]`).val("");
        console.log('クリアー');
    }



    //クリアボタンが押されたとき
    $('#clear').on('click', function(){
        clearButton("inputForm");
    });
    // $('#clear').on('click', function(){
    //     $('textarea[name="inputForm"]').val("");
    // });

    //コピーボタンが押されたとき
    $('#copy').on('click', function(){
        //コピーする文章の取得
        let text = $('textarea[name="inputForm"]').val();
        //テキストエリアの作成
        let $textArea = $('<textarea></textarea>');
        //テキストエリアに文章挿入
        $textArea.text(text);
        //テキストエリアを挿入
        $(this).append($textArea);
        //テキストエリアを選択・コピー
        $textArea.select();
        document.execCommand('copy');
        //テキストエリアの削除
        $textArea.remove();
        //アラート文の表示
        // $('#copyAlert').show().delay(2000).fadeOut(400);
    });

    
});