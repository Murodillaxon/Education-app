import React from "react";
import {
  Drawer,
  Radio,
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  notification,
} from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { Option, OptGroup } = Select;

const RegisterTeacherDrawer = ({ visible, onClose, onSuccess }) => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/teacher/createTeacher", values);
      notification.success({
        message: t("Success"),
        description: t("Teacher registered successfully"),
      });
      onSuccess();
      form.resetFields();
    } catch (err) {
      console.error("Failed to register teacher:", err);
      const errorMessage = err.response ? err.response.data.error : t("Failed to register teacher");
      notification.error({
        message: t("Error"),
        description: errorMessage,
      });
    }
  };

  const currentLang = i18n.language;
  const subjects = t("subjects", { returnObjects: true });

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      visible={visible}
      height="100%"
      width="450px"
      bodyStyle={{ padding: "16px", backgroundColor: "#f0f0f0" }}
      headerStyle={{ backgroundColor: "#001529", color: "#fff" }}
      drawerStyle={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label={t("First Name")}
          rules={[
            { required: true, message: t("Please enter the first name") },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label={t("Last Name")}
          rules={[{ required: true, message: t("Please enter the last name") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Patronymic"
          label={t("Patronymic")}
          rules={[
            { required: true, message: t("Please enter the patronymic") },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("ID Number")}
          rules={[{ required: true, message: t("Please enter the ID number") }]}
        >
          <Input.Group compact>
            <Form.Item name="idSeries" noStyle rules={[{ required: true, pattern: /^[A-Za-z]{2}$/, message: t("Please enter 2 letters") }]}>
              <Input style={{ width: '20%' }} maxLength={2} placeholder="AA" />
            </Form.Item>
            <Form.Item name="idNumber" noStyle rules={[{ required: true, pattern: /^\d{7}$/, message: t("Please enter 7 digits") }]}>
              <Input style={{ width: '80%' }} maxLength={7} placeholder="1234567" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          name="PhoneNumber"
          label={t("Phone Number")}
          rules={[{ required: true, message: t("Please enter the phone number") }]}
        >
          <PhoneInput
            country={"uz"}
            onlyCountries={["uz"]}
            masks={{ uz: "(..) ...-..-.." }}
            inputStyle={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="BirthDate"
          label={t("Birth Date")}
          rules={[
            { required: true, message: t("Please enter the birth date") },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="Address"
          label={t("Address")}
          rules={[{ required: true, message: t("Please enter the address") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Sex"
          label={t("Sex")}
          rules={[{ required: true, message: t("Please select the sex") }]}
        >
          <Radio.Group>
            <Radio value="Male">{t("Male")}</Radio>
            <Radio value="Female">{t("Female")}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="Percent"
          label={t("Percent")}
          rules={[{ required: true, message: t("Please enter the percent") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Profession"
          label={t("Profession")}
          rules={[
            { required: true, message: t("Please enter the profession") },
          ]}
        >
          <Select style={{ width: "100%" }} allowClear showSearch>
            {Object.keys(subjects).map((category) => (
              <OptGroup key={category} label={category}>
                {subjects[category].map((subject) => (
                  <Option
                    key={subject[currentLang]}
                    value={subject[currentLang]}
                  >
                    {subject[currentLang]}
                  </Option>
                ))}
              </OptGroup>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("Register")}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default RegisterTeacherDrawer;

