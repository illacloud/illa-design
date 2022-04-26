# Grid

Grid is used to create consistent page structures and responsive page layouts.

## Installation

```bash
yarn add @illa-design/grid
```

## Import components

```jsx
import { Row, Col } from "@illa-dedign/grid"
```

## API

### Row Basic Properties

| Props         | Desc                                                                                                                          | Type       | Default                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| horizontalGap | the size of the horizontal interval betweent grids, could be a string or an object like `{ xs: "4px", sm: "8px", md: "12px"}` | string \  | GridSize                                                | "0px"     |
| verticallGap  | The size of the vertical interval betweent grids, could be a string or an object like `{ xs: "4px", sm: "8px", md: "12px"}`   | string \  | GridSize                                                | "0px"     |
| align         | Vertical alignment                                                                                                            | "start" \ | "center" \| "end" \| "stretch"                         | "start"  |
| justify       | Horizontal alignment                                                                                                          | "start" \ | "center" \| "end" \| "space-around" \| "space-between" | "start" |

### Col Basic Properties

| Props  | Desc                                               | Type      | Default                    |
| ------ | -------------------------------------------------- | --------- | -------------------------- |
| span   | Raster number of cells to occupy                   | number    | 24                         |
| offset | The number of cells to offset Col from the left    | number    | 0                          |
| order  | Raster order                                       | number    | -                          |
| push   | Move the raster to right                           | number    | -                          |
| pull   | Move the raster to rleft                           | number    | -                          |
| xs     | Responsive configuration when `screen< 576px`   | number \ | { [key: string]: any } | - |
| sm     | Responsive configuration when `screen>= 576px`  | number \ | { [key: string]: any } | - |
| md     | Responsive configuration when `screen>= 768px`  | number \ | { [key: string]: any } | - |
| lg     | Responsive configuration when `screen>= 992px`  | number \ | { [key: string]: any } | - |
| xl     | Responsive configuration when `screen>= 1200px` | number \ | { [key: string]: any } | - |
| xxl    | Responsive configuration when `screen>= 1600px` | number \ | { [key: string]: any } | - |

## Example

### Basic usage

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### Set offset of Col

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2-offset-8
    </div>
  </Col>
</Row>
```

### Set interval of Grid

```jsx
<Row horizontalGap="24px" verticalGap="24px">
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2-span-16
    </div>
  </Col>
</Row>
```

### Set horizontal and vertical layout

```jsx
<Row justify="center" align="end">
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2-span-8
    </div>
  </Col>
</Row>
```

### Set order of Col

```jsx
<Row>
  <Col span={8}>
    <div
      style={{
        borderRadius: "6px",
        height: "80px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2-order-1
    </div>
  </Col>
</Row>
```

### Set responsive layout

```jsx
<Row>
  <Col xs={4} sm={8} md={12} lg={16} xl={20}>
    <div
      style={{
        borderRadius: "6px",
        height: "50px",
        backgroundColor: globalColor(`--${illaPrefix}-blue-02`),
        color: "white",
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
        backgroundColor: globalColor(`--${illaPrefix}-blue-06`),
        color: "white",
      }}
    >
      Col-2
    </div>
  </Col>
</Row>
```
