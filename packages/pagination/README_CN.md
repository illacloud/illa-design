# 分页

将大量内容分页展示，并控制每页的内容量

## 安装

```bash
yarn add @illa-design/pagination
```

## 引用组件

```jsx
import { Pagination } from "@illa-design/pagination"
```

## 组件接口(API)

### Pagination 基础属性

| 参数名           | 描述                       | 类型                                                         | 默认值             |
| ---------------- | -------------------------- | ------------------------------------------------------------ | ------------------ |
| currentPage      | 当前页                     | `number`                                                     | `-`                |
| pageSize         | 每页数据条数               | `number`                                                     | `-`                |
| total            | 数据总数                   | `number`                                                     | `-`                |
| defaultCurrent   | 当前页默认值               | `number`                                                     | `1`                |
| defaultPageSize  | 默认每页数据条数           | `number`                                                     | `10`               |
| disabled         | 是否禁用                   | `boolean`                                                    | `-`                |
| hideOnSinglePage | 是否在只有一页的情况下隐藏 | `boolean`                                                    | `true`             |
| size             | 分页器尺寸，3种规格        | `"small" \| "medium" \| "large"`                             | `medium`           |
| showTotal        | 是否显示数据总数           | `boolean \| ((total: number, range: number[]) => ReactNode)` | `-`                |
| sizeCanChange    | 是否可以改变每页条数       | `boolean`                                                    | `true`             |
| sizeOptions      | 每页可以显示的数据条数     | `number[]`                                                   | `[10,20,30,40,50]` |
| simple           | 是否应用精简分页模式       | `boolean`                                                    | `-`                |
| showJumper       | 是否显示快速跳转到某页     | `boolean`                                                    | `-`                |
| prevIcon         | 设置前一页的图标           | `ReactNode`                                                  | `-`                |
| nextIcon         | 设置下一页的图标           | `ReactNode`                                                  | `-`                |
| moreIcon         | 设置更多页的图标           | `ReactNode`                                                  | `-`                |

### Pagination 事件

| 参数名           | 描述                  | 类型                                             | 默认值 |
| ---------------- | --------------------- | ------------------------------------------------ | ------ |
| onChange         | 变化时触发的回调      | `(pageNumber: number, pageSize: number) => void` | `-`    |
| onPageSizeChange | pageSize 变化时的回调 | `(size: number, current: number) => void`        | `-`    |



## 使用方法

### 基础用法

```jsx
<Pagination total={200} />
```

### 设置每页内容数量

通过sizeCanChange接口可以设置页码内容数量

```jsx
 <Pagination defaultCurrent={5} total={200} sizeCanChange />
```

### 设置可跳转

通过showJumper可以通过输入页码，快速跳转到指定页

```jsx
<Pagination total={200} showJumper />
```

### 设置分页尺寸

通过size接口可以改变分页的尺寸大小

```jsx
<Pagination size="small" total={50} showTotal showJumper sizeCanChange />
```

### 展示总数

通过showTotal接口可以展示数据总数

```jsx
<Pagination showTotal total={50} style={{ marginBottom: 20 }} />
```

### 展示全部配置项

```jsx
 <Pagination showTotal total={200} showJumper sizeCanChange />
```
