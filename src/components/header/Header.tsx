import React from 'react'
import {Layout, Menu} from "antd";
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom';


export const Header: React.FC = () => {

    return (
        <Layout.Header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__logo}>Friday</div>
                <Menu className={styles.header__menu} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item className={styles.header__menu_item} key={1}>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item className={styles.header__menu_item} key={2}>
                        <NavLink to={'/test'}>Test</NavLink>
                    </Menu.Item>
                    <Menu.Item className={styles.header__menu_item} key={3}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        </Layout.Header>
    )
}