var timer = document.getElementById('timer');
var title = document.getElementById('title');
var text = document.getElementById('text');
var fight = document.getElementById('fight');

var count = 15;
timer.innerHTML = count + '分';
title.innerHTML = 'たまごをお湯にいれる！';
text.innerHTML = '沸騰した状態を保ったまま' + '<br>' + '卵がぶつかって割れないように、火力は湯がボコボコ沸騰しない程度をキープする。' + '<br><br>' + '13分間ぐらいゆでる！';
var count_timer = -5;

function count_down() {
    if (count == 0) {
        clearInterval();
        title.innerHTML = '完成！！';
        title.style.color = 'red';
        text.innerHTML = '殻をむくと,あなた好みのハードたまごの完成♪';
        fight.innerHTML = 'お疲れさま！！';
    } else if (count == 2) {
        title.innerHTML = 'たまごを氷水にいれる！！';
        text.innerHTML = 'たまごを氷水に入れる！！' + '<br>' + '~ポイント~' + '<br>' + '殻と中身の間に水がたまり、殻と中身が収縮してズレるためむきやすくなります。';
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
        if (count_timer >= 59) {
            count = count - 1;
            timer.innerHTML = count + '分';
            count_timer = 0;
        } else {
            count_timer = count_timer + 1;
            console.log(count_timer);
        }
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