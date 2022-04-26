# Skeleton

Skeleton is used for display the loading state of some components.

## Installation

```bash
yarn add @illa-design/skeleton
```

## Import component

```jsx
import { Skeleton } from "@illa-dedign/skeleton"
```

## API

### Skeleton Basic Properties

| Props     | Desc                        | Type                  | Default         |
| --------- | --------------------------- | --------------------- | --------------- |
| animation | Whether show animation      | boolean               | -               |
| visible   | whether is visible          | boolean               | true            |
| image     | Whether show image skeleton | SkeletonImageProps \ | boolean | -     |
| text      | Whether show text skeleton  | SkeletonTextProps \  | boolean  | true |

### SkeletonImageProps

| Props | Desc                             | Type        | Default                                     |
| ----- |:-------------------------------- | ----------- | ------------------------------------------- |
| shape | Set the shape of  image skeleton | "circle" \ | "square"                     | "circle"     |
| size  | Set the size of image skeleton   | number \   | "large" \| "small" \| "medium" | "medium" |

### SkeletonTextProps

<table spaces-before="0">
  <tr>
    <th>
      Props
    </th>
    
    <th>
      Desc
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Default
    </th>
  </tr>
  
  <tr>
    <td>
      rows
    </td>
    
    <td>
      Set row number of text skeleton
    </td>
    
    <td>
      number
    </td>
    
    <td>
      3
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      Set rows' width
    </td>
    
    <td>
      number \
    </td>
    
    <td>
      string \| Array<number \| string> | 0.8
    </td>
  </tr>
</table>

## Example

### Basic usage

```jsx
<Skeleton />
```

### Set row number of text's skeleton

```jsx
<Skeleton text={{ rows: 10 }} />
```

### custom last row width

```jsx
<Skeleton text={{ rows: 5, width: "60%" }} />
```

### custom all row width

```jsx
<Skeleton text={{ rows: 5, width: ["20%", "40%", "60%", 200, 400] }} />
```

### With image skeleton

```jsx
<Skeleton image />
```

### Set square image skeleton

```jsx
<Skeleton image={{ shape: "square" }} />
```

### with animation

```jsx
<Skeleton image animation />
```
