var newWindowObj;
// 문자열을 통해 새로 열리는 윈도우 브라우저 창의 옵션을 설정할 수 있다.
var popUpOption =
  "top = 80, left = 80, width = 640, height = 1020, menubar = no, toolbar = no, resizable = no, scrollbars = no";

function openWindow() {}

function closeWindow() {
  newWindowObj.close();
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("clicked");
  newWindowObj = window.open("popUp.html", "Pops up!", popUpOption);
});
