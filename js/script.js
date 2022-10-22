'use strict';

window.alert('いらっしゃいませー')

const lottery = () => {
  let flag = Math.floor(Math.random() * 5);
  if(flag <= 3){
    console.log(flag);
    document.getElementById('result').textContent = '残念...ハズレです';
  }
  else {
    document.getElementById('result').textContent = 'おめでとう！当たり！！';
    console.log(flag);
  }
};

function buttonClick() {
  document.getElementById('result').textContent = '抽選中...';
  setTimeout(lottery, 2000)
}