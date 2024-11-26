// 2. 创建秒杀结束时间（这里假设为当前时间加上10分钟作为示例）
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 10); // 设置为10分钟后结束

// 3. 获取秒杀结束时间与当前时间的毫秒数，并将其相减转换成秒杀剩余的秒数
function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
        // 5. 若已过期则停止秒杀的倒计时，并显示消息
        document.getElementById('countdown-time').style.display = 'none';
        document.getElementById('message').innerText = '秒杀已结束！';
        clearInterval(interval); // 停止倒计时
        return;
    }

    // 计算剩余的天数、小时、分钟和秒数
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. 以两位数字的格式将获取的时间显示到对应的位置
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// 每秒更新一次倒计时
const interval = setInterval(updateCountdown, 1000);

// 初始调用一次以确保倒计时立即开始
updateCountdown();