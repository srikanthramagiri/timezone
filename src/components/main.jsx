import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import CountryDropwDown from "./countryDropdown";
import Card from "./cardComponent"
export default function main() {
  return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={CountryDropwDown} />
          <Route exact path="/Card" component={Card} />
        </Layout>
      </BrowserRouter>
  );
}
