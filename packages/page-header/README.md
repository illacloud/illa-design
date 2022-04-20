# PageHeader

Pageheader is located on top of page container. it is used to show common description and action of page

## Installation

```bash
yarn add @illa-design/pageheader
```

## Import component

```jsx
import { PageHeader } from "@illa-dedign/pageheader"
```

## API

### PageHeader Basic Properties

| Props      | Desc                            | Type                   | Default |
| ---------- | ------------------------------- | ---------------------- | ------- |
| title      | Set title of page               | `ReactNode`            | `-`     |
| subTitle   | Set subtitle of page            | `ReactNode`            | `-`     |
| breadcrumb | Set breadcrumb of page          | `BreadcrumbProps`      | `-`     |
| backIcon   | Add back button"s icon          | `ReactNode \| boolean` | `-`     |
| extra      | Set extra content on pageheader | `ReactNode`            | `-`     |

### PageHeader Events

| Props  | Desc                            | Type                      | Default |
| ------ | :------------------------------ | ------------------------- | ------- |
| onBack | Callback when click bask button | `(e: MouseEvent) => void` | `-`     |

## Example

### Basic usage

```jsx
<PageHeader
  title="ILLA-Design"
  subTitle={
    <>
      This is a description
      <Tag color="blue" size="medium" style={{ marginLeft: 10 }}>
        Tag
      </Tag>
    </>
  }
  backIcon
  onBack={() => Message.info("Click back button")}
  breadcrumb={{
    routes: [
    {
      path: "/",
      breadcrumbName: "Home",
    },
    {
      path: "/channel",
      breadcrumbName: "Channel",
    },
    {
      path: "/news",
      breadcrumbName: "News",
    },
    ],
  }}
  extra={
    <div>
      <Button colorScheme="grey" style={{ marginRight: 10 }}>
        Cancel
      </Button>
      <Button type="blue">confirm</Button>
    </div>
  }
/>

```

