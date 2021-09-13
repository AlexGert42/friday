import Button, {ButtonProps} from 'antd/lib/button'
import React from 'react'
import styles from './ButtonCustom.module.scss'




type ButtonPropsType = ButtonProps & {
    clickHendler: () => void
}

export const ButtonCustom: React.FC<ButtonPropsType> = (
    {
        className,
        clickHendler,
        ...restProps
    }
) => {

    const finalClassName = `${styles.btn} ${className}`
    
    return (
        <Button
            onClick={clickHendler}
            className={finalClassName}
            {...restProps}
        />
    )
}

