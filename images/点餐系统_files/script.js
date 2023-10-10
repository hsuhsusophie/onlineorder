// 获取导航链接的元素
const navLinks = document.querySelectorAll('.navbar-nav a');

// 为每个导航链接添加点击事件监听器
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // 阻止默认的锚点跳转行为
        e.preventDefault();
        
        // 获取目标锚点的名称（去除#符号）
        const targetId = link.getAttribute('href').substring(1);

        // 获取目标锚点元素
        const targetSection = document.getElementById(targetId);

        // 滚动到目标锚点元素
        if (targetSection) {
            // 计算目标元素距离顶部的偏移量
            const offsetTop = targetSection.offsetTop;

            // 使用滚动动画平滑滚动到目标位置
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 获取链接和模态框元素
const openLoginModalLink = document.getElementById('openLoginModalLink');
const loginModal = document.getElementById('loginModal');
const closeLoginModalButton = document.getElementById('closeLoginModalButton');

// 打开登录模态框
openLoginModalLink.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止链接的默认行为
    loginModal.style.display = 'block';
});

// 关闭登录模态框
closeLoginModalButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// 点击模态框外部区域也可以关闭模态框
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryItems = document.querySelectorAll('.category-item');
    const orderList = document.getElementById('orderList');
    const totalPrice = document.getElementById('totalPrice');

    // 初始化订单和总价
    let order = [];
    let total = 0;

    // 为每个项目按钮添加点击事件监听器
    categoryBtns.forEach(categoryBtn => {
        categoryBtn.addEventListener('click', () => {
            const category = categoryBtn.getAttribute('data-category');

            // 隐藏所有项目的品项
            categoryItems.forEach(item => {
                item.style.display = 'none';
            });

            // 显示当前项目的品项
            const currentCategory = document.querySelector(`.category-item.${category}`);
            currentCategory.style.display = 'block';
        });
    });

    // 为“全部”按钮添加点击事件监听器
    const allBtn = document.querySelector('.category-btn[data-category="All"]');
    allBtn.addEventListener('click', () => {
        // 显示所有项目的品项
        categoryItems.forEach(item => {
            item.style.display = 'block';
        });
    });

    // 为每个品项按钮添加点击事件监听器
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.getAttribute('data-name');
            const itemPrice = parseFloat(item.getAttribute('data-price'));

            // 将品项添加到订单列表
            order.push({ name: itemName, price: itemPrice });
            const listItem = document.createElement('li');
            listItem.innerHTML = `${itemName}: $${itemPrice.toFixed(2)}`;
            orderList.appendChild(listItem);

            // 更新总价
            total += itemPrice;
            totalPrice.textContent = total.toFixed(2);
        });
    });
});
