import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  TimePicker,
  InputNumber,
  Select,
  Radio,
  notification,
} from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const CreateGroup = ({ toggleDrawer }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  useEffect(() => {
    // Fetch teachers data from the server
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/teacher/getAllTeachers");
        setTeachers(response.data?.teachers);
        setFilteredTeachers(response.data?.teachers);
        setFilteredTechnologies(Array.from(new Set(response.data?.teachers.map(teacher => teacher.Profession))));
      } catch (error) {
        console.error("Error fetching teachers:", error);
        notification.error({
          message: t("Error"),
          description: t("Failed to fetch teachers"),
        });
      }
    };

    fetchTeachers();
  }, [t]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const groupData = {
        groupName: values.groupName,
        groupTeacher: values.groupTeacher,
        pricePerDay: values.pricePerDay,
        numberRoom: values.numberRoom,
        lessonTime: {
          start: values.lessonTime[0].format("HH:mm"),
          end: values.lessonTime[1].format("HH:mm"),
        },
        oddNumbers: values.oddNumbers,
        texnology: values.texnology,
        capacity: values.capacity,
      };

      await axios.post("http://localhost:5000/group/creategroup", groupData);
      form.resetFields();
      toggleDrawer(); // Закрыть дровер после успешного создания группы
      notification.success({
        message: t("Success"),
        description: t("Group created successfully"),
      });
    } catch (error) {
      console.error("Error creating group:", error);
      notification.error({
        message: t("Error"),
        description: t("Failed to create group"),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTeacherChange = (teacherName) => {
    form.setFieldsValue({ texnology: teachers.find(teacher => teacher.name === teacherName).Profession });
    setFilteredTechnologies([teachers.find(teacher => teacher.name === teacherName).Profession]);
  };

  const handleTechnologyChange = (technology) => {
    form.setFieldsValue({ groupTeacher: teachers.find(teacher => teacher.Profession === technology).name });
    setFilteredTeachers(teachers.filter(teacher => teacher.Profession === technology));
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>{t("Create Group")}</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="groupName"
          label={t("Group Name")}
          rules={[
            { required: true, message: t("Please enter the group name") },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="groupTeacher"
          label={t("Group Teacher")}
          rules={[{ required: true, message: t("Please select the group teacher") }]}
        >
          <Select
            style={{ width: "100%" }}
            placeholder={t("Select Group Teacher")}
            onChange={handleTeacherChange}
          >
            {filteredTeachers.map((teacher) => (
              <Option key={teacher.id} value={teacher.name}>
                {teacher.name} ({t(`${teacher.Profession}`)})
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="oddNumbers"
          label={t("What days of the week")}
          valuePropName="checked"
          rules={[{ required: true, message: t("Select days of the week") }]}
        >
          <Radio.Group>
            <Radio value={t("Odd Numbers")}>{t("Odd Numbers")}</Radio>
            <Radio value={t("Even Numbers")}>{t("Even Numbers")}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="pricePerDay"
          label={t("PricePerDay")}
          rules={[
            { required: true, message: t("Please enter the price per day") },
          ]}
        >
          <InputNumber
            min={0}
            style={{ width: "100%" }}
            parser={(value) => value.replace(/[^\d]/g, "")}
          />
        </Form.Item>
        <Form.Item
          name="numberRoom"
          label={t("Number Room")}
          rules={[
            { required: true, message: t("Please enter the number room") },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lessonTime"
          label={t("Lesson Time")}
          rules={[
            { required: true, message: t("Please select the lesson time") },
          ]}
        >
          <TimePicker.RangePicker format="HH:mm" />
        </Form.Item>
        <Form.Item name="texnology" label={t("Technology")}>
          <Select
            style={{ width: "100%" }}
            placeholder={t("Select Technology")}
            onChange={handleTechnologyChange}
          >
            {filteredTechnologies.map((tech, index) => (
              <Option key={index} value={tech}>
                {t(`${tech}`)}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="capacity"
          label={t("Capacity")}
          rules={[{ required: true, message: t("Please enter the capacity") }]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {t("Create Group")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateGroup;
