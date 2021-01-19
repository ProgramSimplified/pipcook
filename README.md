# 前端智能化

[pipcook](https://alibaba.github.io/pipcook/#/zh-cn/)

举了两个示例:

- 文本分类识别 textClassification
- 手写数字识别 handwrittenDigitRecognition

其中 output 为模型训练后生成的目录.

## QA

1. 若 plugin 始终不能安装成功, 则尝试 `pipcook daemon restart` 重启后台服务, 或者 `pipcook daemon monit`, `pipcook daemon debug` 查看日志或调试.
