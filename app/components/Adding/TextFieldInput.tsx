import React, { useState, RefObject, Dispatch, SetStateAction } from 'react'
import {
    StyleSheet, TextInput, TextStyle,
    NativeSyntheticEvent, TextInputFocusEventData
} from 'react-native'
import { useRef } from 'react'
interface TextFiledProps {
    setState: Dispatch<SetStateAction<string>>,
    refx: RefObject<TextInput>,
    placeHolder: string,
    highlightColor: 'red' | 'tomato' | 'greeen',
    inputStyle?: TextStyle
}
const TextFieldInput = ({ setState, refx, inputStyle,
    placeHolder, highlightColor }: TextFiledProps) => {
    const [bottomBorderColor, setbottomBorderColor] = useState('#333')
    const [bottomBorderWidth, setBottomBorderWidth] = useState(1)
    const debounce = useRef(0)
    const onFocusHandler = (event?: NativeSyntheticEvent<TextInputFocusEventData>): void => {
        setbottomBorderColor(highlightColor)
        setBottomBorderWidth(2)
    }
    const onBlurHandler = (event?: NativeSyntheticEvent<TextInputFocusEventData>): void => {
        setbottomBorderColor('#333')
        setBottomBorderWidth(1)
    }
    const onChangeTextHandler = (text: string): void => {
        clearTimeout(debounce.current)
        debounce.current = setTimeout(() => {
            setState(text)
        }, 450);
    }
    return (
        <TextInput
            onChangeText={onChangeTextHandler}
            ref={refx}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler} style={{
                ...styles.input,
                ...inputStyle,
                borderBottomColor: bottomBorderColor,
                borderBottomWidth: bottomBorderWidth
            }} placeholder={placeHolder}
        />
    )
}

export default TextFieldInput

const styles = StyleSheet.create({
    input: {
        fontWeight: '500',
        height: 36,
        width: '100%',
        borderBottomColor: "#333",
        borderBottomWidth: 1
    }
})
