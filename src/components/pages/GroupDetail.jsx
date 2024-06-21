import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Spin, notification, Button, Modal, List } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const GroupDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false); 
  const [students, setStudents] = useState([]); // Состояние для списка учеников

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/group/getgroupById/${id}`);
        setGroup(response.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching group:", error);
        setLoading(false);
        notification.error({
          message: t("Error"),
          description: t("Failed to fetch group details"),
        });
      }
    };

    fetchGroup();
  }, [id, t]);

  // Функция для открытия модального окна
  const openModal = () => {
    fetchStudents(); // Загрузка списка учеников перед открытием модального окна
    setModalVisible(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalVisible(false);
  };

  // Функция для загрузки списка учеников
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/student/getAllStudents`);
      setStudents(response.data?.students);
    } catch (error) {
      console.error("Error fetching students:", error);
      notification.error({
        message: t("Error"),
        description: t("Failed to fetch students"),
      });
    }
  };

  // Функция для обновления группы с добавлением ученика
  const updateGroupWithStudent = async (studentId) => {
    try {
      const updatedCapacity = [...group.capacity, studentId]; // Добавляем нового ученика к текущему состоянию capacity
      const response = await axios.put(`http://localhost:5000/group/updateGroup/${id}`, {
        capacity: updatedCapacity,
      });
      setGroup(response.data);
      notification.success({
        message: t("Success"),
        description: t("Student added to the group successfully"),
      });
    } catch (error) {
      console.error("Error updating group with student:", error);
      notification.error({
        message: t("Error"),
        description: t("Failed to add student to the group"),
      });
    }
  };

  if (loading) {
    return <Spin />;
  }

  if (!group) {
    return <div>{t("Group not found")}</div>;
  }

  return (
    <Card
      title={<Title level={4}>{group.groupName}</Title>}
      bordered={false}
      style={{ width: '30%', height: '100%' }}
    >
      <p>
        <Text strong>{t("Teacher")}:</Text> {group.groupTeacher}
      </p>
      {/* Остальной контент группы */}
      <Button type="primary" onClick={openModal}>{t("Add Student")}</Button>
      {/* Модальное окно выбора учеников */}
      <Modal
        title={t("Select Student")}
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <List
          dataSource={students}
          renderItem={(student) => (
            <List.Item>
              <Button type="link" onClick={() => updateGroupWithStudent(student._id)}>
                {student.Fullname}
              </Button>
            </List.Item>
          )}
        />
      </Modal>
    </Card>
  );
};

export default GroupDetail;
