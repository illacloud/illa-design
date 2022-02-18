import * as React from "react"
import { Meta, Story } from "@storybook/react"
import {
  CheckmarkIcon,
  CloseIcon,
  CopyIcon,
  EmptyIcon,
  ErrorIcon,
  EyeOffIcon,
  EyeOnIcon,
  IconProps,
  ImageDefaultIcon,
  LinkIcon,
  LoadingIcon,
  PersonIcon,
  RightIcon,
  SearchIcon,
  SuccessIcon,
  WarningIcon,
  CheckmarkIcon,
  PreIcon,
  NextIcon,
  MoreIcon,
} from "../src"

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
  },
} as Meta

export const Close: Story<IconProps> = (props) => <CloseIcon {...props} />
export const Copy: Story<IconProps> = (props) => <CopyIcon {...props} />
export const ImageDefault: Story<IconProps> = (props) => (
  <ImageDefaultIcon {...props} />
)
export const Loading: Story<IconProps> = (props) => <LoadingIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />
export const EyeOn: Story<IconProps> = (props) => <EyeOnIcon {...props} />
export const EyeOff: Story<IconProps> = (props) => <EyeOffIcon {...props} />
export const Search: Story<IconProps> = (props) => <SearchIcon {...props} />
export const Link: Story<IconProps> = (props) => <LinkIcon {...props} />
export const Right: Story<IconProps> = (props) => <RightIcon {...props} />
export const Error: Story<IconProps> = (props) => <ErrorIcon {...props} />
export const Warning: Story<IconProps> = (props) => <WarningIcon {...props} />
export const WarningCircle: Story<IconProps> = (props) => (
  <WarningCircle {...props} />
)
export const Success: Story<IconProps> = (props) => <SuccessIcon {...props} />
export const Empty: Story<IconProps> = (props) => <EmptyIcon {...props} />
export const Checkmark: Story<IconProps> = (props) => (
  <CheckmarkIcon {...props} />
)
export const Pre: Story<IconProps> = (props) => <PreIcon {...props} />
export const Next: Story<IconProps> = (props) => <NextIcon {...props} />
export const More: Story<IconProps> = (props) => <MoreIcon {...props} />
