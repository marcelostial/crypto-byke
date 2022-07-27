import React from "react";

import { Grid, Title, Button, BlogCard, CarouselReact } from "../../components";
import { carouselConfigs } from "./carouselConfigs";

import { getPosts } from "../../services/compassBlog";
import { decodeEntities } from "../../utils/decodeEntities";

import "./Blog.scss";

export const Blog = ({ title, buttonLabel, buttonUrl, buttonText }) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.data);
    });
  });

  return (
    <Grid className="blog--container">
      <div className="blog--row">
        <Title text={title} variant="dark" />

        <Button
          linkType={"externo"}
          label={buttonLabel}
          alignIcon={"right"}
          type="primary"
          url={buttonUrl}
          icon="arrow-right"
        />
      </div>

      <div className="blog--contentWrapper">
        <div className="blog--carouselWrapper">
          <CarouselReact
            emptySlots={0}
            emptySlotsTablet={0}
            carouselConfigs={carouselConfigs()}
            infinite={false}
          >
            {posts &&
              posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={decodeEntities(post.title.rendered)}
                  url={post.link}
                  image={{
                    src: post._embedded["wp:featuredmedia"][0].media_details
                      .sizes.big_thumbnail.source_url,
                  }}
                  btnTxt={buttonText}
                />
              ))}
          </CarouselReact>
        </div>
      </div>
    </Grid>
  );
};

Blog.defaultProps = {
  text: "Compass Blog",
  buttonLabel: "See what's new",
  buttonUrl: "https://blog.compass.uol/",
  buttonText: "Read more",
};

export default Blog;
