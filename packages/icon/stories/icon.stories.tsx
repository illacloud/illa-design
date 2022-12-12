import { Meta, StoryFn } from "@storybook/react"
import {
  AddIcon,
  ArrayIcon,
  BarChartIcon,
  BugIcon,
  CalendarIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckmarkIcon,
  CloseIcon,
  ComponentIcon,
  CopyIcon,
  DeleteIcon,
  DocsIcon,
  DownIcon,
  DownloadIcon,
  DragIcon,
  DragPointIcon,
  EmptyIcon,
  ErrorIcon,
  ExitIcon,
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
  FullScreenIcon,
  FunctionIcon,
  FxIcon,
  HeartIcon,
  HeartOutlineIcon,
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalFullIcon,
  HorizontalStartIcon,
  IconProps,
  ImageDefaultIcon,
  InfoCircleIcon,
  InfoIcon,
  LeafIcon,
  LikeIcon,
  LineChartIcon,
  LinkIcon,
  LoadingIcon,
  LockIcon,
  MinusIcon,
  MoreIcon,
  NextDoubleIcon,
  NextIcon,
  NullIcon,
  NumberIcon,
  ObjectIcon,
  PenIcon,
  PersonIcon,
  PieChartIcon,
  PlusIcon,
  PreDoubleIcon,
  PreIcon,
  ReduceIcon,
  ResetIcon,
  Result403Icon,
  Result404Icon,
  Result500Icon,
  SuccessCircleIcon,
  ScatterPlotIcon,
  SearchIcon,
  ShareIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  StarIcon,
  StartOutlineIcon,
  StringIcon,
  SuccessIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TimeIcon,
  UnlockIcon,
  UpIcon,
  UploadIcon,
  VerticalCenterIcon,
  VerticalEndIcon,
  VerticalStartIcon,
  WarningCircleIcon,
  WarningIcon,
  WindowBottomIcon,
  WindowLeftIcon,
  WindowRightIcon,
  SlashIcon,
} from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",
} as Meta

export const Close: StoryFn<IconProps> = (props: IconProps) => (
  <CloseIcon {...props} />
)

export const Copy: StoryFn<IconProps> = (props: IconProps) => (
  <CopyIcon {...props} />
)
export const ImageDefault: StoryFn<IconProps> = (props: IconProps) => (
  <ImageDefaultIcon {...props} />
)
export const Loading: StoryFn<IconProps> = (props: IconProps) => (
  <LoadingIcon {...props} />
)
export const Like: StoryFn<IconProps> = (props: IconProps) => (
  <LikeIcon {...props} />
)
export const Share: StoryFn<IconProps> = (props: IconProps) => (
  <ShareIcon {...props} />
)
export const Star: StoryFn<IconProps> = (props: IconProps) => (
  <StarIcon {...props} />
)
export const Heart: StoryFn<IconProps> = (props: IconProps) => (
  <HeartIcon {...props} />
)
export const Person: StoryFn<IconProps> = (props: IconProps) => (
  <PersonIcon {...props} />
)
export const EyeOn: StoryFn<IconProps> = (props: IconProps) => (
  <EyeOnIcon {...props} />
)
export const EyeOff: StoryFn<IconProps> = (props: IconProps) => (
  <EyeOffIcon {...props} />
)
export const Search: StoryFn<IconProps> = (props: IconProps) => (
  <SearchIcon {...props} />
)
export const Link: StoryFn<IconProps> = (props: IconProps) => (
  <LinkIcon {...props} />
)
export const SuccessCircle: StoryFn<IconProps> = (props: IconProps) => (
  <SuccessCircleIcon {...props} />
)
export const Error: StoryFn<IconProps> = (props: IconProps) => (
  <ErrorIcon {...props} />
)
export const Warning: StoryFn<IconProps> = (props: IconProps) => (
  <WarningIcon {...props} />
)
export const WarningCircle: StoryFn<IconProps> = (props: IconProps) => (
  <WarningCircleIcon {...props} />
)
export const Success: StoryFn<IconProps> = (props: IconProps) => (
  <SuccessIcon {...props} />
)
export const Reduce: StoryFn<IconProps> = (props: IconProps) => (
  <ReduceIcon {...props} />
)
export const Empty: StoryFn<IconProps> = (props: IconProps) => (
  <EmptyIcon {...props} />
)
export const Checkmark: StoryFn<IconProps> = (props: IconProps) => (
  <CheckmarkIcon {...props} />
)
export const Info: StoryFn<IconProps> = (props: IconProps) => (
  <InfoIcon {...props} />
)
export const InfoCircle: StoryFn<IconProps> = (props: IconProps) => (
  <InfoCircleIcon {...props} />
)
export const Pre: StoryFn<IconProps> = (props: IconProps) => (
  <PreIcon {...props} />
)
export const Next: StoryFn<IconProps> = (props: IconProps) => (
  <NextIcon {...props} />
)
export const Up: StoryFn<IconProps> = (props: IconProps) => (
  <UpIcon {...props} />
)

