---
tag:
  - 技术笔记
---

## 遇到的问题

当我准备使用代理下载`Telegram`时，总会卡在`99%`

```sh
efst https://updates.tdesktop.com/tmac/tsetup.4.5.3.dmg -o -p http://127.0.0.1:7890
```

![图片](https://img.cdn.sugarat.top/mdImg/MTY3NDQwNDU1NjU2Ng==674404556566)

输出了一下错误，发现报错信息是 `ECONNRESET error`

## 解决办法

谷歌关键词 `使用http-proxy code: 'ECONNRESET'`，找到了解决办法 [简书：记一次本地错误排查过程：macbook Proxy error: Could not proxy request](https://www.jianshu.com/p/7f004a9a02f3)

添加请求头`Connection: 'keep-alive'`即可

![图片](https://img.cdn.sugarat.top/mdImg/MTY3NDQwNDgxMjIzMA==674404812230)
