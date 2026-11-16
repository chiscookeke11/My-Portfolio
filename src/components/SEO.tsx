import { Helmet } from "react-helmet-async";
import { portfolioKeywords } from "../constants/seo";

const SEO = () => {
    return (
        <Helmet>
            <title>
                Chinedu Okeke | Software Engineer & AI/ML Engineer
            </title>

            <meta
                name="description"
                content="Software Engineer and AI/ML Engineer building scalable software, intelligent AI applications, backend systems, and developer-friendly tools."
            />

            <meta
                name="keywords"
                content={portfolioKeywords.join(", ")}
            />

            <meta name="author" content="Chinedu Okeke" />

            <meta name="robots" content="index, follow" />

            <meta
                property="og:title"
                content="Chinedu Okeke | Software Engineer & AI/ML Engineer"
            />

            <meta
                property="og:description"
                content="Building intelligent software, AI-powered applications, and scalable backend systems."
            />

            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;