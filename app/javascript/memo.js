function memo() {
  const submit = document.getElementById("submit");
  // 発展4-5 投稿ボタンのid取得
  submit.addEventListener("click", (e) => {
  // 発展4-5 submitがクリックされたら実行
    const formData = new FormData(document.getElementById("form"));
    // FormDataは入力された値を取得できるオブジェクト
    const XHR = new XMLHttpRequest();
    // 発展4-5 非同期通信を実装するために必要なXMLHttpRequestのオブジェクトを生成
    XHR.open("POST", "/posts", true);
    // 発展4-5 リクエストの内容を記述（HTTPメソッドはPOST、パスは/posts、非同期通信はtrue）
    XHR.responseType = "json";
    // 発展4-5 データ形式をjsonに指定
    XHR.send(formData);
    // 発展4-5 formDataを送信
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      // 発展4-5 レスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list");
      // 発展4-5 HTMLを描画する場所であるlistの要素を取得
      const formText = document.getElementById("content");
      // 発展 4-5送信後、メッセージが入った入力フォームをリセットするためにcontentを取得しておく
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
        // 発展4-5 listに描画するhtml情報
      list.insertAdjacentHTML("afterend", HTML);
      // 発展4-5 listのafterend(直後)にHTMLを描画する
      formText.value = "";
      // 発展4-5 formText(フォーム)を空に
    };
    e.preventDefault();
    // 標準設定されているイベントを停止させる（clickはリロードされると同時に実行されている？（リロード後、イベントの結果が残っているように見えるのは残っているのではなくリロード時にもう一度行われたから）
  });
}
window.addEventListener("load", memo);
// 発展4-5 ページが読み込まれたときに関数memoを実行するという記述