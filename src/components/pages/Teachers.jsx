import React, { useState, useEffect } from 'react';
import { List, Avatar, Spin, Alert, Button, Pagination } from 'antd';
import axios from 'axios';
import RegisterTeacherDrawer from './registTeacher';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
  const { t } = useTranslation();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchTeachers = async (page = 1, size = 10) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/teacher/getAllTeachers?page=${page}&pageSize=${size}`);
      setTeachers(response.data.teachers);
      setTotal(response.data.total);
    } catch (err) {
      setError(t('Failed to fetch teachers'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers(currentPage, pageSize);
  }, [currentPage, pageSize, t]);

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSuccess = () => {
    setDrawerVisible(false);
    fetchTeachers(currentPage, pageSize); // Refresh the list after successful registration
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    fetchTeachers(page, size);
  };

  if (loading) {
    return <Spin tip={t("Loading...")} />;
  }

  if (error) {
    return <Alert message={t("Error")} description={error} type="error" showIcon />;
  }

  return (
    <div>
      <h1>{t("Teachers")}</h1>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={openDrawer}
        className="create-button"
      >
        {t("Register Teacher")}
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={teachers}
        renderItem={(teacher) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{teacher.name.charAt(0)}</Avatar>}
              title={`${teacher.name} ${teacher.lastName}`}
              description={`${t("Profession")}: ${teacher.Profession}, ${t("Phone")}: ${teacher.PhoneNumber}`}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
      />
      <RegisterTeacherDrawer visible={drawerVisible} onClose={closeDrawer} onSuccess={handleSuccess} />
    </div>
  );
};

export default Teachers;
