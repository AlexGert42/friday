import {Input, InputProps} from 'antd'
import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import styles from './InputSpan.module.scss'


type InputSpanType = InputProps & {
    maxLength?: number
    setValueInput: (value: string) => void
}


export const InputSpan: React.FC<InputSpanType> = (
    {
        className,
        maxLength = 30,
        setValueInput,
        ...restProps
    }
) => {
    const [flag, setFlag] = useState<boolean>(true)
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string>('')

    const chengeHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const pressHendler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (text.trim()) {
            setError('')
            if (text.trim().length >= maxLength) {
                setError(`Максимальная длинна строки ${maxLength}`)
            } else if (e.key === 'Enter') {
                setFlag(false)
                setValueInput(text)
                setError('')
            }
        } else {
            setError('Введите текст')
        }

    }

    const dblClickHendler = () => {
        setFlag(true)
    }

    const finalClassName = `${styles.input} ${className}`

    return (
        <>
            {
                flag ?
                    <>
                        <Input
                            className={finalClassName}
                            type="text"
                            value={text}
                            onChange={chengeHendler}
                            onKeyUp={pressHendler}
                            {...restProps}
                        />
                        {error && <span className={styles.error}>{error}</span>}
                    </>
                    :
                    <span
                        className={styles.input__text}
                        onDoubleClick={dblClickHendler}
                    >{text}
                    </span>
            }
        </>
    )
}









