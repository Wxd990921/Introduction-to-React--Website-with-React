import { Menu } from 'antd';
import styles from './Styles/Base.scss'

function Header() {
        return (
            <Header>
                <div className={styles.logo} />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">电影</Menu.Item>
                    <Menu.Item key="2">关于</Menu.Item>
                </Menu>
            </Header>
        )
    }


export default Header;