export const Down: StoryFn<IconProps> = (props: IconProps) => (
  <DownIcon {...props} />
)
export const CaretDown: StoryFn<IconProps> = (props: IconProps) => (
  <CaretDownIcon {...props} />
)
export const CaretLeft: StoryFn<IconProps> = (props: IconProps) => (
  <CaretLeftIcon {...props} />
)
export const CaretRight: StoryFn<IconProps> = (props: IconProps) => (
  <CaretRightIcon {...props} />
)
export const Expand: StoryFn<IconProps> = (props: IconProps) => (
  <ExpandIcon {...props} />
)
export const More: StoryFn<IconProps> = (props: IconProps) => (
  <MoreIcon {...props} />
)
export const Add: StoryFn<IconProps> = (props: IconProps) => (
  <AddIcon {...props} />
)
export const Minus: StoryFn<IconProps> = (props: IconProps) => (
  <MinusIcon {...props} />
)
export const Plus: StoryFn<IconProps> = (props: IconProps) => (
  <PlusIcon {...props} />
)
export const Upload: StoryFn<IconProps> = (props: IconProps) => (
  <UploadIcon {...props} />
)
export const Delete: StoryFn<IconProps> = (props: IconProps) => (
  <DeleteIcon {...props} />
)
export const FileWord: StoryFn<IconProps> = (props: IconProps) => (
  <FileWordIcon {...props} />
)
export const FileDefault: StoryFn<IconProps> = (props: IconProps) => (
  <FileDefaultIcon {...props} />
)
export const FileVideo: StoryFn<IconProps> = (props: IconProps) => (
  <FileVideoIcon {...props} />
)
export const FileExcel: StoryFn<IconProps> = (props: IconProps) => (
  <FileExcelIcon {...props} />
)
export const FileMusic: StoryFn<IconProps> = (props: IconProps) => (
  <FileMusicIcon {...props} />
)
export const FilePdf: StoryFn<IconProps> = (props: IconProps) => (
  <FilePdfIcon {...props} />
)
export const FilePicture: StoryFn<IconProps> = (props: IconProps) => (
  <FilePictureIcon {...props} />
)
export const FileWPS: StoryFn<IconProps> = (props: IconProps) => (
  <FileWPSIcon {...props} />
)
export const FilePPT: StoryFn<IconProps> = (props: IconProps) => (
  <FilePPTIcon {...props} />
)
export const Pen: StoryFn<IconProps> = (props: IconProps) => (
  <PenIcon {...props} />
)
export const PreDouble: StoryFn<IconProps> = (props: IconProps) => (
  <PreDoubleIcon {...props} />
)
export const NextDouble: StoryFn<IconProps> = (props: IconProps) => (
  <NextDoubleIcon {...props} />
)
export const SorterDefault: StoryFn<IconProps> = (props: IconProps) => (
  <SorterDefaultIcon {...props} />
)
export const SorterUp: StoryFn<IconProps> = (props: IconProps) => (
  <SorterUpIcon {...props} />
)
export const SorterDown: StoryFn<IconProps> = (props: IconProps) => (
  <SorterDownIcon {...props} />
)

export const Filter: StoryFn<IconProps> = (props: IconProps) => (
  <FilterIcon {...props} />
)
export const Time: StoryFn<IconProps> = (props: IconProps) => (
  <TimeIcon {...props} />
)
export const Calendar: StoryFn<IconProps> = (props: IconProps) => (
  <CalendarIcon {...props} />
)

export const DragPoint: StoryFn<IconProps> = (props: IconProps) => (
  <DragPointIcon {...props} />
)

export const Leaf: StoryFn<IconProps> = (props: IconProps) => (
  <LeafIcon {...props} />
)
export const Result403: StoryFn<IconProps> = (props: IconProps) => (
  <Result403Icon {...props} />
)
export const Result404: StoryFn<IconProps> = (props: IconProps) => (
  <Result404Icon {...props} />
)
export const Result500: StoryFn<IconProps> = (props: IconProps) => (
  <Result500Icon {...props} />
)

export const Bug: StoryFn<IconProps> = (props: IconProps) => (
  <BugIcon {...props} />
)

