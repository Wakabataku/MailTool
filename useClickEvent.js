$(function () {

    let copyAndClear = new ButtonEvent();
    //クリアボタンが押されたときのイベント
    $('#clear').on('click', function () {
        copyAndClear.clearButton("textarea", "inputForm");
    });

    //コピーボタンが押されたときのイベント
    $('#copy').on('click', function () {
        let copyId = $('#copy');
        copyAndClear.copyButton.call(copyId, "textarea", "inputForm");
    });

});