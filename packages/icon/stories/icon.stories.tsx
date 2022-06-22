import { Meta, Story } from "@storybook/react"
import {
  IconProps,
  AddIcon,
  CheckmarkIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownIcon,
  EmptyIcon,
  ErrorIcon,
  ExpandIcon,
  EyeOffIcon,
  EyeOnIcon,
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
  FilterIcon,
  HeartIcon,
  ImageDefaultIcon,
  InfoCircleIcon,
  LikeIcon,
  LinkIcon,
  LoadingIcon,
  MinusIcon,
  MoreIcon,
  NextDoubleIcon,
  NextIcon,
  CaretDownIcon,
  DragPointIcon,
  PenIcon,
  PersonIcon,
  PlusIcon,
  PreDoubleIcon,
  PreIcon,
  ReduceIcon,
  RightIcon,
  SearchIcon,
  ShareIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  StarIcon,
  SuccessIcon,
  TimeIcon,
  UpIcon,
  UploadIcon,
  WarningCircleIcon,
  WarningIcon,
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  InfoIcon,
  LeafIcon,
  Result403Icon,
  Result404Icon,
  Result500Icon,
  EmptyStateIcon,
  RestApiIcon,
  PaginationPreIcon,
  WindowBottomIcon,
  WindowRightIcon,
  WindowLeftIcon,
  BugIcon,
  ArrayIcon,
  ComponentIcon,
  FunctionIcon,
  NullIcon,
  NumberIcon,
  ObjectIcon,
  StringIcon,
  PostgresIcon,
  MySqlIcon,
  RedisIcon,
  MongoDbIcon,
  JSTransformerIcon,
  UnselectedWidgetIcon,
  TextWidgetIcon,
  EditableTextWidgetIcon,
  ButtonWidgetIcon,
  TextInputWidgetIcon,
  SelectWidgetIcon,
  ContainerWidgetIcon,
  ChartWidgetIcon,
  ImageWidgetIcon,
  FormWidgetIcon,
  TableWidgetIcon,
  ModalWidgetIcon,
  NavigationWidgetIcon,
  SwitchWidgetIcon,
  RadioGroupWidgetIcon,
  TabWidgetIcon,
} from "../src"
import { DragIcon } from "../src/icons/drag"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",

  argTypes: {
    spin: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
    _css: {
      control: false,
    },
  },

  decorators: [(Story) => (<span style={{ fontSize: "100px" }}><Story /></span>)]
} as Meta

export const Close: Story<IconProps> = (props: IconProps) => (
  <CloseIcon {...props} />
)
export const Copy: Story<IconProps> = (props: IconProps) => (
  <CopyIcon {...props} />
)
export const ImageDefault: Story<IconProps> = (props: IconProps) => (
  <ImageDefaultIcon {...props} />
)
export const Loading: Story<IconProps> = (props: IconProps) => (
  <LoadingIcon {...props} />
)
export const Like: Story<IconProps> = (props: IconProps) => (
  <LikeIcon {...props} />
)
export const Share: Story<IconProps> = (props: IconProps) => (
  <ShareIcon {...props} />
)
export const Star: Story<IconProps> = (props: IconProps) => (
  <StarIcon {...props} />
)
export const Heart: Story<IconProps> = (props: IconProps) => (
  <HeartIcon {...props} />
)
export const Person: Story<IconProps> = (props: IconProps) => (
  <PersonIcon {...props} />
)
export const EyeOn: Story<IconProps> = (props: IconProps) => (
  <EyeOnIcon {...props} />
)
export const EyeOff: Story<IconProps> = (props: IconProps) => (
  <EyeOffIcon {...props} />
)
export const Search: Story<IconProps> = (props: IconProps) => (
  <SearchIcon {...props} />
)
export const Link: Story<IconProps> = (props: IconProps) => (
  <LinkIcon {...props} />
)
export const Right: Story<IconProps> = (props: IconProps) => (
  <RightIcon {...props} />
)
export const Error: Story<IconProps> = (props: IconProps) => (
  <ErrorIcon {...props} />
)
export const Warning: Story<IconProps> = (props: IconProps) => (
  <WarningIcon {...props} />
)
export const WarningCircle: Story<IconProps> = (props: IconProps) => (
  <WarningCircleIcon {...props} />
)
export const Success: Story<IconProps> = (props: IconProps) => (
  <SuccessIcon {...props} />
)
export const Reduce: Story<IconProps> = (props: IconProps) => (
  <ReduceIcon {...props} />
)
export const Empty: Story<IconProps> = (props: IconProps) => (
  <EmptyIcon {...props} />
)
export const Checkmark: Story<IconProps> = (props: IconProps) => (
  <CheckmarkIcon {...props} />
)
export const Info: Story<IconProps> = (props: IconProps) => (
  <InfoIcon {...props} />
)
export const InfoCircle: Story<IconProps> = (props: IconProps) => (
  <InfoCircleIcon {...props} />
)
export const Pre: Story<IconProps> = (props: IconProps) => (
  <PreIcon {...props} />
)
export const Next: Story<IconProps> = (props: IconProps) => (
  <NextIcon {...props} />
)
export const Up: Story<IconProps> = (props: IconProps) => <UpIcon {...props} />

