# Upload

The Upload component is used to upload files.

## Installation

```bash
yarn add @illa-design/upload
```

## Import Component

```jsx
import { Upload } from "@illa-design/upload"
```

## API

### Upload Basic Properties

| Props            | Desc                                                  | Type                                                         | Default    |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| defaultFileList  | The default uploaded file list                        | `UploadItem[] `                                              | `-`        |
| fileList         | The uploaded file list                                | `UploadItem[]`                                               | `-`        |
| pictureUpload    | If true, the file type is image                       | `boolean`                                                    | `-`        |
| directory        | If true, the file type is directory                   | `boolean`                                                    | `-`        |
| accept           | The file types are accepted                           | `string `                                                    | `-`        |
| customRequest    | Custom the request option                             | `(options: RequestOptions) => UploadRequestReturn `          | `-`        |
| listType         | Two types of the list: the text list and picture list | `"text" \| "picture-list"`                                   | `text`     |
| showUploadList   | If true, show the upload list                         | `boolean \| CustomIconType`                                  | `true`     |
| autoUpload       | If true, auto upload the file                         | `boolean`                                                    | `true`     |
| action           | URL of the upload                                     | `string`                                                     | `-`        |
| limit            | The limit of max number of the uploaded files         | `number`                                                     | `-`        |
| disabled         | If true, the status is diabled                        | `boolean`                                                    | `-`        |
| drag             | If true, users can drag files to upload               | `boolean`                                                    | `-`        |
| multiple         | Select multiple files                                 | `boolean`                                                    | `-`        |
| tip              | The text tips                                         | `string\| React.ReactNode`                                   | `-`        |
| headers          | The headers while uploading                           | `object`                                                     | `-`        |
| data             | The data of the body                                  | `object\| ((any:any)=> obeject)`                             | `-`        |
| name             | The file name                                         | `string\|((any:any)=> string)`                               | `-`        |
| withCredentials  | If true, upload request with cookies                  | `boolean`                                                    | `-`        |
| renderUploadList | Custom the uploaded file list                         | `(fileList: UploadItem[], uploadListProps: UploadListProps) => ReactNode` | `-`        |
| beforeUpload     | Call back before upload                               | `(file: File, filesList: File[]) => boolean \| Promise<any> ` | `()=>true` |

### Upload Events

| Props         | Desc                                 | Type                                                  | Default |
| ------------- | ------------------------------------ | ----------------------------------------------------- | ------- |
| onChange      | Callback when change                 | `(fileList: UploadItem[], file: UploadItem) => void ` | `-`     |
| onRemove      | Callback when remove                 | `(file: UploadItem, fileList: UploadItem[]) => void ` | `-`     |
| onProgress    | Callback when on progress            | `(file: UploadItem, e?: ProgressEvent) => void`       | `-`     |
| onReupload    | Call back when reupload              | `(file: UploadItem) => void`                          | `-`     |
| onExceedLimit | Call back when exceed limit of files | `(files: File[], fileList: UploadItem[]) => void`     | `-`     |

### uploadList Basic Properties

| Props    | Desc                          | Type      | Default |
| -------- | ----------------------------- | --------- | ------- |
| disabled | If true, the list is disabled | `boolean` | `-`     |

### uploadList Events

| Props      | Desc                                   | Type                         | Default |
| ---------- | -------------------------------------- | ---------------------------- | ------- |
| onAbort    | Callback when uploading file abort     | `(file: UploadItem) => void` | `-`     |
| onRemove   | Callback when click delete file button | `(file: UploadItem) => void` | `-`     |
| onReupload | Callback when reupload                 | `(file: UploadItem) => void` | `-`     |

### uploadItem Basic Properties

| Props      | Desc                                                     | Type           | Default |
| ---------- | -------------------------------------------------------- | -------------- | ------- |
| percent    | Upload progress percentage                               | `number`       | `-`     |
| response   | The response returned by the current file upload request | `object`       | `-`     |
| url        | File's url                                               | `string`       | `-`     |
| name       | File name                                                | `string`       | `-`     |
| uid        | The unique identifier of the currently uploaded file     | `string`       | `-`     |
| status     | The status of file uploading                             | `UploadStatus` | `-`     |
| originFile | File object                                              | `File`         | `-`     |

## Examples

### Basic usage 

```jsx
<Upload placeholder={"upload"} />
```

### Set upload with request success

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

### Set upload with drag mode

```jsx
<Upload drag={true} placeholder={"upload"} />
```

### Set upload without autoUpload

```jsx
<Upload autoUpload={false} placeholder={"upload"} />
```

### Set upload with file type

```jsx
<Upload
  action={"/"}
  placeholder={"upload"}
  accept={".jpg, .jpeg, .png"}
/>
```

