# 启动本地服务器解决CORS问题

## 问题说明
直接在浏览器中打开HTML文件会遇到CORS（跨域资源共享）错误，因为浏览器不允许file://协议访问本地JSON文件。

## 解决方案

### 方法1：使用Python（推荐）
在项目根目录运行：
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问：http://localhost:8000

### 方法2：使用Node.js
安装http-server：
```bash
npm install -g http-server
```

在项目根目录运行：
```bash
http-server -p 8000
```

然后访问：http://localhost:8000

### 方法3：使用VS Code Live Server
1. 安装VS Code的"Live Server"扩展
2. 右键点击index.html
3. 选择"Open with Live Server"

### 方法4：使用其他工具
- **PHP**: `php -S localhost:8000`
- **Ruby**: `ruby -run -e httpd . -p 8000`
- **Go**: `go run -m http.server 8000`

## 部署到GitHub Pages
部署到GitHub Pages后，CORS问题会自动解决，因为GitHub Pages使用HTTPS协议。

## 注意事项
- 确保papers.json文件在项目根目录
- 确保所有文件路径使用相对路径
- 本地开发时使用上述任一方法启动服务器
