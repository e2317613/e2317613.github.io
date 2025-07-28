console.log("こんにちは");
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("drawButton");
    const resultDiv = document.getElementById("result");
  
    button.addEventListener("click", () => {
    const rand = Math.random(); // 0以上1未満の乱数
    let result = "";
if (rand < 0.2) {
    result = "大吉 　いいことあるかも！";
  } else if (rand < 0.4) {
    result = "中吉　まあまあよさそう";
  } else if (rand < 0.6) {
    result = "小吉 よくもわるくもない…か？";
  } else if (rand < 0.8) {
    result = "凶 運悪いかも";
  } else {
    result = "大凶 頭上に注意！！";
  }
  resultDiv.textContent = `結果: ${result}`;
});
});