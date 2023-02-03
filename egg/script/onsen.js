//現在の月を取得する多分使わないやつ
// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// console.log(year);
// console.log(month);
// console.log(day);
// ここからが使うやつかも
var timer = document.getElementById('timer');
var title = document.getElementById('title');
var text = document.getElementById('text');
var fight = document.getElementById('fight');

var count = 12;
timer.innerHTML = count + '分';
title.innerHTML = 'お湯にたまごをいれる';
text.innerHTML = '沸騰してたお湯の火を止めて' + '<br><br>' + 'たまごをお湯にいれる！' + '<br><br>' + '１２分間放置！';
var count_timer = -5;

function count_down() {
    if (count == 0) {
        clearInterval(0);
        title.innerHTML = '完成！！';
        title.style.color = 'red';
        text.innerHTML = '卵を割ると、とろ～り激ウマ温泉卵の出来上がりです♪';
        fight.innerHTML = 'お疲れさま！！';
    } else if (count == 10) {
        fight.innerHTML = '残り１０分！！';
        if (count_timer >= 59) {
            count = count - 1;
            timer.innerHTML = count + '分';
            count_timer = 0;
        } else {
            count_timer = count_timer + 1;
            console.log(count_timer);
        }
    } else if (count == 5) {
        fight.innerHTML = '残り５分！！';
        if (count_timer >= 59) {
            count = count - 1;
            timer.innerHTML = count + '分';
            count_timer = 0;
        } else {
            count_timer = count_timer + 1;
            console.log(count_timer);
        }
    } else {
        fight.innerHTML = 'ファイト！';
        if (count_timer >= 59) {
            count = count - 1;
            timer.innerHTML = count + '分';
            count_timer = 0;
        } else {
            count_timer = count_timer + 1;
            console.log(count_timer);
        }
    }
}

window.onload = () => {
    setInterval("count_down()", 1000);
}