var timer = document.getElementById('timer');
var title = document.getElementById('title');
var text = document.getElementById('text');
var fight = document.getElementById('fight');

var count = 9;
timer.innerHTML = count + '分';
title.innerHTML = 'たまごをお湯にいれる！';
text.innerHTML = '沸騰した状態を保ったまま' + '<br>' + '中火にして、おたまなどで' + '<br>' + '優しくたまごをいれる！' + '<br><br>' + '7分間ぐらいゆでる！';
var count_timer = -5;

function count_down() {
    if (count == 0) {
        clearInterval();
        title.innerHTML = '完成！！';
        title.style.color = 'red';
        text.innerHTML = '殻をむくと,とろ～り激うま半熟たまごの完成♪';
        fight.innerHTML = 'お疲れさま！！';
    } else if (count == 2) {
        title.innerHTML = 'たまごを氷水にいれる！！';
        text.innerHTML = 'たまごを氷水に入れる！！' + '<br>' + '~ポイント~' + '<br>' + 'ゆで上がったらすぐに冷水に入れることにより、余熱で火が入るのを防ぎます';
        fight.innerHTML = 'あと少しだよ！';
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
        if (count_timer >=59 ) {
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