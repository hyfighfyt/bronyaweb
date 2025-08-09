// 模拟 item.json 数据（直接内嵌）
const data = [
    {
     "image": "/bronyaweb/img/fjwy.jpg",

        "it_name": "风纪委员会梦见女淫魔吗？ （pc）",
        "it_Introduce": "https://pan.baidu.com/s/1-VwFuXtslKC8YhQAIw-KLw?pwd=0721 提取码: 0721 "
    },
    {
        "image": "/bronyaweb/img/ywlc.jpg（pc）",
        "it_name": "暴露吧！野外露○直播",
        "it_Introduce": "https://pan.baidu.com/s/1CzA5PDK3JW9DopZqK3ZWmw?pwd=0721 提取码: 0721\n解压码：0d000721 "
    },
    {
        "image": "/bronyaweb/img/img3.jpg",
        "it_name": "资源三",
        "it_Introduce": "这是第三个资源的介绍。"
    }
];

// 切换导航栏内容
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // 切换 tab 内容
        let target = link.getAttribute('href').substring(1);
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');

        // 高亮当前导航
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// 创建卡片
let container = document.getElementById('item-list');
data.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('item');

    let img = document.createElement('img');
    img.src = item.image;
    img.alt = item.it_name;
    img.onerror = () => { img.src = "/bronyaweb/img/error.png"; }; // 加载失败时替换图片

    let name = document.createElement('h3');
    name.textContent = item.it_name;

    div.appendChild(img);
    div.appendChild(name);

    // 点击卡片弹出详细信息
    div.addEventListener('click', () => {
        showPopup(item);
    });

    container.appendChild(div);
});

// 弹出框
function showPopup(item) {
    // 如果已存在弹窗先删除
    let oldPopup = document.getElementById('popup');
    if (oldPopup) oldPopup.remove();

    let popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-btn">&times;</span>
            <img src="${item.image}" alt="${item.it_name}" onerror="this.src='/bronyaweb/img/error.png'">
            <h2>${item.it_name}</h2>
            <p>${item.it_Introduce}</p>
        </div>
    `;
    document.body.appendChild(popup);

    // 关闭按钮事件
    popup.querySelector('.close-btn').addEventListener('click', () => {
        popup.remove();
    });

    // 点击背景关闭
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    });
}
