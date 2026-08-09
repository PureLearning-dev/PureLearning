---
title: 内容与写作说明
description: 本站内容分类、文件命名和持续整理方式
---

# 内容与写作说明

这套内容系统用两个维度组织信息：**主题负责检索，时间负责追踪变化**。

## 先判断内容属于哪里

| 你的内容 | 放置位置 | 典型文件 |
| --- | --- | --- |
| Python 概念、原理、长期有效的方法 | `docs/python/` | `python-core.md` |
| 机器学习、深度学习和 AI 应用专题 | `docs/ai/` | `neural-networks.md` |
| 某个项目的目标、架构、决策和复盘 | `docs/projects/` | `my-project.md` |
| 测试、打包、部署、工具和代码速查 | `docs/engineering/` | `python-engineering.md`、`snippets.md` |
| 今天学了什么、实验现场、阶段进度 | `docs/logs/` | `YYYY-MM-DD-slug.md` |
| 经过整理、可以独立阅读的技术文章 | `docs/blog/posts/` | `YYYY-MM-DD-slug.md` |
| 站点规则、作者、网站更新和技术说明 | `docs/about/` | `content-and-writing.md` |
| 图片、样式和附件 | `docs/assets/` | `images/diagram.png` |

## 推荐目录

```text
docs/
├── .nav.yml                # 只管理顶部栏目
├── index.md                # 首页和主要入口
├── python/                  # 稳定的 Python 知识
│   ├── .nav.yml             # Python 侧边栏
│   ├── index.md
│   ├── python-core.md
│   └── standard-library.md
├── ai/                      # 机器学习、深度学习与 AI 应用
│   ├── .nav.yml             # AI 侧边栏
│   ├── index.md
│   ├── fundamentals.md
│   ├── neural-networks.md
│   ├── pytorch-and-experiments.md
│   └── ai-applications.md
├── projects/                # 每个项目一份工程档案
│   ├── .nav.yml
│   ├── index.md
│   └── project-template.md
├── engineering/             # 跨主题工程实践与代码速查
│   ├── .nav.yml
│   ├── index.md
│   ├── python-engineering.md
│   └── snippets.md
├── logs/
│   ├── .nav.yml
│   ├── index.md             # 日志说明与入口
│   └── YYYY-MM-DD-slug.md   # 学习、实验与项目现场
├── blog/
│   ├── .nav.yml
│   ├── index.md             # 博客文章聚合页
│   └── posts/               # 博客插件管理的正式文章
├── about/                   # 作者、站点规则和更新历史
│   ├── .nav.yml
│   ├── index.md
│   └── roadmap.md           # 长期学习方向
└── assets/                  # 图片、附件、自定义样式
```

## 导航管理

根目录的 `.nav.yml` 只定义首页、Python、AI、项目实践等顶部栏目。每个内容目录中的 `.nav.yml` 只负责自己的侧边栏顺序和分组。

新增普通页面后，可以在目录的 `.nav.yml` 中明确放置，也可以使用 `"*"` 通配符自动收录其余页面。这样内容增长时不需要不断扩充根目录的 `mkdocs.yml`。

## 文件命名规则

- 文件名使用小写英文和连字符：`async-io.md`。
- 日志以日期开头：`2026-08-08-learning-reflection.md`。
- 标题使用清楚的问题或主题，不使用“笔记 1”“随手记”等模糊名称。
- 图片建议放进 `docs/assets/images/<topic>/`，名称说明其内容。

## 页面元数据

普通页面最少保留标题；需要时可增加描述和标签。标签会显示在页面上，并自动汇总到博客中的[标签导航](../blog/tags.md)。

```yaml
---
title: 生成器与迭代器
description: 理解惰性计算和 Python 迭代协议
tags:
  - Python
  - 迭代器
---
```

博客文章使用日期、分类和标签：

```yaml
---
date: 2026-08-08
categories:
  - 学习思考
tags:
  - Python
  - 调试
---
```

- **分类 `categories`**：用于博客文章的宽粒度归属，例如“Python 学习”“项目实践”或“AI 实验”。博客会为每个分类生成汇总页，一篇文章可以选择一个或多个分类。
- **标签 `tags`**：普通页面、日志和博客都可以使用，用来连接跨栏目主题，例如 `Python`、`PyTorch`、`测试`、`调试`、`LLM` 和 `项目复盘`。
- 分类保持稳定、数量克制；标签通常选择一到三个。不要把导航栏目、文章类型和每个关键词都写成标签。

## 记录一篇日志

日志是普通的文档页面，适合快速保存尚未完全整理的学习现场、实验结果和项目变化。在 `docs/logs/` 中创建以日期开头的 Markdown 文件，并填写标题和必要的标签：

```yaml
---
title: PyTorch 实验中的显存问题
tags:
  - PyTorch
  - 故障排查
---
```

日志不需要填写 `categories`，也不会进入博客的分类与归档页面。创建第一篇日志后，可以将页面加入 `docs/logs/.nav.yml`；日志数量增加后，再使用 `"*"` 通配符自动收录其余页面。

## 发布一篇博客

在 `docs/blog/posts/` 中创建一个 Markdown 文件，建议使用 `YYYY-MM-DD-slug.md` 命名。完整示例如下：

```markdown
---
date: 2026-08-09
categories:
  - AI 实验
tags:
  - Python
  - PyTorch
  - 模型评估
---

# 第一次 PyTorch 实验记录

开头简要说明这次实验的问题、环境和预期结果。

<!-- more -->

## 实验过程

记录代码、参数、现象和验证方式。

## 结果与下一步

说明得到的结论、失败尝试和需要继续确认的问题。
```

其中 `<!-- more -->` 之前的内容会作为博客列表中的摘要。保存后，博客插件会自动完成以下工作：

- 将文章加入博客首页；
- 按日期生成文章地址和时间归档；
- 根据 `categories` 加入分类页面；
- 参与分页和站内搜索；
- 通过 `tags` 与其他专题、项目或日志建立关联。

如果文章暂时不希望发布，可以在元数据中加入 `draft: true`。当前正式构建不会发布草稿，本地预览时仍可用于检查内容。

## 从记录到知识的工作流

```mermaid
flowchart LR
    A[日志：捕获现场] --> B[验证：代码或项目实践]
    B --> C[提炼：整理成专题或片段]
    C --> D[回链：关联项目和原始日志]
    D --> E[复查：修正过时结论]
```

1. **先记日志**：快速保留问题、尝试和结果。
2. **再做验证**：用可运行代码、测试或真实项目确认结论。
3. **提炼专题**：删除过程噪音，保留解释、示例和边界。
4. **建立链接**：专题链接到项目案例，项目链接到相关知识。
5. **定期维护**：在升级 Python 或依赖版本后复查相关页面。

## 什么时候拆分页面

出现以下任一情况时，考虑把内容拆成独立页面：

- 一个页面包含三个以上互不依赖的主题。
- 页面很长，目录已经不能快速定位。
- 某个小节会被多个项目反复引用。
- 主题需要独立维护版本或验证日期。

!!! success "保持可维护的关键"

    顶部导航只展示稳定领域。日志通过目录导航保存过程，博客插件自动汇总正式文章；其他语言只在具体专题、项目或代码标签页中按需引用。
