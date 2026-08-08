# Python 学习手册

一个使用 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 构建的个人 Python 知识库，用于沉淀学习笔记、项目档案、代码片段和更新日志。

## 本地运行

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

浏览器访问 `http://127.0.0.1:8000`。

## 构建静态文件

```bash
mkdocs build --strict
```

生成的网站位于 `site/` 目录。该目录是构建产物，已被 Git 忽略。

## 自动部署

推送到 GitHub 仓库的 `main` 分支后，GitHub Actions 会自动执行严格构建并发布到：

`https://purelearning-dev.github.io/PythonGuide/`

## 新增内容

- 学习笔记放在 `docs/learning/`
- 项目档案放在 `docs/projects/`
- 可复用代码片段放在 `docs/engineering/snippets.md`，内容增多后可再拆分目录
- 带日期的学习和项目更新放在 `docs/logs/posts/`
- 新增长期页面后，在对应目录的 `.nav.yml` 中调整顺序或分组；使用通配符的目录会自动收录

更完整的内容规则见站内的“关于本站 → 内容与写作说明”。
