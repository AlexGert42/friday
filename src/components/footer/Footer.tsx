import React from 'react'
import {Layout} from "antd";
import styles from './Footer.module.scss'


export const Footer: React.FC = () => {

    return (
        <Layout.Footer className={styles.footer}>
            Footer
        </Layout.Footer>
    )
}