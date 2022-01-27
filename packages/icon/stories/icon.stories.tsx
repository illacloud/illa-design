import * as React from "react"
import { Meta, Story } from "@storybook/react"
import {
  CloseIcon,
  CopyIcon,
  IconProps,
  ImageDefaultIcon,
  LinkIcon,
  LoadingIcon,
  PersonIcon,
  EyeOnIcon,
  EyeOffIcon,
  ErrorIcon,
  SearchIcon,
  RightIcon,
  EmptyIcon,
} from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",
  decorators: [withTests({ results })],
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
export const ImageDefault: Story<IconProps> = (props) => <ImageDefaultIcon {...props} />
export const Loading: Story<IconProps> = (props) => <LoadingIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />
export const EyeOn: Story<IconProps> = (props) => <EyeOnIcon {...props} />
export const EyeOff: Story<IconProps> = (props) => <EyeOffIcon {...props} />
export const Search: Story<IconProps> = (props) => <SearchIcon {...props} />
export const Error: Story<IconProps> = (props) => <ErrorIcon {...props} />
export const Link: Story<IconProps> = (props) => <LinkIcon {...props} />
export const Right: Story<IconProps> = (props) => <RightIcon {...props} />
export const Empty: Story<IconProps> = (props) => <EmptyIcon {...props} />