export const WindowLeft: StoryFn<IconProps> = (props: IconProps) => (
  <WindowLeftIcon {...props} />
)

export const WindowRight: StoryFn<IconProps> = (props: IconProps) => (
  <WindowRightIcon {...props} />
)

export const WindowBottom: StoryFn<IconProps> = (props: IconProps) => (
  <WindowBottomIcon {...props} />
)

export const Array: StoryFn<IconProps> = (props: IconProps) => (
  <ArrayIcon {...props} />
)

export const Component: StoryFn<IconProps> = (props: IconProps) => (
  <ComponentIcon {...props} />
)

export const Function: StoryFn<IconProps> = (props: IconProps) => (
  <FunctionIcon {...props} />
)

export const Null: StoryFn<IconProps> = (props: IconProps) => (
  <NullIcon {...props} />
)

export const Number: StoryFn<IconProps> = (props: IconProps) => (
  <NumberIcon {...props} />
)

// Can not use `Object` as variable name, `Object` may be treated as
// keyword and cause icon story crash
export const Object_Icon: StoryFn<IconProps> = (props: IconProps) => (
  <ObjectIcon {...props} />
)
Object_Icon.storyName = "Object"

export const String: StoryFn<IconProps> = (props: IconProps) => (
  <StringIcon {...props} />
)

export const Drag: StoryFn<IconProps> = (props: IconProps) => (
  <DragIcon {...props} />
)

export const Slash: StoryFn<IconProps> = (props: IconProps) => (
  <SlashIcon {...props} />
)

export const Docs: StoryFn<IconProps> = (props: IconProps) => (
  <DocsIcon {...props} />
)

export const Reset: StoryFn<IconProps> = (props: IconProps) => (
  <ResetIcon {...props} />
)

export const TextAlignLeft: StoryFn<IconProps> = (props: IconProps) => (
  <TextAlignLeftIcon {...props} />
)

export const TextAlignRight: StoryFn<IconProps> = (props: IconProps) => (
  <TextAlignRightIcon {...props} />
)

export const TextAlignCenter: StoryFn<IconProps> = (props: IconProps) => (
  <TextAlignCenterIcon {...props} />
)

export const HorizontalStart: StoryFn<IconProps> = (props: IconProps) => (
  <HorizontalStartIcon {...props} />
)

export const HorizontalCenter: StoryFn<IconProps> = (props: IconProps) => (
  <HorizontalCenterIcon {...props} />
)

export const HorizontalEnd: StoryFn<IconProps> = (props: IconProps) => (
  <HorizontalEndIcon {...props} />
)
export const HorizontalFull: StoryFn<IconProps> = (props: IconProps) => (
  <HorizontalFullIcon {...props} />
)
export const VerticalStart: StoryFn<IconProps> = (props: IconProps) => (
  <VerticalStartIcon {...props} />
)

export const VerticalCenter: StoryFn<IconProps> = (props: IconProps) => (
  <VerticalCenterIcon {...props} />
)

export const VerticalEnd: StoryFn<IconProps> = (props: IconProps) => (
  <VerticalEndIcon {...props} />
)

export const Fx: StoryFn<IconProps> = (props: IconProps) => (
  <FxIcon {...props} />
)

export const FullScreen: StoryFn<IconProps> = (props: IconProps) => (
  <FullScreenIcon {...props} />
)

export const Exit: StoryFn<IconProps> = (props: IconProps) => (
  <ExitIcon {...props} />
)

export const HeartOutline: StoryFn<IconProps> = (props: IconProps) => (
  <HeartOutlineIcon {...props} />
)

export const StarOutLine: StoryFn<IconProps> = (props: IconProps) => (
  <StartOutlineIcon {...props} />
)

export const BarChart: StoryFn<IconProps> = (props: IconProps) => (
  <BarChartIcon {...props} />
)
export const LineChart: StoryFn<IconProps> = (props: IconProps) => (
  <LineChartIcon {...props} />
)
export const ScatterPointer: StoryFn<IconProps> = (props: IconProps) => (
  <ScatterPlotIcon {...props} />
)
export const PieChart: StoryFn<IconProps> = (props: IconProps) => (
  <PieChartIcon {...props} />
)
export const Lock: StoryFn<IconProps> = (props: IconProps) => (
  <LockIcon {...props} />
)

export const Unlock: StoryFn<IconProps> = (props: IconProps) => (
  <UnlockIcon {...props} />
)

export const Download: StoryFn<IconProps> = (props: IconProps) => (
  <DownloadIcon {...props} />
)
