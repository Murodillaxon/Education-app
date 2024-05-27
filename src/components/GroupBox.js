// src/components/GroupBox.js
import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

const GroupBox = ({ name, numStudents }) => {
  const { t } = useTranslation();

  return (
    <Card title={t(name)} style={{ marginBottom: '16px' }}>
      <p>{t('Number of students')}: {numStudents}</p>
    </Card>
  );
};

export default GroupBox;
