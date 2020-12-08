$(function(){
    //語句をドラッグ可能にする
    $(".hand").draggable({helper: "clone"});

    //語句がドロップされたときの処理
    $(".main").droppable({
        //dropイベント
        drop: function(event, ui){
            
        }
    })
})