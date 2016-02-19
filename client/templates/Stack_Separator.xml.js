/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.

This version of the stack template shows an example of a separator element and a button, which can be used to alter the content being presented to the user.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .roundedImageCorners {
      itml-img-treatment: corner-small;
    }
    .customBadgeLayout {
      tv-tint-color: rgb(0, 0, 0);
      margin: 0 0 5 0;
    }
    </style>
  </head>
  <stackTemplate>
    <collectionList>
      <carousel>
        <section>
          <lockup template="${this.BASEURL}templates/Catalog.xml.js">
            <img src="${this.BASEURL}resources/images/carousel/carousel_3.lcr" width="620" height="450" />
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/carousel/carousel_1.lcr" width="620" height="450" />
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/carousel/carousel_2.lcr" width="620" height="450" />
          </lockup>
        </section>
      </carousel>
      <shelf></shelf>
      <shelf>
        <header>
          <separator>
            <title> See Homes Now </title>
          </separator>
        </header>
        <section>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/bgBlack.jpg" width="300" height="150" />
          <overlay>
            <title>Surprise Me!</title>
          </overlay>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/Orange.jpg" width="300" height="150"/>
          <overlay>
            <title>Somewhere Warm</title>
          </overlay>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/bgBlack.jpg" width="300" height="150"/>
          <overlay>
            <title>Hollywood Mansions</title>
          </overlay>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/Orange.jpg" width="300" height="150" />
          <overlay>
            <title>Beer Towns</title>
          </overlay>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/bgBlack.jpg" width="300" height="150" />
          <overlay>
            <title>Permanent Vacation</title>
          </overlay>
        </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Music Cities</title>
        </header>
        <section>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/BBQ.jpg" width="308" height="308" />
          <overlay>
            <title>BBQ Places</title>
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
            <title>BBQ Places</title>
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
          <title class="showTextOnHighlight">Title 10</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/Pool.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Homes with Pools</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/potatoes.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Title 10</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/newimages/ScaredSnakes.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Scared of Snakes</title>
        </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Live Dangerously</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_11_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_12_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_13_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_14_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_15_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_16_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_17_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 7</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_18_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 8</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_19_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 9</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_20_poster.jpg" width="420" height="375" />
            <title class="showTextOnHighlight">Title 10</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Culinary Delights</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House1.jpg" width="308" height="308" />
            <overlay>
              <title>$299,500</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House2.jpg" width="308" height="308" />
            <overlay>
              <title>$400,500</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House3.jpg" width="308" height="308" />
            <overlay>
              <title>$100,500</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House4.jpg" width="308" height="308" />
            <overlay>
              <title>$340,780</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House5.jpg" width="308" height="308" />
            <overlay>
              <title>$299,720</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House6.jpg" width="308" height="308" />
            <overlay>
              <title>$500,000</title>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/newimages/House7.jpg" width="308" height="308" />
            <overlay>
              <title>$100,000</title>
            </overlay>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
