// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动导航
    initSmoothScrolling();
    
    // 更新活动导航项
    initActiveNavItem();
    
    // 动态加载论文信息
    loadPapers();
});

// 平滑滚动导航
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 计算目标位置，考虑导航栏高度
                const offsetTop = targetSection.offsetTop - 120;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 更新活动导航项
                updateActiveNavItem(this);
            }
        });
    });
}

// 更新活动导航项
function updateActiveNavItem(activeLink) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// 根据滚动位置更新活动导航项
function initActiveNavItem() {
    const sections = document.querySelectorAll('.content-section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // 更新导航链接的激活状态
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// 动态加载论文信息
async function loadPapers() {
    try {
        // 使用相对路径，避免CORS问题
        const response = await fetch('./papers.json');
        const data = await response.json();
        
        const researchList = document.querySelector('.research-list');
        if (!researchList) return;
        
        // 清空现有内容
        researchList.innerHTML = '';
        
        // 按index排序（小的在前面）
        const sortedPapers = data.papers.sort((a, b) => {
            return a.index - b.index;
        });
        
        // 生成每个论文的HTML
        sortedPapers.forEach(paper => {
            const paperElement = createPaperElement(paper);
            researchList.appendChild(paperElement);
        });
        
    } catch (error) {
        console.error('Error loading papers:', error);
        // 如果加载失败，显示错误信息
        const researchList = document.querySelector('.research-list');
        if (researchList) {
            researchList.innerHTML = '<p style="color: #666; font-style: italic;">论文信息加载中...</p>';
        }
    }
}

// 创建单个论文的HTML元素
function createPaperElement(paper) {
    const researchItem = document.createElement('div');
    researchItem.className = 'research-item';
    
    // 格式化作者列表，加粗自己的名字
    const authorsHtml = paper.authors.map(author => {
        if (author === 'Mingyang Su') {
            return `<strong>${author}</strong>`;
        }
        return author;
    }).join(', ');
    
    // 生成状态文本
    let statusText = `${paper.conference} '${paper.year.toString().slice(-2)}`;
    if (paper.is_poster) {
        statusText += ' Poster';
    }
    if (paper.status === 'accepted') {
        statusText += ' (Accepted)';
    }
    
    // 生成链接按钮
    let linksHtml = `<a href="${paper.pdf_path}" class="research-link">PDF</a>`;
    if (paper.published && paper.official_link) {
        linksHtml += `<a href="${paper.official_link}" class="research-link">链接</a>`;
    }
    
    researchItem.innerHTML = `
        <div class="research-teaser">
            <img src="${paper.teaser_image}" alt="${paper.title} Teaser">
        </div>
        <div class="research-content">
            <h4>${paper.title}</h4>
            <p class="authors">${authorsHtml}</p>
            <p class="venue">${statusText}</p>
            <div class="research-links">
                ${linksHtml}
            </div>
        </div>
    `;
    
    return researchItem;
}