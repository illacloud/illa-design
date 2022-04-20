# Pagination

Pagination is used to show content  in pages and can control the internal capacity of each page

## Installation

```bash
yarn add @illa-design/pagination
```

## Import component

```jsx
import { Pagination } from "@illa-design/pagination"
```

## API

### Pagination Basic Properties

| Props            | Desc                                            | Type                                                         | Default            |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------ | ------------------ |
| currentPage      | Set current page                                | `number`                                                     | `-`                |
| pageSize         | Set capacity of each page                       | `number`                                                     | `-`                |
| total            | Total number of content                         | `number`                                                     | `-`                |
| defaultCurrent   | Set default current page                        | `number`                                                     | `1`                |
| defaultPageSize  | Set default capacity of each page               | `number`                                                     | `10`               |
| disabled         | Whether to disable the component                | `boolean`                                                    | `-`                |
| hideOnSinglePage | Whether to hide  when only one page             | `boolean`                                                    | `true`             |
| size             | Set size                                        | `"small" \| "medium" \| "large"`                             | `medium`           |
| showTotal        | whether to show the total number of content     | `boolean \| ((total: number, range: number[]) => ReactNode)` | `-`                |
| sizeCanChange    | whether to show options of change page capacity | `boolean`                                                    | `true`             |
| sizeOptions      | Set options of change page capacity             | `number[]`                                                   | `[10,20,30,40,50]` |
| simple           | whether to show simple style                    | `boolean`                                                    | `-`                |
| showJumper       | Whether to show the page jumper                 | `boolean`                                                    | `-`                |
| prevIcon         | Set previous page icon                          | `ReactNode`                                                  | `-`                |
| nextIcon         | Set next page icon                              | `ReactNode`                                                  | `-`                |
| moreIcon         | Set more page icon                              | `ReactNode`                                                  | `-`                |

### Pagination Events

| Props            | Desc                                      | Type                                             | Default |
| ---------------- | ----------------------------------------- | ------------------------------------------------ | ------- |
| onChange         | Callback when the current page is changed | `(pageNumber: number, pageSize: number) => void` | `-`     |
| onPageSizeChange | Callback when the pageSize is changed     | `(size: number, current: number) => void`        | `-`     |



## Example

### Basic usage

```jsx
<Pagination total={200} />
```

### Set capacity of each page can be change

```jsx
 <Pagination defaultCurrent={5} total={200} sizeCanChange />
```

### Set jumper

```jsx
<Pagination total={200} showJumper />
```

### Set Pagination's size

```jsx
<Pagination size="small" total={50} showTotal showJumper sizeCanChange />
```

### Show total number of content

```jsx
<Pagination showTotal total={50} style={{ marginBottom: 20 }} />
```

### Show all of Configuration item 

```jsx
 <Pagination showTotal total={200} showJumper sizeCanChange} />
```
