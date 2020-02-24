import React, { useContext, useRef } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import LottieView from "lottie-react-native";
import { Viewport } from "@skele/components";

import { themeContext } from "./share/context/theme";

import getColors from "./share/styles/colors";
import { useAppStyle } from "./share/styles/app";

import {
  Button,

  Section,
  Container,
  Divisor,

  Title,
  Subtitle,
  Sentence,
  StrongText,
  TinyText,
  TinyStrongText,
  Link,

  Card,
  CardDescription,
  CardImage,
  CardRow,
  CardColumnImage,
  CardColumnTextContent,
  CardFooter,

  TinyRank,

  Input,
  SelectBox,

  TopBar,
  TopBarTitle,
  TopBarSearch,
  TopBarLogoAndCommand,

  Tag
} from "./";




const images = {
  img1: require("./images/img_1.jpg"),
  img2: require("./images/img_2.jpg"),
  img3: require("./images/img_3.jpg"),
  img4: require("./images/img_4.jpg")
};

const ViewportAwareTouchableWithoutFeedback = Viewport.Aware(
  TouchableWithoutFeedback
);

export default function StyleGuide({ navigation }) {
  const { appStyles } = useAppStyle();
  const [themeName, setThemeName] = useContext(themeContext);
  const colors = getColors(themeName);
  const lottieRef = useRef(null);

  return (
    <Container>
      <TopBar>
        <TopBarTitle withMenuIcon title="Extraordinaries kittens" />
        <TopBarSearch
          placeholder="Search"
          onChangeText={value => console.log("change value", value)}
          onPress={value => console.log("onPress search", value)}
        />
      </TopBar>
      <Viewport.Tracker>
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            <Section>
              <SelectBox
                label="Select theme"
                style={appStyles.picker}
                selectedValue={themeName}
                onValueChange={itemValue => setThemeName(itemValue)}
                data={[
                  "defaultTheme",
                  "Desert",
                  "Porcelain",
                  "Alabaster",
                  "Wewak",
                  "Edward",
                  "Dark"
                ]}
              />
            </Section>
            <Divisor />

            <Section row style={appStyles.schemeColorContainer}>
              <View style={appStyles.lightShades} />
              <View style={appStyles.lightAccent} />
              <View style={appStyles.mainBrandColor} />
              <View style={appStyles.darkAccent} />
              <View style={appStyles.darkShades} />
            </Section>
            <Divisor />

            <Section>
              <Input label="Name" value="My name is..." />
            </Section>
            <Section>
              <Input isSuccess label="Name" value="My name is..." />
            </Section>
            <Section>
              <Input error="Required" label="Name" value="My name is..." />
            </Section>
            <Divisor />
          </KeyboardAvoidingView>

          <Section row>
            <Tag icon>Kittens</Tag>
            <Tag icon>Cats</Tag>
            <Tag icon>No dogs</Tag>
            <Tag icon>Tag</Tag>
            <Tag icon>Tag</Tag>
            <Tag icon>Tag</Tag>
            <Tag icon>Tag</Tag>
          </Section>
          <Divisor />

          <Section>
            <Title>Introducing adorable kittens</Title>
            <Subtitle>Sollicitudin mauris in</Subtitle>
          </Section>
          <Divisor />

          <Section>
            <Sentence>
              Phasellus non accumsan augue. Nulla justo augue, accumsan eget
              sollicitudin id, posuere ornare urna.
            </Sentence>
          </Section>
          <Divisor />
          <Section>
            <StrongText>
              Ut sed nisi posuere, sollicitudin mauris in, finibus ipsum. Proin
              ac sapien et purus vehicula finibus sed vitae massa.
            </StrongText>
          </Section>
          <Divisor />
          <Section>
            <TinyText>
              Ut sed nisi posuere, sollicitudin mauris in, finibus ipsum. Proin
              ac sapien et purus vehicula finibus sed vitae massa.
            </TinyText>
          </Section>

          <Divisor />
          <Section>
            <Link onPress={() => navigation.goBack()}>Link to somewhere</Link>
          </Section>

          <Section>
            <ViewportAwareTouchableWithoutFeedback
              onPress={() => lottieRef.current.play()}
              onViewportEnter={() =>
                lottieRef.current &&
                setTimeout(() => lottieRef.current.play(), 300)
              }
            >
              <LottieView
                ref={lottieRef}
                loop={false}
                style={{ height: 100, margin: "auto", alignSelf: "center" }}
                source={require("./assets/animations/gift-animation.json")}
              />
            </ViewportAwareTouchableWithoutFeedback>
          </Section>
          <Divisor />

          <Section>
            <Button>Default</Button>
          </Section>
          <Section>
            <Button primary>Primary</Button>
          </Section>
          <Section>
            <Button info>Info</Button>
          </Section>
          <Section>
            <Button success>Success</Button>
          </Section>
          <Section>
            <Button warning>Warning</Button>
          </Section>
          <Section>
            <Button danger>Danger</Button>
          </Section>
          <Divisor />

          <Section row>
            <TouchableOpacity
              onPress={() => console.log("on pressed TouchableOpacity")}
            >
              <Card half>
                <CardRow margin>
                  <CardImage half image={images.img1} />
                </CardRow>
                <CardDescription>
                  <CardRow margin>
                    <TinyStrongText>
                      NORMAL CARD NOT TRUNCATE AND LONG TITLE
                    </TinyStrongText>
                  </CardRow>
                  <CardRow margin>
                    <Sentence>
                      Ut sed nisi posuere, sollicitudin mauris in, finibus
                      ipsum.
                    </Sentence>
                  </CardRow>
                </CardDescription>
                <CardFooter>
                  <TinyRank rank={4} />
                  <TinyText>Description</TinyText>
                </CardFooter>
              </Card>
            </TouchableOpacity>

            <TouchableHighlight
              style={appStyles.opacityTouchable}
              underlayColor={colors.lightShades}
              onPress={() => console.log("on pressed TouchableHighlight")}
            >
              <Card half>
                <CardRow margin>
                  <CardImage half image={images.img2} />
                </CardRow>
                <CardDescription>
                  <CardRow margin>
                    <TinyStrongText truncate>
                      NORMAL CARD BUT TRUNCATE TITLE
                    </TinyStrongText>
                  </CardRow>
                  <CardRow margin>
                    <Sentence>
                      Ut sed nisi posuere, sollicitudin mauris in, finibus
                      ipsum.
                    </Sentence>
                  </CardRow>
                </CardDescription>
                <CardFooter>
                  <TinyRank rank={3} />
                  <TinyText>Description</TinyText>
                </CardFooter>
              </Card>
            </TouchableHighlight>

            <TouchableNativeFeedback
              onPress={() => console.log("on pressed TouchableNativeFeedback")}
            >
              <Card shadow>
                <CardRow margin>
                  <CardImage flatBottom image={images.img4} />
                </CardRow>
                <CardDescription padding>
                  <CardRow margin>
                    <TinyStrongText darkAccent truncate>
                      COLOR TITLE
                    </TinyStrongText>
                  </CardRow>
                  <CardRow margin>
                    <Sentence>
                      Ut sed nisi posuere, sollicitudin mauris in, finibus
                      ipsum.
                    </Sentence>
                  </CardRow>
                </CardDescription>
                <CardFooter padding>
                  <TinyRank rank={5} />
                  <TinyText>Description</TinyText>
                </CardFooter>
              </Card>
            </TouchableNativeFeedback>

            <Card>
              <CardRow margin>
                <CardImage image={images.img1} />
              </CardRow>
              <CardDescription>
                <CardRow padding>
                  <TinyStrongText truncate>CARD WITH PADDING</TinyStrongText>
                </CardRow>
                <CardRow padding>
                  <Sentence>
                    Ut sed nisi posuere, sollicitudin mauris in, finibus ipsum.
                  </Sentence>
                </CardRow>
              </CardDescription>
              <CardFooter>
                <TinyRank rank={2} />
                <TinyText>Description</TinyText>
              </CardFooter>
            </Card>
            <Card lightAccent>
              <CardRow>
                <CardImage flatBottom image={images.img2} />
              </CardRow>
              <CardDescription padding>
                <CardRow margin>
                  <TinyStrongText lightShades truncate>
                    CATEGORY ASD ASDA SDASD
                  </TinyStrongText>
                </CardRow>
                <CardRow margin>
                  <Sentence lightShades>
                    Ut sed nisi posuere, sollicitudin mauris in, finibus ipsum.
                  </Sentence>
                </CardRow>
              </CardDescription>
              <CardFooter padding>
                <TinyText lightShades>Description</TinyText>
              </CardFooter>
            </Card>
            <Card>
              <CardRow margin>
                <CardImage image={images.img3} />
              </CardRow>
              <CardDescription>
                <TinyStrongText truncate>CARD WITHOUT OPTIONS</TinyStrongText>
                <Sentence>
                  Ut sed nisi posuere, sollicitudin mauris in, finibus ipsum.
                </Sentence>
              </CardDescription>
              <CardFooter>
                <TinyText>Description</TinyText>
              </CardFooter>
            </Card>
            <Card horizontal>
              <CardColumnImage>
                <CardImage horizontal image={images.img2} />
              </CardColumnImage>
              <CardColumnTextContent>
                <CardDescription>
                  <CardRow margin>
                    <TinyStrongText darkAccent truncate>
                      COLOR TITLE
                    </TinyStrongText>
                  </CardRow>
                  <CardRow margin>
                    <Sentence>
                      Ut sed nisi posuere, sollicitudin mauris in, finibus
                      ipsum.
                    </Sentence>
                  </CardRow>
                </CardDescription>
                <CardFooter>
                  <TinyRank rank={5} />
                  <TinyText>Description</TinyText>
                </CardFooter>
              </CardColumnTextContent>
            </Card>
            <Card horizontal>
              <CardColumnImage>
                <CardImage horizontal image={images.img4} />
              </CardColumnImage>
              <CardColumnTextContent>
                <CardDescription>
                  <CardRow margin>
                    <TinyStrongText darkAccent truncate>
                      COLOR TITLE
                    </TinyStrongText>
                  </CardRow>
                  <CardRow margin>
                    <Sentence>
                      Ut sed nisi posuere, sollicitudin mauris in, finibus
                      ipsum.
                    </Sentence>
                  </CardRow>
                </CardDescription>
                <CardFooter>
                  <TinyRank rank={5} />
                  <TinyText>Description</TinyText>
                </CardFooter>
              </CardColumnTextContent>
            </Card>
          </Section>
        </ScrollView>
      </Viewport.Tracker>
    </Container>
  );
}
