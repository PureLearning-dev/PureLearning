# Python 学习手册

一个围绕 Python 语言、工程实践、项目与 AI 的个人知识库。不是教程，也不是笔记汇总，而是持续记录「我是怎么弄明白的」以及「弄明白之后又推翻了自己哪些结论」。

## 为什么这样组织

大多数笔记仓库的问题不是内容太少，而是结论离开上下文之后没法再用。这里用两个维度来组织信息：

- **主题负责检索**：Python、AI、工程实践、项目档案各自独立成区，每篇只讲清楚一件事。
- **时间负责追踪变化**：日志保留学习现场和实验过程，博客保留整理后的完整文章，专题保留经得起反复使用的结论。

不追求一次写对。允许旧结论被修正，也保留「当初为什么会那样想」的线索。

## 内容地图

| 目录 | 放什么 |
| --- | --- |
| `docs/python/` | Python 语言核心、标准库、稳定的长期理解 |
| `docs/ai/` | 机器学习基础、神经网络、PyTorch 实验、AI 应用 |
| `docs/engineering/` | 测试、类型、打包、部署、可复用的代码片段 |
| `docs/projects/` | 每个项目的目标、技术决策、故障记录、复盘 |
| `docs/blog/posts/` | 从日志和实践中整理出来的完整文章 |
| `docs/logs/` | 还在进行中的学习现场、实验记录、阶段进度 |
| `docs/about/` | 作者、路线图、网站更新历史、内容写作约定 |

日志先捕获现场。用代码或项目验证之后，提炼成专题或博客。项目做完了回头看，旧的结论不对就改。

## 本地运行

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

浏览器打开 `http://127.0.0.1:8000`，修改内容后自动刷新。

## 构建

```bash
mkdocs build --strict
```

`--strict` 会在遇到死链、缺失页面时报错退出，和 CI 中的检查一致。生成的 `site/` 目录已被 Git 忽略。

## 自动部署

推送到 `main` 分支后，GitHub Actions 自动构建并发布到 `https://purelearning-dev.github.io/PythonGuide/`。

## 新增内容

- Python 专题放 `docs/python/`，AI 专题放 `docs/ai/`，项目档案放 `docs/projects/`
- 代码片段放 `docs/engineering/snippets.md`，内容多了再拆成独立文件
- 学习现场和项目进展放 `docs/logs/`，文件名用 `YYYY-MM-DD-slug.md`
- 整理完成的文章放 `docs/blog/posts/`，同样用日期前缀命名
- 新增页面后，在对应目录的 `.nav.yml` 里调整侧边栏顺序；用 `"*"` 通配符的目录会自动收录剩余页面

更详细的命名规则、元数据格式和写作约定见站内「关于本站 → 内容与写作说明」。
