// App.jsx
import React from "react";
import { useRouter } from "next/router";
import theme from "@/assets/theme.json";
import "@/assets/styles/index.scss";
import PageLayout from "@/layouts/page-layout";
import { RecoilRoot } from "recoil";
import { Button, ConfigProvider } from "antd";

const App = ({ Component, pageProps }) => {
  const router = useRouter();


  return (
    <main id="app-layout">
      <RecoilRoot>
        <ConfigProvider theme={theme} locale="it">
            <PageLayout>
              {/* Render your content for other pages here */}
              <Component {...pageProps} />
            </PageLayout>
        </ConfigProvider>
      </RecoilRoot>
    </main>
  );
};

export default App;
