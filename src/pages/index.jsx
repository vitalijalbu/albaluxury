import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Row, Col, Segmented } from 'antd';
import Chat from '@/shared/chat';
import Avatar3D from '@/shared/components/avatar3d';


const Index = () => {


  return (
    <Row justify="space-between">
      <Col span={12}>
        <Avatar3D/>
      </Col> 
      <Col span={12}>
      <Chat/>
      </Col>
    </Row>
  );
};

export default Index;
