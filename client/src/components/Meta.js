import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
};

Meta.defaultProps = {
    title: "Ringo Bar VLC",
    keywords: "pizzeria, bar, valencia, pizza, italiana, comida, economico",
    description: "Pizza Autentica Italiana en Valencia Capital"
};

export default Meta;