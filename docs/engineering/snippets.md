---
title: 代码速查
description: 经过验证、可以直接复用的 Python 代码与命令
---

# 代码速查

这里存放**短小、已验证、可以直接复用**的代码。完整概念解释放在学习专题，项目特有代码留在项目档案。

## 文件与目录

### 安全地创建目录

```python
from pathlib import Path

output_dir = Path("output")
output_dir.mkdir(parents=True, exist_ok=True)
```

### 按行读取大文件

```python
from pathlib import Path

with Path("records.txt").open(encoding="utf-8") as file:
    for line in file:
        record = line.rstrip("\n")
        # 处理 record
```

## 数据处理

### 按键分组

```python
from collections import defaultdict

grouped: dict[str, list[dict]] = defaultdict(list)
for item in items:
    grouped[item["category"]].append(item)
```

## 片段收录标准

- 代码应当可以独立理解，依赖和输入明确。
- 标注适用的 Python 版本或平台限制。
- 至少运行验证一次；复杂逻辑应有测试。
- 如果代码超过约 40 行，考虑升级为专题或小项目。
