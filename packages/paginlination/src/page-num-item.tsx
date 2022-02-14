/** @jsxImportSource @emotion/react */
import {forwardRef} from "react";
import {PageNumProps} from "./interface";
import {applyDefaultItemCss, applyDefaultItemWithMarginCss, applyPageNumItemSelectedCss} from "./style";


export const PageNumItem = forwardRef<HTMLSpanElement, PageNumProps>((props, ref) => {
    const {
        index,
        selected,
        isMoreIndex,
        moreIcon,
        handleClick,
        wholeDisable,
        size,
    } = props

    const itemCss = selected ? applyPageNumItemSelectedCss(wholeDisable, size) : applyDefaultItemWithMarginCss(wholeDisable, size)

    return isMoreIndex ? <span
            css={itemCss}
            onClick={() => {
                if (wholeDisable) return;
                handleClick(index)
            }}>{moreIcon}</span>
        : <span css={itemCss} onClick={() => {
            if (wholeDisable) return
            handleClick(index)
        }}>{`${index + 1}`}</span>

})