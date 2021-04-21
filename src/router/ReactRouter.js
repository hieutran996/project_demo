import React, {useState,useEffect} from 'react';
import { Route } from 'react-router-dom';
import Home from '../component/home';
import Detail from '../component/detail';
import { Layout, Menu,Select} from 'antd';
import Store from '../redux/store';
import { changelanguage } from '../redux/actions/changelanguage';



const { Header, Footer } = Layout;
const { Option } = Select;

function ReactRouter() {
  const [valueLang, setValueLange] = useState(null)

  useEffect(() => {
    let lang = localStorage.getItem("language");
    if (lang === null) {
      localStorage.setItem('language', 'vn');
      lang = 'vn'
    }
    setValueLange(lang)
    Store.dispatch(changelanguage(lang));
  }, [])

  function handleChange(value) {
    localStorage.setItem("language", value);
    setValueLange(value)
    Store.dispatch(changelanguage(value));
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'left'}}>
          <Menu.Item key="1">Shop</Menu.Item>
        </Menu>
        <div style={{float: 'right'}}>
        <Select value={valueLang} style={{ width: 120 }} onChange={handleChange}>
          <Option value="vn">VN</Option>
          <Option value="en">EN</Option>
        </Select>
        </div>
      </Header>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:slug" component={Detail} />
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
}

export default ReactRouter;
