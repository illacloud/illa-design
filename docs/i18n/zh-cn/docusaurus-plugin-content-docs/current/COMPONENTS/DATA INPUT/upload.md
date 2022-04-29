# Upload上传

用户可通过此组件上传文件。

## 安装

```bash
yarn add @illa-design/upload
```

## 引用组件

```jsx
import { Upload } from "@illa-design/upload"
```

## 组件接口（API）

### Upload基础属性

| Props            | Desc                                                         | Type                                                         | Default    |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| defaultFileList  | 默认已上传的文件列表                                         | `UploadItem[] `                                              | `-`        |
| fileList         | 已上传的文件列表                                             | `UploadItem[]`                                               | `-`        |
| pictureUpload    | 是否为图片                                                   | `boolean`                                                    | `-`        |
| directory        | 文件夹上传                                                   | `boolean`                                                    | `-`        |
| accept           | 接受上传的类型                                               | `string `                                                    | `-`        |
| customRequest    | 通过覆盖默认的上传行为，可以自定义自己的上传实现             | `(options: RequestOptions) => UploadRequestReturn `          | `-`        |
| listType         | 展示类型                                                     | `"text" \| "picture-list"`                                   | `text`     |
| showUploadList   | 是否展示上传文件列表                                         | `boolean \| CustomIconType`                                  | `true`     |
| autoUpload       | 是否选中文件后自动                                           | `boolean`                                                    | `true`     |
| action           | 上传的地址                                                   | `string`                                                     | `-`        |
| limit            | 限制上传数量，超出后会隐藏                                   | `number`                                                     | `-`        |
| disabled         | 禁用                                                         | `boolean`                                                    | `-`        |
| drag             | 是否拖拽上传                                                 | `boolean`                                                    | `-`        |
| multiple         | 文件多选                                                     | `boolean`                                                    | `-`        |
| tip              | 提示文字，listType不同，展示会有区别                         | `string\| React.ReactNode`                                   | `-`        |
| headers          | 上传时使用的headers                                          | `object`                                                     | `-`        |
| data             | 上传时的body参数                                             | `object\| ((any:any)=> obeject)`                             | `-`        |
| name             | The parameter name of file content at the time of request    | `string\|((any:any)=> string)`                               | `-`        |
| withCredentials  | 上传请求是否携带cookie                                       | `boolean`                                                    | `-`        |
| renderUploadList | 自定义展示上传文件列表                                       | `(fileList: UploadItem[], uploadListProps: UploadListProps) => ReactNode` | `-`        |
| beforeUpload     | 上传文件之前的回调。返回false或者promise抛出异常的时候会取消上传。 | `(file: File, filesList: File[]) => boolean \| Promise<any> ` | `()=>true` |

### Upload事件

| Props         | Desc                                                         | Type                                                  | Default |
| ------------- | ------------------------------------------------------------ | ----------------------------------------------------- | ------- |
| onChange      | 上传文件改变时的回调。文件开始上传，失败，成功时会触发。注意：如果需要实时获取文件的上传进度，请在 `onProgress` 中处理。 | `(fileList: UploadItem[], file: UploadItem) => void ` | `-`     |
| onRemove      | 点击删除文件时的回调。返回 `false` 或者 `Promise.reject` 的时候不会执行删除。 | `(file: UploadItem, fileList: UploadItem[]) => void ` | `-`     |
| onProgress    | 文件上传进度的回调                                           | `(file: UploadItem, e?: ProgressEvent) => void`       | `-`     |
| onReupload    | 文件重新上传时触发的回调                                     | `(file: UploadItem) => void`                          | `-`     |
| onExceedLimit | 超出上传数量限制时触发                                       | `(files: File[], fileList: UploadItem[]) => void`     | `-`     |

### uploadList 基础属性

| Props    | Desc | Type      | Default |
| -------- | ---- | --------- | ------- |
| disabled | 禁用 | `boolean` | `-`     |

### uploadList 事件

| Props      | Desc                                                         | Type                         | Default |
| ---------- | ------------------------------------------------------------ | ---------------------------- | ------- |
| onAbort    | 中止文件上传的回调                                           | `(file: UploadItem) => void` | `-`     |
| onRemove   | 点击删除文件时的回调。返回false或者Promise.reject的时候不会执行删除 | `(file: UploadItem) => void` | `-`     |
| onReupload | 重新上传的回调                                               | `(file: UploadItem) => void` | `-`     |

### uploadItem 基础属性

| Props      | Desc                       | Type           | Default |
| ---------- | -------------------------- | -------------- | ------- |
| percent    | 上传进度百分比             | `number`       | `-`     |
| response   | 当前文件上传请求返回的响应 | `object`       | `-`     |
| url        | 文件 url                   | `string`       | `-`     |
| name       | 文件名                     | `string`       | `-`     |
| uid        | 当前上传文件的唯一标示     | `string`       | `-`     |
| status     | 当前上传文件的状态         | `UploadStatus` | `-`     |
| originFile | 文件对象                   | `File`         | `-`     |

## 使用方法

### 基础用法

```jsx
<Upload placeholder={"upload"} />
```

### 设置上传请求成功

```jsx
<Upload
  action={"/"}
  withCredentials={true}
  beforeUpload={() => true}
  headers={{ secChUaArch: "arm" }}
  onChange={(fileList, file) => {
    files = fileList
    curFile = file
  }}
  name={() => "test"}
  data={{ test: "test" }}
  placeholder={"upload"}
/>
```

### 设置拖拽上传

```jsx
<Upload drag={true} placeholder={"upload"} />
```

### 设置自动上传

```jsx
<Upload autoUpload={false} placeholder={"upload"} />
```

### 设置上传文件格式

```jsx
<Upload
  action={"/"}
  placeholder={"upload"}
  accept={".jpg, .jpeg, .png"}
/>
```

