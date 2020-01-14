import React from "react";
import Button from "./Button";

export default { title: "Nav button" };

export const defaultNavButton = () => (
  <Button>
    <i class="fas fa-user-alt"></i>
    <Heading weight="700">About me</Heading>
    <Subtitle>who am i</Subtitle>
  </Button>
);
export const defaultSocialButton = () => (
  <Button social>
    <i class="fas fa-user-alt"></i>
  </Button>
);
