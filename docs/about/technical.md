---
title: 技术说明
---

# 技术说明

本站是一个由 Markdown 文件生成的静态网站，不依赖数据库或内容管理后台。

## 技术组成

| 项目 | 使用内容 |
| --- | --- |
| 静态网站框架 | MkDocs 1.6.1 |
| 主题 | Material for MkDocs 9.7.7 |
| 导航管理 | Awesome Nav for MkDocs 3.3.0 |
| 内容格式 | Markdown |
| 站内搜索 | Material 内置客户端搜索 |
| 图表 | Mermaid |
| 字体 | Maple Mono NF CN |

## 本地预览

```bash
source .venv/bin/activate
mkdocs serve
```

## 构建检查

```bash
mkdocs build --strict
```

主题和插件配置集中在项目根目录的 `mkdocs.yml`，导航由 `docs/` 内各目录的 `.nav.yml` 分别管理，生成结果位于 `site/`。
