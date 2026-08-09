---
title: 标准库
---

# 标准库

先围绕实际任务建立索引，再深入 API。这样需要解决问题时，可以按场景找到工具。

## 场景索引

| 要做的事 | 首选模块 | 典型入口 |
| --- | --- | --- |
| 处理文件路径 | `pathlib` | `Path` |
| 表达结构化记录 | `dataclasses` | `@dataclass` |
| 读取配置数据 | `json`, `tomllib` | `load`, `loads` |
| 统计和分组 | `collections` | `Counter`, `defaultdict` |
| 处理日期时间 | `datetime`, `zoneinfo` | `datetime`, `ZoneInfo` |
| 运行外部命令 | `subprocess` | `run` |
| 编写命令行参数 | `argparse` | `ArgumentParser` |
| 并发执行任务 | `concurrent.futures` | `ThreadPoolExecutor` |

## 示例：用 `pathlib` 读取文本

```python
from pathlib import Path

notes_dir = Path("notes")
for note in notes_dir.glob("**/*.md"):
    content = note.read_text(encoding="utf-8")
    print(note.name, len(content))
```

!!! note "记录重点"

    不需要把官方 API 文档完整抄一遍。记录你真正用过的组合、为什么这样选，以及版本差异或平台限制。

