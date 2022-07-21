
import { Footer, Header, Posts } from "components";
import { client } from 'client';
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";

const ReviewsPage = () => {
    const { usePosts } = client;

    const posts = usePosts()?.nodes;

    return (
        <>
            <Header title="Headless Site Testing" />
                <h1 style={{textAlign: 'center'}}>This is my first page</h1>
                    <div>
                        <Posts posts={posts} />
                    </div>
            <Footer />
        </>
    );
        
};

export async function getStaticProps(context: GetStaticPropsContext) {
    return getNextStaticProps(context, {
      Page: ReviewsPage,
      client,
    });
}

export default ReviewsPage;

