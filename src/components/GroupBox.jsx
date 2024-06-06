import React from "react";
import { Card, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const GroupBox = ({
  name,
  teacher,
  pricePerDay,
  numberRoom,
  lessonTime,
  texnology,
  oddNumbers,
  numStudents,
}) => {
  const { t } = useTranslation();
  const dayType = oddNumbers ? t("Odd Numbers") : t("Even Numbers");

  return (
    <Card
      className="group-box"
      title={<Title level={4}>{name}</Title>}
      bordered={false}
    >
      <p>
        <Text strong>{t("Teacher")}:</Text> {teacher}
      </p>
      <p>
        <Text strong>{t("Technology")}:</Text> {texnology}
      </p>
      <p>
        <Text strong>{t("Number Room")}:</Text> {numberRoom}
      </p>
      <p>
        <Text strong>{t("Lesson Time")}:</Text> {lessonTime.start} - {lessonTime.end}
      </p>
      <p>
        <Text strong>{t("Days of the Week")}:</Text> {dayType}
      </p>
    </Card>
  );
};

export default GroupBox;
