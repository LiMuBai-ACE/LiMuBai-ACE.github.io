---
sticky: 999
description: 当我在react父子组件间中同时使用了hover事件造成的影响
tag:
  - bug
---

# react 中变量定义问题

· 当我在 react 父子组件间中同时使用了 hover 事件造成的影响

## 代码展示

父组件 header

```tsx
import React, { useRef } from "react";
import { useHover } from "ahooks";
function Header() {
  const navRef = useRef(null);

  const [active, setActive] = useState(false);
  useHover(() => {
    onEnter: () => {
      setActive(true);
    };
    onLeave: () => {
      setActive(false);
    };
  });

  return <div ref={navRef}></div>;
}

export default Header;
```

子组件 modal

```tsx
import React, { useRef } from "react";
import { useHover } from "ahooks";
function Modal(props) {
  const navRef = useRef(null);
  let leaveTime: number | undefined;

  const [flag, setFlag] = useState(false);
  useHover(() => {
    onEnter: () => {
      clearTimeout(leaveTime);
    };
    onLeave: () => {
      leaveTime = setTimeout(() => {
        setFlag(false);
      }, 500);
    };
  });

  return <div ref={navRef}></div>;
}

export default Modal;
```

- 当我 hover 到父组件后，父组件的对用的 hover 展示没有问题

- 当我 hover 到子组件时就出现当我鼠标反复移除到 hover 的弹层时，并没有清楚掉离开事件，于是我开始查找为什么会出现这个问题

## 寻找问题

1. 首先打印是否触发了 hover 移入移出事件，得到证实有触发的。
2. 那么是否时父组件影响的呢，我们使用 react 时会知道，当父组件更新时也更新子组件，于是我在子组件函数内打印果然是这个问题

## 解决方案

1. 将变量提取到函数组件外
2. 用 useRef 缓存变量
