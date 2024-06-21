import React, { useState, useEffect } from 'react';
import { List, Avatar, Spin, Alert, Button, Pagination } from 'antd';
import axios from 'axios';
import StudentRegistrationModal from './createStudent';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Students = () => {
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchStudents = async (page = 1, size = 10) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/student/getAllStudents?page=${page}&pageSize=${size}`);
      setStudents(response.data.students);
      setTotal(response.data.total);
    } catch (err) {
      setError(t('Failed to fetch students'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents(currentPage, pageSize);
  }, [currentPage, pageSize, t]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSuccess = () => {
    setModalVisible(false);
    fetchStudents(currentPage, pageSize); // Refresh the list after successful registration
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    fetchStudents(page, size);
  };

  if (loading) {
    return <Spin tip={t("Loading...")} />;
  }

  if (error) {
    return <Alert message={t("Error")} description={error} type="error" showIcon />;
  }

  return (
    <div>
      <h1>{t("Students")}</h1>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={openModal}
        className="create-button"
      >
        {t("Register Student")}
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={students}
        renderItem={(student) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{student.Fullname.charAt(0)}</Avatar>}
              title={`${student.Fullname}`}
              description={`${t("Phone")}: ${student.PhoneNumber}, ${t("Parent's Name")}: ${student.ParentFullName}, ${t("Parent's Phone")}: ${student.ParentPhoneNumber}`}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
        showSizeChanger
        onShowSizeChange={handlePageChange}
      />
      <StudentRegistrationModal visible={modalVisible} onClose={closeModal} onSuccess={handleSuccess} />
    </div>
  );
};

export default Students;
