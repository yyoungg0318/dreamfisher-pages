import Link from 'next/link';
import '../styles/antd.less';
import { DatePicker, Col, Row, Timeline, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <div>
      <Col>
        <Col>
          <DatePicker />
        </Col>
        <Col>{timeline()}</Col>
        <Col>{demo()}</Col>
      </Col>

      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  );
}

function timeline() {
  return (
    <Timeline mode="alternate">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">
        Solve initial network problems 2015-09-01
      </Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Timeline.Item>
      <Timeline.Item color="red">
        Network problems being solved 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Technical testing 2015-09-01
      </Timeline.Item>
    </Timeline>
  );
}
function demo() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            // style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            title="Card title"
            bordered={false}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}
