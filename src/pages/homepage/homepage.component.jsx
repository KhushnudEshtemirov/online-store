import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />

    <div className="author" style={{ textAlign: "right" }}>
      <a href="https://t.me/khushnud_eshtemirov" style={{ color: "red" }}>
        Made by Khushnud Eshtemirov
      </a>
    </div>
  </HomePageContainer>
);

export default HomePage;
