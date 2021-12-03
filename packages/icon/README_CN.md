# 图标

图标是有意义的符号，被用于更简洁的表达信息

## 安装

```jsx
yarn add @illa-design/icon
```

## 引用组件

```jsx
import { Icon, XxxIcon} from "@illa-design/icon"
```

## 组件接口(API)

### Icon 基础属性

| 参数名 | 描述                     | 类型    | 默认值 |
| ------ | ------------------------ | ------- | ------ |
| size   | icon图标的大小，单位是px | string  | -      |
| spin   | 控制icon图标是否旋转     | boolean | true   |

## 使用方法

illa-design 提供了三种使用icon的方法

### 基础用法

illa-design 提供一系列常用的图标，你可以在你的项目里使用这些图标。使用这些Icon之前需要先通过`import {xxxIcon} from "@illa-design/icon"`将待使用icon图标引入到项目中

```jsx
<CloseIcon/>
```

### 设置图标大小

通过size这个接口可以调整icon的大小

```jsx
<CloseIcon size="16px"/>
<CloseIcon size="24px"/>
<CloseIcon size="48px"/>
```

### 设置图标旋转

通过spin这个接口可以调整icon的大小

```jsx
<CloseIcon size="16px" spin/>
<CloseIcon size="24px" spin/>
<CloseIcon size="48px" spin/>
```

### 使用第三方图标库

illa-design支持非常方便的引用第三方图标库，比如react-icons. 只需要两步：

第一步：从illa-design/react引入icon组件以及从第三方图标库中引入想要的icon

第二步：将想要的第三方icon通过传入icon组件children的方式引用

```jsx
import { Icon} from "@illa-design/icon"
import { BsFacebook, BsTwitch, BsTwitter, BsStarFill } from "react-icons/bs"
<Icon> <BsTwitter/> </Icon> 
```

### 创建新Icon

可以通过icon这个组件渲染一个svg元素来创建一个新icon

```jsx
<Icon>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 				className="bi bi-github"
         viewBox="0 0 16 16">
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
   </svg>
</Icon> 
```
