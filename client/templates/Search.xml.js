/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A search template lets users search your content and view found results. It includes a search field, a keyboard, and a list of results.
*/
var Template = function() {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .suggestionListLayout {
          margin: -150 0;
        }
      </style>
    </head>
    <searchTemplate>
      <searchField>Search</searchField>
      <collectionList>
        <shelf>
          <header>
            <title>Recent Searches</title>
          </header>
          <section>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/BBQ.jpg" width="308" height="308" />
            <overlay>
              <title>BBQ Places</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/ScaredSnakes.jpg" width="308" height="308" />
            <overlay>
              <title>Scared Of Snakes</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/beachtop.jpg" width="308" height="308" />
            <overlay>
              <title>Beach Top Places</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/bigfoottop.jpg" width="308" height="308" />
            <overlay>
              <title>Scary Places</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/Crossing.jpg" width="308" height="308" />
            <overlay>
              <title>Populous Places</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/Knights.jpg" width="308" height="308" />
            <overlay>
              <title>Knight Riders</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/Pool.jpg" width="308" height="308" />
            <overlay>
              <title>Homes with Pools</title>
            </overlay>
          </lockup>
          </section>
        </shelf>
      </collectionList>
    </searchTemplate>
  </document>`
}