export const Down: Story<IconProps> = (props: IconProps) => (
  <DownIcon {...props} />
)
export const CaretDown: Story<IconProps> = (props: IconProps) => (
  <CaretDownIcon {...props} />
)
export const CaretLeft: Story<IconProps> = (props: IconProps) => (
  <CaretLeftIcon {...props} />
)
export const CaretRight: Story<IconProps> = (props: IconProps) => (
  <CaretRightIcon {...props} />
)
export const Expand: Story<IconProps> = (props: IconProps) => (
  <ExpandIcon {...props} />
)
export const More: Story<IconProps> = (props: IconProps) => (
  <MoreIcon {...props} />
)
export const Add: Story<IconProps> = (props: IconProps) => (
  <AddIcon {...props} />
)
export const Minus: Story<IconProps> = (props: IconProps) => (
  <MinusIcon {...props} />
)
export const Plus: Story<IconProps> = (props: IconProps) => (
  <PlusIcon {...props} />
)
export const Upload: Story<IconProps> = (props: IconProps) => (
  <UploadIcon {...props} />
)
export const Delete: Story<IconProps> = (props: IconProps) => (
  <DeleteIcon {...props} />
)
export const FileWord: Story<IconProps> = (props: IconProps) => (
  <FileWordIcon {...props} />
)
export const FileDefault: Story<IconProps> = (props: IconProps) => (
  <FileDefaultIcon {...props} />
)
export const FileVideo: Story<IconProps> = (props: IconProps) => (
  <FileVideoIcon {...props} />
)
export const FileExcel: Story<IconProps> = (props: IconProps) => (
  <FileExcelIcon {...props} />
)
export const FileMusic: Story<IconProps> = (props: IconProps) => (
  <FileMusicIcon {...props} />
)
export const FilePdf: Story<IconProps> = (props: IconProps) => (
  <FilePdfIcon {...props} />
)
export const FilePicture: Story<IconProps> = (props: IconProps) => (
  <FilePictureIcon {...props} />
)
export const FileWPS: Story<IconProps> = (props: IconProps) => (
  <FileWPSIcon {...props} />
)
export const FilePPT: Story<IconProps> = (props: IconProps) => (
  <FilePPTIcon {...props} />
)
export const Pen: Story<IconProps> = (props: IconProps) => (
  <PenIcon {...props} />
)
export const PreDouble: Story<IconProps> = (props: IconProps) => (
  <PreDoubleIcon {...props} />
)
export const NextDouble: Story<IconProps> = (props: IconProps) => (
  <NextDoubleIcon {...props} />
)
export const SorterDefault: Story<IconProps> = (props: IconProps) => (
  <SorterDefaultIcon {...props} />
)
export const SorterUp: Story<IconProps> = (props: IconProps) => (
  <SorterUpIcon {...props} />
)
export const SorterDown: Story<IconProps> = (props: IconProps) => (
  <SorterDownIcon {...props} />
)

export const Filter: Story<IconProps> = (props: IconProps) => (
  <FilterIcon {...props} />
)
export const Time: Story<IconProps> = (props: IconProps) => (
  <TimeIcon {...props} />
)
export const Calendar: Story<IconProps> = (props: IconProps) => (
  <CalendarIcon {...props} />
)

export const DragPoint: Story<IconProps> = (props: IconProps) => (
  <DragPointIcon {...props} />
)

export const Leaf: Story<IconProps> = (props: IconProps) => (
  <LeafIcon {...props} />
)
export const Result403: Story<IconProps> = (props: IconProps) => (
  <Result403Icon {...props} />
)
export const Result404: Story<IconProps> = (props: IconProps) => (
  <Result404Icon {...props} />
)
export const Result500: Story<IconProps> = (props: IconProps) => (
  <Result500Icon {...props} />
)

