import React from 'react';
import { Layout, Breadcrumb,Row, Col,Radio,Select,InputNumber } from 'antd';
import {
    useParams,
    Link
  } from "react-router-dom";
import Data from './data.json';
import { useEffect, useState } from 'react/cjs/react.development';
import Language from "../config/language";
import Store from '../redux/store';


const { Content } = Layout;
const { Option } = Select;


function Detail() {
    let { slug } = useParams();
    const [dataDetail, setDataDetail] = useState(null)
    const [value, setValue] = useState(1);


    useEffect(() => {
      let crrData = Data.find(element => element.id == slug)
      setDataDetail(crrData)
    }, [])


    const onChange = e => {
      setValue(e.target.value);
    };
    
    return (
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">{Language[Store.getState().languages.language].home}</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{Language[Store.getState().languages.language].detail} - {slug}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="site-card-wrapper">
              {
                dataDetail 
                && 
                <Row gutter={26}>
                  <Col sm={24} md={4} className="pb-4">
                    <img alt="example" src={dataDetail.image} />
                  </Col>
                  <Col sm={24} md={8} className="pb-4">
                      <h2>{dataDetail.name}</h2>
                      <div className="pb-2">
                        {Language[Store.getState().languages.language].select_color}
                      </div>
                      <div className="pb-2">
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}>{Language[Store.getState().languages.language].green}</Radio>
                          <Radio value={2}>{Language[Store.getState().languages.language].red}</Radio>
                          <Radio value={3}>{Language[Store.getState().languages.language].blue}</Radio>
                          <Radio value={4}>{Language[Store.getState().languages.language].orange}</Radio>
                        </Radio.Group>
                      </div>
                      <div className="pb-2">
                        {Language[Store.getState().languages.language].select_size}
                      </div>
                      <div className="pb-2">
                      <Select defaultValue="M" style={{ width: 120 }}>
                          <Option value="M">M</Option>
                          <Option value="L">L</Option>
                          <Option value="XL">XL</Option>
                          <Option value="XXL">XXL</Option>
                        </Select>
                      </div>
                      <div className="pb-2">
                        {Language[Store.getState().languages.language].select_amount}
                      </div>
                      <div className="pb-2">
                        <InputNumber min={1} max={10} defaultValue={3} style={{ width: 120 }}/>
                      </div>

                  </Col>
                </Row>
              }

            </div>
          </div>
        </Content>
    );
}

export default Detail;