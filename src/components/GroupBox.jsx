import React from "react";
import { Card, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const GroupBox = ({
  id,
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
    <Link to={`/group/${id}`} style={{ textDecoration: "none" }}>
      <Card
        className="group-box"
        title={<Title level={4}>{name}</Title>}
        bordered={false}
        style={{ cursor: "pointer" }}
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
    </Link>
  );
};

export default GroupBox;
