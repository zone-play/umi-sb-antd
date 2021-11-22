import { Row, Col, Affix } from 'antd';

export const Layout_Desk_Component = () => {
  return (
    <>
      <Affix>
        <Row>
          <Col>Header</Col>
        </Row>
      </Affix>
      <Row>
        <Col>Desk</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </>
  );
};

export const Layout_Table_Component = () => {
  return (
    <>
      <Affix>
        <Row>
          <Col>Header</Col>
        </Row>
      </Affix>
      <Row>
        <Col>Table</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </>
  );
};

export const Layout_Mobile_Component = () => {
  return (
    <>
      <Affix>
        <Row>
          <Col>Header</Col>
        </Row>
      </Affix>
      <Row>
        <Col>Mobile</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </>
  );
};
