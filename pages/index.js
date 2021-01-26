import Link from 'next/link';
import {
  DatePicker,
  Col,
  Row,
  Timeline,
  Card,
  Layout,
  Typography,
  blockquote,
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <>
      <Layout>
        <Header>{header()}</Header>
        <Layout>
          <Content style={{ padding: '20px 50px' }}>{content()}</Content>
          <Footer style={{ textAlign: 'center' }}>
            dreamfisher ©2021 Created by dreamfisher studio
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

function header() {
  return <h1 style={{ color: 'white' }}>於人工作室</h1>;
}

function content() {
  return (
    <Typography>
      <Col>
        <Col>{personal()}</Col>
        <Col>{timeline()}</Col>
        <Col>{demo()}</Col>
        <Col>{contact()}</Col>
      </Col>
    </Typography>
  );
}

function contact() {
  return (
    <>
      <h4>Contact</h4>
      <blockquote>
        如果有任何專案開發，電商營運，品牌經營，合作，技術顧問等需求，歡迎跟我們聯絡
      </blockquote>
      <blockquote>E-Mail:bvhstar@gmail.com</blockquote>
    </>
  );
}

function personal() {
  return (
    <>
      <h4>Services</h4>
      <Paragraph>
        <blockquote>
          提供各種客製化開發，架構設計及顧問服務，電商網站，公司形象網站，金物流串接，IoT專案開發，Android
          APP，iOS APP，雙平台客製化， 前端：REACT，REDUX，VUE，VUEX，Nextjs,
          BOOTSTRAP，ANTD，HTML，CSS，等。
          技術部份如下，後端：Nodejs,Express,sequelize,mysql,mongodb,rails 等。
          APP：Flutter, Android Native APP, iOS Native APP 等。
          硬體FW開發：51，ARM，arduino, non-os 開發， Embedded Linux開發 等。
          AI: TensorFlow。
        </blockquote>
      </Paragraph>
    </>
  );
}

function timeline() {
  return (
    <>
      <h4>Founder Resume</h4>
      <Timeline mode="alternate">
        <Timeline.Item>成功大學工程科學所碩士班畢業</Timeline.Item>
        <Timeline.Item>
          晨星半導體 （聯發科技）TV RD資深工程師 2008-10
        </Timeline.Item>
        <Timeline.Item color="green">Mobile RD研發工程師</Timeline.Item>
        <Timeline.Item>Monitor RD／FAE主任工程師～2019-01</Timeline.Item>

        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          於人工作室成立 2019-01-01
        </Timeline.Item>
        <Timeline.Item>
          綠達光電4G IoT 專案， 中華電信 IoT APP 專案
        </Timeline.Item>
        <Timeline.Item>漁人釣釣，漁人氣象，蜂廚衛，正式上線</Timeline.Item>
        <Timeline.Item>Cyberbiz順立智慧 資深經理 2020-06 ～ 12</Timeline.Item>
        <Timeline.Item color="red">
          澄鈦動能科技 技術顧問 2020-12 ～
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          於人工作室全職營運 2021-01 ～
        </Timeline.Item>
      </Timeline>
    </>
  );
}
function demo() {
  return (
    <>
      <h4>Project</h4>
      <div className="site-card-wrapper">
        <Row gutter={[{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }, 20]} span={8}>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card
              // style={{ width: 300 }}
              // cover={<img alt="example" src="/images/dreamfisher.jpg" />}
              title={
                <Link href="https://www.facebook.com/dreamerfisher/">
                  <a>漁人釣釣</a>
                </Link>
              }
              bordered={false}
            >
              台灣釣魚社群Android / iOS APP. 台灣區運動類熱門排行第一。
              全台灣公開釣獲，釣點，釣具店，釣蝦場等地圖資訊。 公開釣獲,
              詳細地點, 釣具裝備, 釣組記錄. 個人等級及漁獲記錄，和朋友一同較量。
              專業記錄漁獲，釣具裝備, 釣組，智能魚種辨識，相關氣象以及地點資料。
              釣魚專屬的即時氣象，潮汐，氣象警示。 好友社群動態
            </Card>
          </Col>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card
              bordered={false}
              title={
                <Link href="https://www.facebook.com/%E6%BC%81%E4%BA%BA%E6%B0%A3%E8%B1%A1-%E6%BD%AE%E6%B1%90%E6%B0%A3%E8%B1%A1-APP-102997361679120/">
                  <a>漁人氣象</a>
                </Link>
              }
            >
              提供海上相關資料氣象 Android / iOS APP，台灣區域串接氣象區資料，
              其它國家串接國外氣象平台資料。
            </Card>
          </Col>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card
              bordered={false}
              title={
                <Link href="https://go-shop99.com/">
                  <a>蜂廚衛</a>
                </Link>
              }
            >
              廚衛三機電商網站，各大廚衛品牌，櫻花，林內，莊頭北等等 皆有販售。
            </Card>
          </Col>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card title="中華電信IoT APP" bordered={false}>
              串接中華MQTT Server, Firebase auth and cloudstore
            </Card>
          </Col>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card title="綠達光電IoT漁產養殖" bordered={false}>
              back-end (MQTT Server, nodejs and mongodb), Embedded Linux
              系統開發，RS485馬達整合.
            </Card>
          </Col>
          <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card title="Dark chess online game " bordered={false}>
              線上暗棋遊戲，多人連線對戢。Android / iOS APP
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
