import React, { RefObject, Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, StyleProp, TextStyle, ViewStyle } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextFieldInput from './TextFieldInput'

interface TextFiledProps {
    refs: RefObject<TextInput>[],
    inputSetStates: Dispatch<SetStateAction<string>>[],
    placeHolder: string | string[],
    iconLabelName: string,
    highlightColor: 'red' | 'tomato' | 'greeen',
    inputStyle?: TextStyle,
    defaultValue?: string[]
}
const TextFiled = ({ inputSetStates, refs, placeHolder, highlightColor,
    iconLabelName, inputStyle, defaultValue }: TextFiledProps) => {
    const overrideStyle = inputStyle ? inputStyle : {}
    return (
        <View style={styles.formGroup}>
            <View style={styles.iconLabel}>
                <Ionicons name={iconLabelName} size={24} color="#333" />
            </View>
            <View style={styles.inputWrapper}>
                {typeof placeHolder === 'string' ? (
                    <TextFieldInput
                        defaultValue={defaultValue ? defaultValue[0] : ''}
                        setState={inputSetStates[0]}
                        refx={refs[0]}
                        highlightColor={highlightColor}
                        placeHolder={placeHolder}
                        inputStyle={overrideStyle} />
                ) : (<>
                    {placeHolder.map((placeText: string, index: number) => (
                        <TextFieldInput
                            defaultValue={defaultValue ? defaultValue[index] : ''}
                            setState={inputSetStates[index]}
                            key={index}
                            refx={refs[index]}
                            highlightColor={highlightColor}
                            placeHolder={placeText}
                            inputStyle={overrideStyle} />
                    ))}
                </>)}

            </View>
        </View>
    )
}

export default TextFiled
const SCREEN_WIDTH: number = Math.round(Dimensions.get("screen").width)
const styles = StyleSheet.create({
    formGroup: {
        flexDirection: 'row',
        marginVertical: 5
    },
    iconLabel: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputWrapper: {
        width: SCREEN_WIDTH - 50 - 30,
        paddingRight: 10
    }
})
