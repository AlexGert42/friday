import {Switch, SwitchProps} from 'antd';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';
import React from 'react';
import styles from './SwitchCustom.module.scss'

type SwitchType = SwitchProps & {
    switchHendler: (value: boolean) => void
}

export const SwitchCustom: React.FC<SwitchType> = ({
                                                       className,
                                                       switchHendler,
                                                       ...restProps

                                                   }) => {


    const finalClassName = `${styles.switch} ${className}`

    return (
        <Switch
            className={finalClassName}
            checkedChildren={<CheckOutlined/>}
            unCheckedChildren={<CloseOutlined/>}
            onChange={switchHendler}
            defaultChecked
            {...restProps}
        />
    )
}