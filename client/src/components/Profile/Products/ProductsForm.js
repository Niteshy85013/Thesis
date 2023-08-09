import { Col, Modal, Tabs, Row, Input, Select, message, Form } from "antd";
import React, { useEffect, useRef } from "react";
import TextArea from "antd/es/input/TextArea";
import { AddProduct, EditProduct } from "../../../apicalls/products";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../../../redux/loaderSlice";
import Images from "./images";

const additionalThings = [
  {
    label: "Cross Platform",
    name: "crossPlatform",
  },
  {
    label: "Native Platform",
    name: "nativePlatform",
  },
  {
    label: "Accessories Available",
    name: "accessoriesAvailable",
  },
  {
    label: "Project Support",
    name: "projectsupportAvailable",
  },
  {
    label: "Negotiable",
    name: "negotiable",
  },
];

const rules = [
  {
    required: true,
    message: "Required",
  },
];

function ProductsForm({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  getData,
}) {
  const [selectedTab = "1", setSelectedTab] = React.useState("1");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);

  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      let response = null;
      if (selectedProduct) {
        response = await EditProduct(selectedProduct._id, values);
      } else {
        values.seller = user._id;
        values.status = "pending";
        response = await AddProduct(values);
      }

      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
        setShowProductForm(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const formRef = useRef(null);
  const { Option } = Select;

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  }, [selectedProduct]);

  return (
    <Modal
      title={selectedProduct ? "Edit Gig" : "Add Gig"}
      visible={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
      width={1000}
      okText="Save"
      onOk={() => {
        formRef.current.submit();
      }}
      {...(selectedTab === "2" && { footer: false })}
    >
      <div>
        <h1 className="text-black text-2xl text-center">
          {selectedProduct ? "Edit Your Gig" : "Add Your Gig"}
        </h1>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <Tabs.TabPane tab="General" key="1">
            <Form layout="vertical" ref={formRef} onFinish={onFinish}>
              <Form.Item label="Title" name="name" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={rules}>
                <TextArea rows={4} />
              </Form.Item>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Price" name="price" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>

                {/* Category Section */}
                <Col span={8}>
                  <Form.Item label="Category" name="category" rules={rules}>
                    <Select>
                      <Option value="">Select</Option>
                      <Option value="Mobile Application">
                        Mobile Application
                      </Option>
                      <Option value="Web Development">Web Development</Option>
                      <Option value="Graphics & Design">
                        Graphics & Design
                      </Option>
                      <Option value="Digital Marketing">
                        Digital Marketing
                      </Option>
                      <Option value="Game Development">Game Development</Option>
                      <Option value="Photography & Video Editing">
                        Photography & Video Editing
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* Language Section */}
                <Col span={8}>
                  <Form.Item label="Language" name="condition" rules={rules}>
                    <Select>
                      <Option value="">Select</Option>
                      <Option value="English">English</Option>
                      <Option value="Nepali">Nepali</Option>
                      <Option value="Hindi/Urdu">Hindi/Urdu</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* <Col span={8}>
                  <Form.Item label="Age" name="age" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col> */}
              </Row>

              <div className="flex gap-10">
                {additionalThings.map((item) => {
                  return (
                    <Form.Item
                      label={item.label}
                      name={item.name}
                      key={item.name}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldValue(item.name)}
                      />
                    </Form.Item>
                  );
                })}
              </div>
            </Form>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Images" key="2" disabled={!selectedProduct}>
            <Images
              selectedProduct={selectedProduct}
              getData={getData}
              setShowProductForm={setShowProductForm}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
}

export default ProductsForm;
