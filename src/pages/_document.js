import FontStyles from '@/hooks/font-styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link href="/favicon.png" rel="icon shortcut" type="image/x-icon"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
  href="https://unpkg.com/@blueprintjs/core@5/lib/css/blueprint.css"
  rel="stylesheet"
/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
