import React from 'react';
import {Layout} from "antd";
import styles from './NotFound.module.scss'
import img from '../../../styles/depositphotos_8282018-stock-photo-badge-sad-smiley.jpg'

export const NotFound: React.FC = () => {

    return (
        <Layout.Content className={styles.not_page}>
            <div>
                <h1 className={styles.not_page__title}>Error 404</h1>
                <div className={styles.not_page__subtitle}>Страница не найдена</div>
            </div>
            <img className={styles.not_page__img} src={img} alt=" "/>
        </Layout.Content>
    )
}