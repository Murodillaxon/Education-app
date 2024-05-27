// src/components/Sidebar.js
import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button, Select } from 'antd';
import {
  UsergroupAddOutlined,
  UserOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;
const { Option } = Select;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const languageKey = 'selectedLanguage'; // Ключ для хранения выбранного языка

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value); // Изменение языка в i18next
    localStorage.setItem(languageKey, value); // Сохранение выбранного языка в локальное хранилище
  };
  
  

  const sidebarContent = (
    <>
      <div className="logo" style={{ margin: '16px', textAlign: 'center', color: 'white' }}>
        {collapsed ? 'S & B' : 'Smart Brain'}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
          <Link to="/groups">{t('groups')}</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/teachers">{t('teachers')}</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <Link to="/students">{t('students')}</Link>
        </Menu.Item>
      </Menu>
    </>
  );

  return (
    <>
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
        <Select defaultValue={i18n.language} style={{ width: 120 }} onChange={handleLanguageChange}>
          <Option value="en">English</Option>
          <Option value="ru">Русский</Option>
        </Select>
      </div>
      {isMobile ? (
        <>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            style={{  position: 'fixed', top: 16, left: 16, zIndex: 1000 }}
          />
          <Drawer
            title=""
            placement="left"
            closable={true}
            onClose={toggleDrawer}
            visible={drawerVisible}
            drawerStyle={{ backgroundColor: '#001529', color: 'white' }}
            headerStyle={{ backgroundColor: '#001529', color: 'white' }}
          >
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ minHeight: '100vh' }}>
          {sidebarContent}
          <div className="trigger" onClick={toggleCollapse} style={{ textAlign: 'center', padding: '10px', cursor: 'pointer', color: 'white' }}>
            {collapsed ? <MenuUnfoldOutlined title="Открыть" /> : <MenuFoldOutlined title="Скрыть" />}
          </div>
        </Sider>
      )}
    </>
  );
};

export default Sidebar;
