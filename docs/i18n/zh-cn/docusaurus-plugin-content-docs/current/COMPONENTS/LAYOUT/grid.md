# 栅格 Grid

栅格经常被用于创建具有一致性的页面结构与响应式页面布局。

## 安装

```bash
yarn add @illa-design/grid
```

## 引用组件

```jsx
import { Row, Col } from "@illa-dedign/grid"
```

## 组件接口(API)

### Row 基础属性

| 参数名        | 描述                                                                                              | 类型                                                              | 默认值  |
| ------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| horizontalGap | 栅格之间水平方向间隔大小，单位是像素 。可传入响应式对象写法 `{ xs: "4px", sm: "8px", md: "12px"}` | string \| GridSize                                                | "0px"   |
| verticallGap  | 栅格之间垂直方向间隔大小，单位是像素 。可传入响应式对象写法 `{ xs: "4px", sm: "8px", md: "12px"}` | string \| GridSize                                                | "0px"   |
| align         | 在垂直方向上的对齐方式                                                                            | "start" \| "center" \| "end" \| "stretch"                         | "start" |
| justify       | 在水平方向排列方式                                                                                | "start" \| "center" \| "end" \| "space-around" \| "space-between" | "start" |

### Col 基础属性

| 参数名 | 描述                                                                                                           | 类型                             | 默认值 |
| ------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------ |
| span   | 栅格占位格数                                                                                                   | number                           | 24     |
| offset | 栅格与左侧栅格的间隔格数                                                                                       | number                           | 0      |
| order  | 对元素进行排序 排序优先级：无 order 参数元素>有 order 参数元素 当 order 的值一样时按照元素在代码块先后顺序排列 | number                           | -      |
| push   | 栅格向右移动格数，右侧可以有其它栅格                                                                           | number                           | -      |
| pull   | 栅格向左移动格数，左侧可以有其他栅格，pull 的元素展示优先级最高（可以盖在其他元素之上显示）                    | number                           | -      |
| xs     | < 576px 响应式栅格，可以内嵌`span`, `offset`, `order`, `pull`, `push` 属性，比如 xs={{ span: 8 }}              | number \| { [key: string]: any } | -      |
| sm     | >= 576px 响应式栅格，同上                                                                                      | number \| { [key: string]: any } | -      |
| md     | >= 768px 响应式栅格，同上                                                                                      | number \| { [key: string]: any } | -      |
| lg     | >= 992px 响应式栅格，同上                                                                                      | number \| { [key: string]: any } | -      |
| xl     | >= 1200px 响应式栅格，同上                                                                                     | number \| { [key: string]: any } | -      |
| xxl    | >= 1600px 响应式栅格，同上                                                                                     | number \| { [key: string]: any } | -      |

## 使用方法

### 基础用法

### Basic usage

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-span-16
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### 栅格偏移

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={8} offset={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-offset-8
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={8} offset={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-offset-8
    </div>
  </Col>
</Row>
```

### 栅格间隔

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row horizontalGap="24px" verticalGap="24px">
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-span-16
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row horizontalGap="24px" verticalGap="24px">
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### 设置水平和垂直布局

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row justify="center" align="end">
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "50px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-2-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-span-16
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row justify="center" align="end">
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-2-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### 排序

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-1-order-2
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-2-order-1
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "50px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-2-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-span-16
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-1-order-2
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-2-order-1
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-2-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### 响应式布局

```SnackPlayer dependencies=@illa-design/grid
import * as React from "react";
import { Row, Col } from "@illa-design/grid";

const App = () => {
  return (
    <Row>
      <Col xs={4} sm={8} md={12} lg={16} xl={20}>
        <div
          style={{
            borderRadius: "6px",
            height: "50px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1
        </div>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-1-order-2
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-2-order-1
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "50px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-2-span-8
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "pink",
            color: "white"
          }}
        >
          Col-1-span-8
        </div>
      </Col>
      <Col span={16}>
        <div
          style={{
            borderRadius: "6px",
            height: "80px",
            backgroundColor: "blue",
            color: "white"
          }}
        >
          Col-2-span-16
        </div>
      </Col>
    </Row>
  );
};

export default App;
```

```jsx
<Row>
  <Col xs={4} sm={8} md={12} lg={16} xl={20}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1
    </div>
  </Col>
  <Col xs={20} sm={16} md={12} lg={8} xl={4}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-1-order-2
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-2-order-1
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-2-span-8
    </div>
  </Col>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "pink",
        color: "white"
      }}
    >
      Col-1-span-8
    </div>
  </Col>
  <Col span={16}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```
