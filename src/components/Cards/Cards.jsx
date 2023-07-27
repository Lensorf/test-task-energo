import React from 'react';
import { Card, Col, Row } from 'antd';
import './Cards.css';

const { Meta } = Card;

export default function Cards() {
  return (
    <div>
      <div className="cardsPageBlock">
        <Card
          className="Cards"
          hoverable
          style={{
            width: 240,
            height: 360,
          }}
          cover={(
            <img
              style={{
                width: 240,
                height: 180,
              }}
              alt="example"
              src="https://msk-apple.ru/image/cache/catalog/Add/13%20mini/30059018bb-700x700.jpg"
            />
          )}
        >
          <Meta title="iPhone" description="www.apple.com/ru/" />
        </Card>

        <Card
          className="Cards"
          hoverable
          style={{
            width: 240,
            height: 360,
          }}
          cover={(
            <img
              style={{
                width: 240,
                height: 180,
              }}
              alt="example"
              src="https://3dnews.ru/assets/external/illustrations/2021/10/18/1051521/MacBook_Pro16_01.jpg"
            />
            )}
        >
          <Meta title="MacBook " description="www.apple.com/ru/" />
        </Card>

        <Card
          className="Cards"
          hoverable
          style={{
            width: 240,
            height: 360,
          }}
          cover={(
            <img
              style={{
                width: 240,
                height: 180,
              }}
              alt="example"
              src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg"
            />
          )}
        >
          <Meta title="iPhone" description="www.apple.com/ru/" />
        </Card>
      </div>
      <div style={{
        marginTop: 20,
        marginBottom: 20,
      }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card className="Cards" title="MacBook" bordered={false}>
              <div className="card">
                <img className="cardsImg" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481" alt="MacBook" />
                <span className="textApple">
                  8-Core CPU
                  10-Core GPU
                  8GB Unified Memory
                  256GB SSD Storage¹
                  16-core Neural Engine
                  13-inch Retina display with True Tone
                  Two Thunderbolt / USB 4 ports
                  Magic Keyboard
                  Touch Bar and Touch ID
                  Force Touch trackpad
                </span>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="Cards" title="MacBook" bordered={false}>
              <div className="card">
                <img className="cardsImg" src="https://i-store.net/_sh/59/5934.jpg" alt="MacBook" />
                <span className="textApple">
                  MKGR3, Apple M1 Pro 8-core, 14.2, Liquid Retina XDR 3024×1964,
                  16GB RAM, 512GB SSD, Apple GPU 14-cores, Touch ID, Wi-Fi 6,
                  Bluetooth 5.0, MacOS
                </span>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="Cards" title="iPHone" bordered={false}>
              <div className="card">
                <img className="cardsImg" src="https://storage.yandexcloud.net/the-istore.ru-backup/iblock/f5b/f5bd83bcdfbc46b791699739909441e7/1ccbb17cec4a9028ea7d8f4248df61dc.jpeg" alt="MacBook" />
                <span className="textApple">
                  Новый дисплей Super Retina XDR с технологией ProMotion,
                  функцией Always On Display и частотой обновления от 1 до 120 раз в секунду.
                  Новая 48 мегапиксельная камера с обновлённым объективом и режимом Photonic Engine делает яркие и насыщенные фото.
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
