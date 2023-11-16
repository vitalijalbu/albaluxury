import React, { useState } from "react";
import dayjs from 'dayjs';
import { Button, Col, Row, Space, Modal, message, Divider } from "antd";
const { confirm } = Modal;
import { IconArrowWaveRightUp, IconPhone, IconPhoneCall, IconPrinter } from "@tabler/icons-react";
import { editorState } from '@/store/index'; // Update the path
import { useRecoilState } from "recoil";
import Link from "next/link";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForms] = useRecoilState(editorState);
  const [popup, setPopup] = useState(false);
  


    // Delete action
    const handleDeleteSession = () => {
      confirm({
        title: "Eliminare sessione?",
        transitionName: "ant-modal-slide-up",
        content: "Sei sicuro di voler eliminare la sessione? Tutti i dati verranno persi.",
        okText: "Elimina",
        okType: "danger",
        cancelText: "Chiudi",
        async onOk() {
          try {
              setForms([]);
              message.success("Progetto pulito");
              setLoading(false);
              //setReload(reload + 1);
          } catch (error) {
            message.error("An error occurred while deleting the product");
          }
        },
      });
    };  
    

    

  return (
    <div className="container">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <img src={"/logo.svg"} className="site-logo" alt="Logo Alba Luxury"/>
        </Col>        
        <Col style={{justifyContent: "end"}}>
          <Space split={<Divider type="vertical" />}>
            <Button key={2} type="primary" icon={<IconPhoneCall />}>
              Chiama
            </Button>
             <Link href="https://www.albaluxury.it/" target="_blank">
              <Button key={2} type="primary" icon={<IconArrowWaveRightUp />}>
              Vai al sito
            </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
