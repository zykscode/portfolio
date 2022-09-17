import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/static/images/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/images/32x32.jpg"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/images/favicon.jpg"
                    />
                    <link rel="manifest" href="/static/images/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/static/images/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
