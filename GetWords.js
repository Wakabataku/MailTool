function GetWords(tagID, fileName) {

    this.tagID = tagID;
    this.fileName = fileName + '.txt';
};

GetWords.prototype = {
    constructor: GetWords,
    /*==============================================
          ファイルを読み込むgetWords()の定義
    ==============================================*/
    getWords: function () {
        //HTTPでファイルを読み込む
        let req = new XMLHttpRequest();
        //アクセスするファイルを指定
        req.open("get", this.fileName, true);
        //HTTPリクエストを発行
        req.send(null);

        //thisを関数内でつかうためにthat作成
        let that = this;
        //レスポンスが帰ってきたらconvertFiletoArray()を呼ぶ
        req.onload = function () {
            that.convertFiletoArray(req.responseText);
        };
    },
    /*==============================================================
    //読み込んだデータを二次元配列に変換する関数converFiletoArrayの定義
    ===============================================================*/
    convertFiletoArray: function (str) {
        let result = [];
        //改行を区切り文字として行を要素とした配列を生成
        let tmp = str.split("\n");

        //各行ごとカンマで区切った文字列を要素とした二次元配列を生成
        for (let i = 0; i < tmp.length; ++i) {
            result[i] = tmp[i].split(",");
        }

        //配列データresultをinsertHTMLにいれて、HTMLに組み込む
        this.insertHTML(result);
        // console.log(result[1][1]);
    },


    /*============================================================
        データを配列で保存したresult内の語句をhtmlにinsertする関数
    =============================================================*/
    insertHTML: function (result) {
        let target = '#tabs';
        //div要素の記述
        let insert = '<div id=' + this.tagID + ' class="tag">\n';
        for (let i = 0, len = result.length; i < len; ++i) {
            insert += '<a class="item" tyle="cursor: pointer;">'
                + result[i][1] + '</a>\n';
            // insert += '<a style="cursor: pointer;">'
            //     + result[i][1] + '</a>\n';
        }
        insert += '</div>\n';
        //タブの最後にappend
        $(target).last().append(insert);
        //div要素の子要素をドラッグ可能にする
        $('#' + this.tagID).children().draggable({
            helper: 'clone'
        });
        //append出来たらタブをリフレッシュ
        $('#tabs').tabs('refresh');

    },

};