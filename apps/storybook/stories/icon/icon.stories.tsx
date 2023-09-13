import { Meta, StoryFn } from "@storybook/react"
import {
  Col,
  DocsIcon,
  FxIcon,
  Row,
  Space,
  AddIcon,
  AlignBottomIcon,
  AlignHCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  AlignVCenterIcon,
  AttachmentIcon,
  BugIcon,
  CalendarIcon,
  CameraIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ClearIcon,
  CloseIcon,
  CommentIcon,
  ContributeIcon,
  CopyIcon,
  DeleteIcon,
  DeleteOutlineIcon,
  DependencyIcon,
  DoubtIcon,
  DownIcon,
  DownloadIcon,
  DragPointIcon,
  EmailIcon,
  EmptyIcon,
  ErrorCircleIcon,
  ErrorIcon,
  ExitIcon,
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
  FilterIcon,
  FolderIcon,
  FullScreenIcon,
  HomeIcon,
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalFullIcon,
  HorizontalStartIcon,
  IconProps,
  ImageDefaultIcon,
  InfoCircleIcon,
  InfoIcon,
  LikeFillIcon,
  LikeOutlineIcon,
  LinkIcon,
  LoadingIcon,
  LockIcon,
  MinusIcon,
  MoreIcon,
  NextDoubleIcon,
  NextIcon,
  OpenWindowIcon,
  PenIcon,
  PeopleIcon,
  PlayFillIcon,
  PlayOutlineIcon,
  PlusIcon,
  PreviousDoubleIcon,
  PreviousIcon,
  ReduceIcon,
  RefreshIcon,
  ResetIcon,
  SearchIcon,
  SettingIcon,
  SlashIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  SortIcon,
  StarFillIcon,
  StarOutlineIcon,
  StartOutlineIcon,
  StokeWidthIcon,
  SuccessCircleIcon,
  SuccessIcon,
  SwitchIcon,
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
  VideoPlayIcon,
  WarningCircleIcon,
  WarningIcon,
  WindowBottomIcon,
  WindowLeftIcon,
  WindowMinimizeIcon,
  WindowRightIcon,
  ImageErrorIcon,
  ForkIcon,
} from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/Icon",
} as Meta

