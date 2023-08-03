import React from "react";
import { Tabs } from "antd";
import Products from "./Products";

import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <>
      <div className="container overflow-hidden ">
        <div className="container rounded   mt-5">
          <h1 className="font-bold flex"> Dashboard</h1>
        </div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Products" key="1">
            <Products />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Profile" key="3">
            <ProfileInfo />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
