import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const StudentRegistrationModal = ({ visible, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/student/createStudent', values);
      notification.success({
        message: t('Success'),
        description: t('Student registered successfully'),
      });
      form.resetFields();
      onSuccess(); // Notify parent to refresh the student list
      onClose();
    } catch (error) {
      notification.error({
        message: t('Error'),
        description: t('Failed to register student'),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      title={t('Register Student')}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="Fullname"
          label={t('Full Name')}
          rules={[{ required: true, message: t('Please enter the full name') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="PhoneNumber"
          label={t('Phone Number')}
          rules={[{ required: true, message: t('Please enter the phone number') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="DateOfBirth"
          label={t('Date of Birth')}
          rules={[{ required: true, message: t('Please enter the date of birth') }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="ParentFullName"
          label={t("Parent's Full Name")}
          rules={[{ required: true, message: t("Please enter the parent's full name") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ParentPhoneNumber"
          label={t("Parent's Phone Number")}
          rules={[{ required: true, message: t("Please enter the parent's phone number") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {t('Register Student')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StudentRegistrationModal;
