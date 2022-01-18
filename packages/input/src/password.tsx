/** @jsxImportSource @emotion/react */
import * as React from "react"
import {ChangeEvent, forwardRef, useEffect, useState, ReactNode} from "react"
import { PasswordProps } from "./interface"
import { omit } from "@illa-design/system"
import { EyeOnIcon, EyeOffIcon } from "@illa-design/icon"
import {
    applyContainerCss,
    applyInputContainer,
    pointerStyle,
} from "./style"
import { InputElement } from "./input-element"
import * as events from "events"

export const Password = forwardRef<HTMLDivElement, PasswordProps>((props, ref) => {

    const {
        allowClear,
        error,
        disabled,
        placeholder,
        invisibleButton = true,
        size = "medium",
        variant = "outline",
        ...rest
    } = props

    const otherProps = omit(rest, [
        "defaultValue",
    ])

    const [visibility, setVisibility] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");
    let suffix: ReactNode

    const stateValue = { error, disabled, focus, variant, size, }
    const passwordProp = {
        ...rest,
        type: visibility ? "text" : "password",
    }

    const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
        if (!('value' in props) || !props.value) {
            setValue(v);
        }
        props.onChange && props.onChange(e);
    };


    return <div ref={ref} {...otherProps}>
    <span css={applyContainerCss(variant)}>
        <span css={applyInputContainer(stateValue)}>
            <InputElement
                {...passwordProp}
                onFocus={(e) => {
                    setFocus(true);
                    props.onFocus && props.onFocus(e);
                }}
                onBlur={(e) => {
                    setFocus(false);
                    props.onBlur && props.onBlur(e);
                }}
                value={value}
                onValueChange={onValueChange}
            />
            {invisibleButton ?
                (<span css={pointerStyle} onClick={() => {
                    setVisibility(!visibility)
                }}>
                {visibility ? (<EyeOnIcon/>) : (<EyeOffIcon/>)}
            </span>) : null}
      </span>
    </span>
    </div>

})
