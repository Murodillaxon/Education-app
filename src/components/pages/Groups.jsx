import React, { useState, useEffect } from "react";
import { Row, Col, Button, Drawer, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupBox from "../GroupBox";
import { useTranslation } from "react-i18next";
import axios from "axios";
import CreateGroup from "./createGroup";

const Groups = () => {
  const { t } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/group/getallgroup");
        setGroups(response.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching groups:", error);
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className="groups-container">
      <Button
        title={t("Create")}
        type="primary"
        icon={<PlusOutlined />}
        onClick={toggleDrawer}
        className="create-button"
      >
        {t("Create Group")}
      </Button>

      <Drawer
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        visible={drawerVisible}
        height="100%"
        width="450px"
        bodyStyle={{ padding: "16px", backgroundColor: "#f0f0f0" }}
        headerStyle={{ backgroundColor: "#001529", color: "#fff" }}
        drawerStyle={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <CreateGroup toggleDrawer={toggleDrawer} />
      </Drawer>

      <h1>{t("Groups")}</h1>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {groups.map((group) => (
            <Col key={group.id} xs={24} sm={12} md={8} lg={6}>
              <GroupBox
                id={group._id}
                name={group.groupName}
                teacher={group.groupTeacher}
                pricePerDay={group.pricePerDay}
                numberRoom={group.numberRoom}
                lessonTime={group.lessonTime}
                texnology={group.texnology}
                oddNumbers={group.oddNumbers}
                numStudents={group.numStudents}
              />
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};

export default Groups;
