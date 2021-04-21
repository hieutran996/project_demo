import React,{useState,useEffect} from 'react';
import { Layout, Breadcrumb,Row, Col,Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import Data from './data.json';
import Language from "../config/language";
import Store from '../redux/store';


const { Content } = Layout;

function Home() {
    let history = useHistory();
    console.log(Store.getState().languages.language)
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{Language[Store.getState().languages.language].home}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background p-4">
                <div className="site-card-wrapper">
                <Row gutter={26}>
                    {
                        Data.map((val) => {
                            return(
                                <Col sm={24} md={8} key={val.id} className="pb-4">
                                    <Card hoverable  cover={<img alt="example" src={val.image} />} 
                                        actions={[
                                        <EyeOutlined key="eye" 
                                            onClick={() => {history.push(`/detail/${val.id}`);}}
                                        />
                                        ]}>
                                        {val.name}
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                </div>
            </div>
        </Content>
    );
}

export default Home;