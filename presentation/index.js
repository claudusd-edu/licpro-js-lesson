// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction, Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  youCanUse: require('../assets/you-can-use.jpeg'),
  babelMeme: require('../assets/babel_meme.jpg')
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} >
            Javascript
          </Heading>
          <Heading size={6} fit caps>
            LicPro 2017/2018
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} >
            Who Is Speaking?
          </Heading>
          <Appear fid="1">
            <Heading size={3}>Claude Dioudonnat</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={6}><strong>Graduated from</strong> IUT (DUT + Lic Pro Mobile)</Text>
          </Appear>
          <Appear fid="3">
            <Text size={6} ><strong>Work at</strong> ITNetwork</Text>
          </Appear>
          <Appear fid="4">
            <Text size={6}><strong>Worked at:</strong> Modis, Université Blaise Pascal, In My City</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Contact</Heading>
            <List>
              <ListItem>licpro2018@dioudonnat.fr</ListItem>
              <ListItem>claude@dioudonnat.fr</ListItem>
              <ListItem>claudusd</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Rules</Heading>
          <List ordered >
            <Appear fid="1">
              <ListItem>RTFM</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Use your Brain</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Ask Questions</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>How ?</Heading>
          <List>
            <Appear fid="1">
              <ListItem>8H of Lecture</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>16H of Pratical</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Test</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Poll</Heading>
          <Notes>
            <ul>
              <li>Ou Bac + 2</li>
              <li>Alternance ?</li>
              <li>Ou ?</li>
              <li>Qui a déjà fait du javascript</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 1</Heading>
          <Heading size={2} caps>ECMASscript 2015</Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps>Why Javascript ?</Heading>
          <Notes>
            Expliquer ou se trouve du js :
            <ul>
              <li>navigateur</li>
              <li>serveur</li>
              <li>iott</li>
              <li>serverless</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Long Time Ago</Heading>
          <Appear fid="1">
            <List>
              <ListItem>LiveScript May 199</ListItem>
              <ListItem>Brendan Eich</ListItem>
              <ListItem>Server</ListItem>
            </List>
          </Appear>
          <Notes>
            <div>Brendan Eich avril 1995 Netscape, 1998, 2003 fin de netscape navigator par AOL, 2014 quitte Mozzila et travail sur Brave</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>1990</Heading>
          <Heading size={5}>Wolrd Wide Web</Heading>
          <Heading size={4}>Tim Berners-Lee</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Browser</Heading>
            <List>
              <ListItem>1993 NCSA Mosaic</ListItem>
              <ListItem>1995 Netscape Navigator</ListItem>
              <ListItem>1995 Internet Explorer 1</ListItem>
              <ListItem>2004 Firefox 1</ListItem>
              <ListItem>2008 Goolge Chrome</ListItem>
              <ListItem>...</ListItem>
            </List>
            <Notes>
              Guerre des Navigateur dans les année 2000
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
              <ListItem>LiveScript -> Javascript</ListItem>
              <ListItem>March 1996 Netscape Navigator 2.0</ListItem>
              <Appear fit="1">
                <ListItem>JScript By Microsoft</ListItem>
                </Appear>
                <Appear fir="1">
                <ListItem>August 1996 Internet Explorer 3.0</ListItem>
              </Appear>
            </List>
            <Notes>
              <div>Du js est ajouté dans le navigateur pour rendre
                les sites plus dynamique
              </div>
              <div>
                Bataille entre Netscape et IE
              </div>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Specification ECMA-262</Heading>
          <Table>
              <TableRow>
                <TableItem>June 1997</TableItem>
                <TableItem>ES1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 1998</TableItem>
                <TableItem>ES2</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>JDecember 1999</TableItem>
                <TableItem>ES3</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>\</TableItem>
                <TableItem>ES4</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>December 2009</TableItem>
                <TableItem>ES5</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 2015</TableItem>
                <TableItem>ES6</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>WIP</TableItem>
                <TableItem>ES7</TableItem>
              </TableRow>
          </Table>
          <Notes>ES4 Abandonnée</Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.youCanUse.replace('/', '')} />
            <Appear fit="1">
              <Text size={6} textColor="secondary"><a class="fragment" href="http://kangax.github.io/compat-table/es6/">*Under Conditions...</a></Text>
            </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Data Type</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Table>
                <TableHeader>
                  <TableRow s="bold">
                    <TableHeaderItem>Type</TableHeaderItem>
                    <TableHeaderItem>Result</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableItem>Undefined</TableItem>
                    <TableItem>"undefined"</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo;"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Null / Object</TableItem>
                    <TableItem>"object"</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo = {}; var foo = null;"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Boolean</TableItem>
                    <TableItem>"boolean"</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo = true;"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Number</TableItem>
                    <TableItem>"number"</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo= 5;"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>String</TableItem>
                    <TableItem>string</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo = 'yolo';"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Function object</TableItem>
                    <TableItem>"function"</TableItem>
                    <TableItem>
                      <CodePane
                        lang="jsx"
                        source="var foo = () => { }"
                        margin="20px auto"
                        overflow = "overflow"
                        />
                    </TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Number</Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/l1-example/2.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Context</Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/l1-example/3.js')}
              margin="20px auto"
              overflow = "overflow"
              />
              <Notes>Result : inside</Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Context</Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/l1-example/4.js')}
              margin="20px auto"
              overflow = "overflow"
              />
              <Notes>Result :  inside, outside</Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/5.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/6.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/7.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/8.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Errors</Heading>
          <List>
            <ListItem>Error</ListItem>
            <ListItem>EvalError</ListItem>
            <ListItem>RangeError</ListItem>
            <ListItem>ReferenceError</ListItem>
            <ListItem>SyntaxError</ListItem>
            <ListItem>TypeError</ListItem>
            <ListItem>URIError</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Loop</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/9.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/14.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              Attention à la structure, présentation des "template string"
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/12.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/13.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/10.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/11.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/15.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              Result : Method : undefined
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/16.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/17.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/18.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/19.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/20.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/21.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Ajax</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Fetch</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/22.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Fetch</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/23.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/24.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/25.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>BabelJS</Heading>
          <Image src={images.babelMeme.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>WebPack</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>PackageManager</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>NPM</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Yarn</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>package.json</Heading>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/l1-example/26.json')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        
      </Deck>
    );
  }
}