export const All: StoryFn<IconProps> = (props: IconProps) => (
  <>
    <Row w="100%">
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CloseIcon {...props} />
          <span>Close</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CaretDownIcon {...props} />
          <span>CaretDown</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CaretRightIcon {...props} />
          <span>CaretRight</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CaretLeftIcon {...props} />
          <span>CaretLeft</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SlashIcon {...props} />
          <span>Slash</span>
        </Space>
      </Col>
    </Row>
    <Row w="100%">
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SuccessCircleIcon {...props} />
          <span>Close</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ErrorCircleIcon {...props} />
          <span>ErrorCircle</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WarningCircleIcon {...props} />
          <span>WarningCircle</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <InfoCircleIcon {...props} />
          <span>InfoCircle</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DeleteIcon {...props} />
          <span>Delete</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DeleteOutlineIcon {...props} />
          <span>DeleteOutline</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <NextIcon {...props} />
          <span>Next</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PreviousIcon {...props} />
          <span>Previous</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <UpIcon {...props} />
          <span>Up</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DownIcon {...props} />
          <span>Down</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PreviousDoubleIcon {...props} />
          <span>PreviousDouble</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <NextDoubleIcon {...props} />
          <span>NextDouble</span>
        </Space>
      </Col>
    </Row>
    <Row w="100%">
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PlusIcon {...props} />
          <span>Plus</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <MinusIcon {...props} />
          <span>Minus</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <UploadIcon {...props} />
          <span>Upload</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DownloadIcon {...props} />
          <span>Download</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SearchIcon {...props} />
          <span>Search</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <MoreIcon {...props} />
          <span>More</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SwitchIcon {...props} />
          <span>Switch</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <LockIcon {...props} />
          <span>Lock</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <UnlockIcon {...props} />
          <span>Unlock</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ClearIcon {...props} />
          <span>Clear</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <LoadingIcon {...props} />
          <span>Loading</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DragPointIcon {...props} />
          <span>DragPoint</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <RefreshIcon {...props} />
          <span>Refresh</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FolderIcon {...props} />
          <span>Folder</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PeopleIcon {...props} />
          <span>People</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CopyIcon {...props} />
          <span>Copy</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SuccessIcon {...props} />
          <span>Success</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ErrorIcon {...props} />
          <span>Error</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WarningIcon {...props} />
          <span>Warning</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AddIcon {...props} />
          <span>Add</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ReduceIcon {...props} />
          <span>Reduce</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PenIcon {...props} />
          <span>Pen</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CalendarIcon {...props} />
          <span>Calendar</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <TimeIcon {...props} />
          <span>Time</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <InfoIcon {...props} />
          <span>Info</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <StartOutlineIcon {...props} />
          <span>StartOutline</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <StarFillIcon {...props} />
          <span>StarFill</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <StarOutlineIcon {...props} />
          <span>StarOutline</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <LikeOutlineIcon {...props} />
          <span>LikeOutline</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <LikeFillIcon {...props} />
          <span>LikeFill</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CommentIcon {...props} />
          <span>Comment</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <HomeIcon {...props} />
          <span>Home</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FilterIcon {...props} />
          <span>Filter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SortIcon {...props} />
          <span>Sort</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WindowLeftIcon {...props} />
          <span>WindowLeft</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WindowRightIcon {...props} />
          <span>WindowRight</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WindowBottomIcon {...props} />
          <span>WindowBottom</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <OpenWindowIcon {...props} />
          <span>OpenWindow</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ExitIcon {...props} />
          <span>Exit</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignLeftIcon {...props} />
          <span>AlignLeft</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignRightIcon {...props} />
          <span>AlignRight</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignHCenterIcon {...props} />
          <span>AlignHCenter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignTopIcon {...props} />
          <span>AlignTop</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignBottomIcon {...props} />
          <span>AlignBottom</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AlignVCenterIcon {...props} />
          <span>AlignVCenter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <StokeWidthIcon {...props} />
          <span>StokeWidth</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FxIcon {...props} />
          <span>Fx</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <TextAlignLeftIcon {...props} />
          <span>TextAlignLeft</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <TextAlignCenterIcon {...props} />
          <span>TextAlignCenter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <TextAlignRightIcon {...props} />
          <span>TextAlignRight</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <HorizontalStartIcon {...props} />
          <span>HorizontalStart</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <HorizontalCenterIcon {...props} />
          <span>HorizontalCenter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <HorizontalEndIcon {...props} />
          <span>HorizontalEnd</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <VerticalStartIcon {...props} />
          <span>VerticalStart</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <VerticalCenterIcon {...props} />
          <span>VerticalCenter</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <VerticalEndIcon {...props} />
          <span>VerticalEnd</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <HorizontalFullIcon {...props} />
          <span>HorizontalFull</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FullScreenIcon {...props} />
          <span>FullScreen</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ResetIcon {...props} />
          <span>Reset</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DependencyIcon {...props} />
          <span>Dependency</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SettingIcon {...props} />
          <span>Setting</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <VideoPlayIcon {...props} />
          <span>VideoPlay</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <EmailIcon {...props} />
          <span>Email</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <LinkIcon {...props} />
          <span>Link</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <CameraIcon {...props} />
          <span>Camera</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <EyeOnIcon {...props} />
          <span>EyeOn</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <EyeOffIcon {...props} />
          <span>EyeOff</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <BugIcon {...props} />
          <span>Bug</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DocsIcon {...props} />
          <span>Docs</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ImageDefaultIcon {...props} />
          <span>ImageDefault</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ImageErrorIcon {...props} />
          <span>ImageError</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SorterDefaultIcon {...props} />
          <span>Sorter Default</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SorterUpIcon {...props} />
          <span>Sorter Up</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <SorterDownIcon {...props} />
          <span>Sorter Down</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <DoubtIcon {...props} />
          <span>Doubt</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <AttachmentIcon {...props} />
          <span>Attachment</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <WindowMinimizeIcon {...props} />
          <span>Window Minimize</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ContributeIcon {...props} />
          <span>Contribute</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PlayFillIcon {...props} />
          <span>PlayFill</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <PlayOutlineIcon {...props} />
          <span>PlayOutline</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <ForkIcon {...props} />
          <span>Fork</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <EmptyIcon {...props} />
          <span>Empty</span>
        </Space>
      </Col>
    </Row>
    <Row>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FilePictureIcon {...props} />
          <span>File Picture</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FileDefaultIcon {...props} />
          <span>File Default</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FileMusicIcon {...props} />
          <span>File Music</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FileVideoIcon {...props} />
          <span>File Video</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FilePdfIcon {...props} />
          <span>File PDF</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FileWordIcon {...props} />
          <span>File Word</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FileExcelIcon {...props} />
          <span>File Excel</span>
        </Space>
      </Col>
      <Col span={2}>
        <Space direction="vertical" align="center" w="100%" pd="16px 0">
          <FilePPTIcon {...props} />
          <span>File PPT</span>
        </Space>
      </Col>
    </Row>
  </>
)
