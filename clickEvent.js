function buttonEvent(){};

buttonEvent.prototype = {
    constructor: buttonEvent,

    //クリアボタンが押されたとき
    clearButton: function(clearArea, buttonName){
        $(`${clearArea}[name=${buttonName}]`).val("");
    },

    //コピーボタンが押されたとき
    copyButton: function(copyArea, buttonName){
        //コピーする文章取得
        let textName = $(`${copyArea}[name=${buttonName}]`);
        let text = textName.val();
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
    },
};


