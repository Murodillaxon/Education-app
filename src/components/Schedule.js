// src/pages/Schedule.js
import React from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";

const generateTimeSlots = (start, end) => {
  const slots = [];
  for (let hour = start; hour <= end; hour++) {
    slots.push(`${hour}:00`);
  }
  return slots;
};

const generateColumns = (timeSlots) => {
  return timeSlots.map((time) => ({
    title: time,
    dataIndex: time,
    key: time,
    width: 100,
  }));
};

const groups = [
  {
    key: "1",
    group: "Group A",
    lessons: [
      { start: "8:00", end: "10:00", subject: "Math" },
      { start: "10:00", end: "11:00", subject: "English" },
    ],
  },
  {
    key: "2",
    group: "Group B",
    lessons: [
      { start: "9:00", end: "10:30", subject: "Science" },
      { start: "11:00", end: "12:30", subject: "History" },
    ],
  },
  {
    key: "3",
    group: "Group C",
    lessons: [
      { start: "12:00", end: "14:00", subject: "Geography" },
      { start: "15:00", end: "16:00", subject: "Art" },
    ],
  },
];

const generateData = (groups, timeSlots) => {
  return groups.map((group) => {
    const data = { key: group.key, group: group.group };
    group.lessons.forEach((lesson) => {
      const startIndex = timeSlots.indexOf(lesson.start);
      const endIndex = timeSlots.indexOf(lesson.end);
      for (let i = startIndex; i <= endIndex; i++) {
        data[timeSlots[i]] = lesson.subject;
      }
    });
    return data;
  });
};

const Schedule = () => {
  const { t } = useTranslation();
  const timeSlots = generateTimeSlots(8, 20);
  const columns = [{ title: t("Group"), dataIndex: "group", key: "group", fixed: "left" }, ...generateColumns(timeSlots)];
  const data = generateData(groups, timeSlots);

  return (
    <div>
      <h1>{t("Schedule")}</h1>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        bordered
      />
    </div>
  );
};

export default Schedule;
