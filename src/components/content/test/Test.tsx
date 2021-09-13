import React from 'react';
import {ButtonCustom} from './button/ButtonCustom';
import {InputSpan} from './inputSpan/InputSpan';
import {SwitchCustom} from "./switchCustom/SwitchCustom";
import styles from './Test.module.scss'


export const Test: React.FC = () => {

    const valueHendler = (value: string) => {
        console.log(value)
    }
    const clickHendler = () => {
        console.log('ButtonCustom')
    }
    const switchHendler = (value: boolean) => {
        console.log(value)
    }

    return (
        <div className={styles.test}>
            <div className={styles.test__block}>
                <ButtonCustom type="primary" clickHendler={clickHendler}>Button</ButtonCustom>
            </div>
            <div className={styles.test__block}>
                <InputSpan setValueInput={valueHendler}/>
            </div>
            <div className={styles.test__block}>
                <SwitchCustom switchHendler={switchHendler}/>
            </div>
        </div>
    )
}

// 1) yarn add gh-pages --dev