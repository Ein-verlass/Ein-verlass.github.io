# 动态论文管理系统

## 📋 概述

现在论文信息通过JavaScript动态加载，无需手动修改HTML文件。只需要更新JSON文件和添加文件夹即可。

## 🔧 如何添加新论文

### 1. 在Papers目录下创建新文件夹
```
Papers/
├── MM25_SimViews/
│   ├── paper.pdf
│   └── teaser.jpg
├── CHI25_Simulate/
│   ├── paper.pdf
│   └── teaser.jpg
└── 新论文文件夹/
    ├── paper.pdf
    └── teaser.png
```

### 2. 更新papers.json文件
在`papers.json`的`papers`数组中添加新论文信息：

```json
{
  "id": "新论文标识符",
  "title": "论文标题",
  "authors": [
    "作者1",
    "Mingyang Su",  // 你的名字会自动加粗
    "作者3"
  ],
  "conference": "会议名称",
  "year": 2025,
  "status": "accepted",  // accepted/submitted/published
  "published": false,    // true/false
  "official_link": "",   // 已出版论文的DOI链接
  "folder": "新论文文件夹",
  "teaser_image": "Papers/新论文文件夹/teaser.png",
  "pdf_path": "Papers/新论文文件夹/paper.pdf"
}
```

## 📝 字段说明

- **id**: 论文唯一标识符（建议使用会议+年份格式）
- **title**: 论文完整标题
- **authors**: 作者列表，包含"Mingyang Su"的作者会自动加粗
- **conference**: 会议名称（如"CHI", "MM", "SIGGRAPH Asia"）
- **year**: 发表年份
- **status**: 论文状态
  - `accepted`: 已接收
  - `submitted`: 已提交
  - `published`: 已出版
- **published**: 是否已出版（布尔值）
- **official_link**: 官方DOI链接（仅已出版论文需要）
- **folder**: Papers目录下的文件夹名
- **teaser_image**: teaser图片路径
- **pdf_path**: PDF文件路径

## 🎯 自动功能

- **排序**: 论文按年份和会议自动排序（最新的在前）
- **加粗**: 包含"Mingyang Su"的作者自动加粗显示
- **链接**: 已出版的论文自动显示"链接"按钮
- **状态**: 根据status字段自动显示状态信息

## 📁 文件结构

```
Personal Website/
├── index.html          # 主页面（无需修改论文部分）
├── styles.css          # 样式文件
├── script.js           # 基础JavaScript功能
├── load-papers.js      # 动态加载论文的脚本
├── papers.json         # 论文信息配置文件
├── Images/
│   └── avatar.jpg      # 头像
└── Papers/             # 论文文件夹
    ├── MM25_SimViews/
    ├── CHI25_Simulate/
    ├── SA23_Digital/
    └── Chinese CHI25_Embodied/
```

## 🚀 更新流程

1. **添加新论文**：
   - 在Papers目录创建文件夹
   - 添加paper.pdf和teaser图片
   - 更新papers.json

2. **修改现有论文**：
   - 直接编辑papers.json
   - 替换Papers文件夹中的文件

3. **删除论文**：
   - 从papers.json中删除对应条目
   - 删除Papers目录下的文件夹

## ⚠️ 注意事项

- 确保teaser图片文件名正确（支持.jpg, .png等格式）
- PDF文件名必须是`paper.pdf`
- 文件夹名称要与JSON中的folder字段一致
- 官方链接必须是完整的URL（包含https://）

## 🔄 自动更新

页面加载时会自动：
1. 读取papers.json文件
2. 按年份排序论文
3. 生成HTML结构
4. 应用样式和链接

无需手动修改HTML文件！
