# Image

The Image component is used to  display images.

## Installation

```bash
yarn add @illa-design/image
```

## Import component

```jsx
import { Image } from "@illa-dedign/image"
```

## API

### Image Basic Properties

| Props        | Desc                                                        | Type                                                       | Default  |
| ------------ | ----------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| src          | The url of image                                            | `string \| string[]`                                        | `-`      |
| width        | Width of the image                                          | `string \| string[]`                                        | `-`      |
| height       | Height of the image                                         | `string \| string[]`                                        | `-`      |
| object-fit   | How the image should be resized to fit the width and height | `"fill" \| "container" \| "cover" \| "none" \| "scale-down"  ` | `"fill"` |
| alt          | The description of the image                                | `ReactNode`                                                | `-`      |
| fallbackIcon | The icon to show the image is loading or fails              | `ReactNode`                                                | `-`      |
| fallbackSrc  | The imagesrc to show the image is loading or fails          | `string \| string[]`                                        | `-`      |
| radius       | The corner radius of the image                              | `string \| string[]`                                        | `-`      |

## Example

### Basic usage

```jsx
<image src='https://via.placeholder.com/150' />
```
