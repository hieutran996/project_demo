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
      // let crrData = Data.find(element => element.id === slug)
      // setDataDetail(crrData)
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


            </div>
          </div>
        </Content>
    );
}

export default Detail;