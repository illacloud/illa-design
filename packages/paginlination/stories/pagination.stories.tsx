import {Avatar, AvatarProps} from "@illa-design/avatar/src";
import {Meta, Story} from "@storybook/react";
import {BsFacebook} from "react-icons/bs";
import * as React from "react";
import {Pagination} from "../src/pagination";
import {PaginationProps} from "../src/interface";

export default {
    title: "DATA DISPLAY/Pagination",
    component: Pagination,

    argTypes: {
        icon: {
            control: false,
        },
    },
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Basic = Template.bind({
    icon: <BsFacebook/>,
})