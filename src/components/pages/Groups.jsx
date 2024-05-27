// src/pages/Groups.js
import React from 'react';
import { Row, Col } from 'antd';
import GroupBox from '../GroupBox';

const Groups = () => {
  // Пример данных группы
  const groups = [
    { id: 1, name: 'Group A', numStudents: 20 },
    { id: 2, name: 'Group B', numStudents: 15 },
    { id: 3, name: 'Group C', numStudents: 18 },
  ];

  return (
    <div>
      <h1>Groups</h1>
      <Row gutter={[16, 16]}>
        {groups.map(group => (
          <Col key={group.id} xs={24} sm={12} md={8} lg={6}>
            <GroupBox name={group.name} numStudents={group.numStudents} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Groups;
