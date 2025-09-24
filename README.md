# 个人学术主页

这是一个现代化的个人学术主页模板，专为研究人员、学者和博士生设计。使用纯HTML、CSS和JavaScript构建，支持GitHub Pages免费托管。

## ✨ 特性

- 🎨 **现代化设计** - 简洁美观的界面设计
- 📱 **完全响应式** - 支持所有设备尺寸
- 🌙 **暗色主题** - 支持明暗主题切换
- ⚡ **快速加载** - 优化的性能和加载速度
- 🔍 **SEO友好** - 搜索引擎优化
- 📊 **学术展示** - 专门为学术内容设计的布局

## 📋 包含内容

- 个人简介和联系方式
- 研究领域展示
- 发表论文列表
- 教学经历
- 社交媒体链接
- 简历下载功能

## 🚀 快速开始

### 1. Fork或克隆此仓库

```bash
git clone https://github.com/yourusername/your-academic-website.git
cd your-academic-website
```

### 2. 自定义内容

编辑 `index.html` 文件，替换以下内容：

- **个人信息**：姓名、职位、机构、联系方式
- **研究领域**：你的研究兴趣和专长
- **发表论文**：论文标题、作者、发表期刊/会议
- **教学经历**：课程名称、学期、机构
- **社交媒体**：GitHub、Google Scholar、LinkedIn等链接

### 3. 添加个人照片

将你的照片保存为 `photo.jpg` 或 `photo.png`，并更新HTML中的图片路径：

```html
<img src="photo.jpg" alt="你的照片">
```

### 4. 添加简历

将你的PDF简历保存为 `cv.pdf` 或更新下载链接。

### 5. 部署到GitHub Pages

1. 推送代码到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为源
4. 等待自动部署完成

## 🛠️ 自定义配置

### 修改颜色主题

在 `styles.css` 文件中的 `:root` 选择器中修改CSS变量：

```css
:root {
    --primary-color: #4F46E5;    /* 主色调 */
    --secondary-color: #06B6D4;  /* 辅助色 */
    --text-color: #1F2937;       /* 文字颜色 */
    --bg-color: #FFFFFF;         /* 背景颜色 */
}
```

### 添加新的部分

1. 在HTML中添加新的section
2. 在导航栏中添加对应的链接
3. 在CSS中添加相应的样式

### 修改字体

替换Google Fonts链接：

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

然后在CSS中更新字体族：

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📁 文件结构

```
your-academic-website/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript功能
├── _config.yml             # Jekyll配置
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions部署
├── README.md               # 说明文档
└── cv.pdf                  # 简历文件（需要添加）
```

## 🎯 使用建议

### 内容建议

1. **保持简洁**：突出最重要的信息
2. **定期更新**：及时更新论文和项目信息
3. **专业照片**：使用高质量的专业照片
4. **清晰联系**：确保联系方式准确且易于找到

### SEO优化

1. 在HTML的`<title>`和`<meta>`标签中使用关键词
2. 为图片添加alt属性
3. 使用语义化的HTML标签
4. 添加结构化数据标记

### 性能优化

1. 压缩图片文件
2. 使用CDN加载外部资源
3. 启用浏览器缓存
4. 定期清理无用代码

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代化样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体服务
- **GitHub Pages** - 免费托管

## 📚 参考资源

- [GitHub Pages文档](https://docs.github.com/cn/pages)
- [HTML5语义化标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
- [CSS Grid布局指南](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript最佳实践](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个模板！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 支持

如果你在使用过程中遇到问题，请：

1. 查看 [Issues](https://github.com/yourusername/your-academic-website/issues)
2. 创建新的Issue描述问题
3. 发送邮件到 your.email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个星标！