export const EmptyState: Story<IconProps> = (props: IconProps) => (
  <EmptyStateIcon {...props} />
)

export const RestApi: Story<IconProps> = (props: IconProps) => (
  <RestApiIcon {...props} />
)

export const PaginationPre: Story<IconProps> = (props: IconProps) => (
  <PaginationPreIcon {...props} />
)

export const Bug: Story<IconProps> = (props: IconProps) => (
  <BugIcon {...props} />
)

export const WindowLeft: Story<IconProps> = (props: IconProps) => (
  <WindowLeftIcon {...props} />
)

export const WindowRight: Story<IconProps> = (props: IconProps) => (
  <WindowRightIcon {...props} />
)

export const WindowBottom: Story<IconProps> = (props: IconProps) => (
  <WindowBottomIcon {...props} />
)

export const Array: Story<IconProps> = (props: IconProps) => (
  <ArrayIcon {...props} />
)

export const Component: Story<IconProps> = (props: IconProps) => (
  <ComponentIcon {...props} />
)

export const Function: Story<IconProps> = (props: IconProps) => (
  <FunctionIcon {...props} />
)

export const Null: Story<IconProps> = (props: IconProps) => (
  <NullIcon {...props} />
)

export const Number: Story<IconProps> = (props: IconProps) => (
  <NumberIcon {...props} />
)

// Can not use `Object` as variable name, `Object` may be treat as
// keyword and cause icon story crash
export const Object_Icon: Story<IconProps> = (props: IconProps) => (
  <ObjectIcon {...props} />
)
Object_Icon.storyName = "Object"

export const String: Story<IconProps> = (props: IconProps) => (
  <StringIcon {...props} />
)

export const Postgres: Story<IconProps> = (props: IconProps) => (
  <PostgresIcon {...props} />
)

export const MySql: Story<IconProps> = (props: IconProps) => (
  <MySqlIcon {...props} />
)

export const Redis: Story<IconProps> = (props: IconProps) => (
  <RedisIcon {...props} />
)

export const MongoDb: Story<IconProps> = (props: IconProps) => (
  <MongoDbIcon {...props} />
)

export const JSTransformer: Story<IconProps> = (props: IconProps) => (
  <JSTransformerIcon {...props} />
)

export const UnselectedWidget: Story<IconProps> = (props: IconProps) => (
  <UnselectedWidgetIcon {...props} />
)

export const Drag: Story<IconProps> = (props: IconProps) => (
  <DragIcon {...props} />
)

export const TextWidget: Story<IconProps> = (props: IconProps) => (
  <TextWidgetIcon {...props} />
)

export const EditableTextWidget: Story<IconProps> = (props: IconProps) => (
  <EditableTextWidgetIcon {...props} />
)

export const ButtonWidget: Story<IconProps> = (props: IconProps) => (
  <ButtonWidgetIcon {...props} />
)

export const TextInputWidget: Story<IconProps> = (props: IconProps) => (
  <TextInputWidgetIcon {...props} />
)

export const SelectWidget: Story<IconProps> = (props: IconProps) => (
  <SelectWidgetIcon {...props} />
)

export const ContainerWidget: Story<IconProps> = (props: IconProps) => (
  <ContainerWidgetIcon {...props} />
)

export const ChartWidget: Story<IconProps> = (props: IconProps) => (
  <ChartWidgetIcon {...props} />
)

export const ImageWidget: Story<IconProps> = (props: IconProps) => (
  <ImageWidgetIcon {...props} />
)

export const FormWidget: Story<IconProps> = (props: IconProps) => (
  <FormWidgetIcon {...props} />
)

export const TableWidget: Story<IconProps> = (props: IconProps) => (
  <TableWidgetIcon {...props} />
)

export const ModalWidget: Story<IconProps> = (props: IconProps) => (
  <ModalWidgetIcon {...props} />
)

export const NavigationWidget: Story<IconProps> = (props: IconProps) => (
  <NavigationWidgetIcon {...props} />
)

export const SwitchWidget: Story<IconProps> = (props: IconProps) => (
  <SwitchWidgetIcon {...props} />
)

export const RadioGroupWidget: Story<IconProps> = (props: IconProps) => (
  <RadioGroupWidgetIcon {...props} />
)

export const TabWidget: Story<IconProps> = (props: IconProps) => (
  <TabWidgetIcon {...props} />
)
