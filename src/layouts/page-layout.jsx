import React, { useState } from "react";
import Head from "next/head";
import { Button, Layout } from "antd";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Toolbar from "@/shared/components/toolbar";
import Chat from "@/shared/chat";


const { Content, Footer, Header } = Layout;

const PageLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

    return (
      <>
        <Head>
						<title>Marco Albano AI ChatBot</title>
					</Head>
          <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
            <Toolbar />
          </Header>
   
          <Layout
              className="site-layout"
              style={{
                marginRight: collapsed ? 40 : 400,
                marginTop: "60px",
                position: "relative",
                overflow: "unset",
                transition: "margin-right 0.2s",
              }}
            >
              <Content
                style={{
                  maxWidth: "100%",
                  overflow: "initial",
                  paddingBottom: "30px",
                  background: "#E8E8E8"
                }}
              >
                {props.children}
              </Content>
            </Layout>

           
       <Footer>demo footer</Footer>
        </Layout>
        </>
      );
}
export default PageLayout;
