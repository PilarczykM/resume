import React from "react";
import axios from "axios";

import * as Styled from "./InstagramGallery.styled";

class InstagramGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get("https://www.instagram.com/lurppisek93/").then(res => {
      const jsonObject = res.data
        .match(
          /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
        )[1]
        .slice(0, -1);
      const userInfo = JSON.parse(jsonObject);
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
        0,
        10
      );
      for (let media of mediaArray) {
        const node = media.node;

        // Process only if is an image
        if (node.__typename && node.__typename !== "GraphImage") {
          continue;
        }

        // Push the thumbnail src in the array
        this.setState({ images: [...this.state.images, node.thumbnail_src] });
      }
    });
  }

  render() {
    return (
      <Styled.InstagramGrid>
        {this.state.images.slice(0, 8).map((image, index) => (
          <a key={index} href="https://www.instagram.com/lurppisek93/">
            <Styled.InstagramImage key={index} src={image} alt="" />
          </a>
        ))}
      </Styled.InstagramGrid>
    );
  }
}

export default InstagramGallery;
