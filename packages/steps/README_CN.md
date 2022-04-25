# 步骤条 Steps

展示任务流程和当前进度及状态，引导用户按照步骤完成任务。

## 安装

```bash
yarn add @illa-design/steps
```

## 引用组件

```jsx
import { Steps } from "@illa-dedign/steps"
```

## 组件接口(API)

### Steps 基础属性

| 参数名         | 描述                   | 类型                                                         | 默认值       |
| -------------- | ---------------------- | ------------------------------------------------------------ | ------------ |
| variant        | 节点样式类型           | "line" \| "dot" \| "navigation"                              | "line"       |
| size           | 步骤条的尺寸           | "small" \| "large"                                           | "small"      |
| direction      | 节点排布方向           | "vertical" \| "horizontal"                                   | "horizontal" |
| labelPlacement | 标签描述文字放置的位置 | "vertical" \| "horizontal"                                   | "horizontal" |
| current        | 当前步数               | number                                                       | 1            |
| status         | 当前步数的节点状态     | "wait" \| "process" \| "finish" \| "error"                   | "process"    |
| customDot      | 自定义步骤条节点       | (IconDot: React.ReactNode, stepConfig: CustomDotRecord) => React.ReactNode | -            |

### Steps 事件

| 参数名   |        描述        | 类型                              | 默认值 |
| -------- | :----------------: | --------------------------------- | ------ |
| onChange | 切换当前步骤的回调 | (current: number, id: any)=> void | -      |

### Step 基础属性

| 参数名      | 描述                                        | 类型                                       | 默认值 |
| ----------- | ------------------------------------------- | ------------------------------------------ | ------ |
| id          | 指定节点的 ID，将在 onChange 回调中作为参数 | any                                        | -      |
| title       | 节点标题                                    | string \| ReactNode                        | -      |
| description | 节点描述                                    | string \| ReactNode                        | -      |
| status      | 节点状态                                    | "wait" \| "process" \| "finish" \| "error" | -      |
| disabled    | 当前步骤点击被禁用                          | boolean                                    | -      |

## 使用方法

### 基础用法

```jsx
<Steps current={2} variant="dot">
  <Step title="Succeeded" />
  <Step title="Processing" />
  <Step title="Pending" />
</Steps>
```

### 设置节点描述

通过<Step>中的description接口可以设置步骤的描述。

```jsx
<Steps current={2}>
  <Step title="Succeeded" description="This is a description." />
  <Step title="Processing" description="This is a description." />
  <Step title="Pending" description="This is a description." />
</Steps>
```

### 设置节点状态

通过status接口可以设置各个节点的状态。

```jsx
<Steps current={2}>
  <Step title="Succeeded" description="This is a description." status="finish" />
  <Step title="Processing" description="This is a description." status="process" />
  <Step title="Pending" description="This is a description." status="wait" />
</Steps>
```

### 设置节点排布方向

通过direction接口配置步骤条节点的排布方向。

```jsx
<Steps current={2} direction="vertical">
  <Step title="Succeeded" description="This is a description." status="finish" />
  <Step title="Processing" description="This is a description." status="process" />
  <Step title="Pending" description="This is a description." status="wait" />
</Steps>
```

### 设置节点的标签位置

通过allowClear接口可以配置是否支持清除评分。

```jsx
<Steps current={2} labelPlacement="vertical" >
  <Step title="Succeeded" description="This is a description." status="finish" />
  <Step title="Processing" description="This is a description." status="process" />
  <Step title="Pending" description="This is a description." status="wait" />
</Steps>
```

### 自定义节点样式

通过customDot接口可以自定义节点样式。

```jsx
const customDot = (iconNode, { index }) => {
  return <Tooltip content={index}>{iconNode}</Tooltip>
}
<Steps customDot={customDot} >
  <Step title="Succeeded" description="This is a description." status="finish" />
  <Step title="Processing" description="This is a description." status="process" />
  <Step title="Pending" description="This is a description." status="wait" />
</Steps>
```

### 点击切换步骤

通过onChange接口可以控制切换步骤。

```jsx
const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index)
  }
<Steps 
  onChange={onChange}
  current={current} 
>
  <Step title="Succeeded" description="This is a description." status="finish" />
  <Step title="Processing" description="This is a description." status="process" />
  <Step title="Pending" description="This is a description." status="wait" />
</Steps>
```
