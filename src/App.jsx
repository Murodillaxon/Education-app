import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Sidebar from './components/Slidebar';
import Teachers from './components/pages/Teachers';
import Students from './components/pages/Students';
import './App.css';
import Groups from './components/pages/Groups';

const { Header, Content } = Layout;

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path="/groups" element={<Groups/>} /> 
            <Route path="/teachers" component={Teachers} />
            <Route path="/students" component={Students} />
            <Route path="/" element={<Groups />} /> 
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </I18nextProvider>
);

export default App;
