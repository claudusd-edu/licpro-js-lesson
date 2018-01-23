// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction, Notes
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Prism
import langHttp from "prismjs/components/prism-http";
import langBash from "prismjs/components/prism-bash";


// Require CSS

require("prismjs/themes/prism-solarizedlight.css")
require("normalize.css");

let theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

theme = {
  ...theme,
  screen: {
    ...theme.screen,
      components: {
        ...theme.screen.components,
        codePane: {
          ...theme.screen.components.code,
          fontSize: '90%',
        }
      }
  }
}

//import { theme as themeSolarizedLight } from "spectacle-theme-solarized-light";

const images = {
  youCanUse: require('../assets/you-can-use.jpeg'),
  babelMeme: require('../assets/babel_meme.jpg'),
  component: require('../assets/component.png'),
  component1: require('../assets/component1.png'),
  component2: require('../assets/component2.png'),
  component3_1: require('../assets/component3-1.png'),
  component3_2: require('../assets/component3-2.png'),
  component4: require('../assets/component4.png'),
  component5: require('../assets/component5.png'),
};

class Example3_1 extends React.Component {
  changeColor(color) {
    const elem = document.getElementById("examplel3-1");
    elem.style.color = color;
  }

  render() {
    return (
      <div>
        <p id="examplel3-1">Un peu de texte.</p>
        <button onClick={() => this.changeColor('blue')}>bleu</button>
        <button onClick={() => this.changeColor('red')}>rouge</button>
      </div>
    )
  }
}

class Example3_3 extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {color: 'green'};
  }

  changeColor(color) {
    this.setState({color: color});
  }

  render() {
    const style = { color: this.state.color };
    return (
      <div>
        <p style={ style }>{this.props.text}</p>
        <button onClick={() => this.changeColor('blue')}>bleu</button>
        <button onClick={() => this.changeColor('red')}>rouge</button>
      </div>
    )
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} >
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
            <div>Brendan Eich avril 1995 Netscape,
              1998,
              2003 fin de netscape navigator par AOL,
              2014 quitte Mozzila et travail sur Brave
            </div>
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
          <Heading size={1} caps>Package Manager</Heading>
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
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 2</Heading>
          <Heading size={2} caps>NodeJS</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            From Server to Browser...
          </Heading>
          <Notes>
            <div>On server for HTTP Server</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            How it's work ?
          </Heading>
          <Notes>
            <div>Interprété + JIT</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>
              Engines
            </Heading>
            <Notes>
              <div>Plusieur implémentation = plusieur moteur</div>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>
              Chrome's V8 Engine
            </Heading>
            <Notes>
              <div>Open Source</div>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            NodeJS
          </Heading>
          <Notes>
            <div>Write in C++</div>
            <div>One Thread</div>
            <div>Asynchronous I/O</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Module
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            dal.js
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            function.js
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            require('http')
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            main.js
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source="node main.js"
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            HTTP
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            request
          </Heading>
          <CodePane
            lang="http"
            source={require('raw-loader!../assets/l2-example/5.http')}
            margin="20px auto"
            overflow = "overflow"
            />
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/l2-example/6.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="http"
            source={require('raw-loader!../assets/l2-example/5.http')}
            margin="20px auto"
            overflow = "overflow"
            />
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/l2-example/7.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="http"
            source={require('raw-loader!../assets/l2-example/5.http')}
            margin="20px auto"
            overflow = "overflow"
            />
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/l2-example/8.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="http"
            source={require('raw-loader!../assets/l2-example/9.http')}
            margin="20px auto"
            overflow = "overflow"
            />
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/l2-example/10.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Response
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/11.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            require('child_proces')
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="bash"
            source={require('raw-loader!../assets/l2-example/12.bash')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Controlleur
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Routeur
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Middleware
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            Express
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 3</Heading>
          <Heading size={2} caps>UI</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            HTML 5.x
          </Heading>
          <Notes>
            <div>Normé pas le W3C</div>
            <div>5.2 out, draf HTML 5.3</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/1.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
          Browser Engine
          </Heading>
          <Notes>
            <div>Read HTML</div>
            <div>Compute render</div>
            <div>Draw</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            DOM
          </Heading>
          <Notes>
            <div>Document Object Model</div>
            <div>Tree of element</div>
            <div>W3C</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Table>
                <TableHeader>
                  <TableRow s="bold">
                    <TableHeaderItem>Window</TableHeaderItem>
                    <TableHeaderItem>Mouse</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onclick</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onerror</TableItem>
                    <TableItem>ondblclick</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onload</TableItem>
                    <TableItem>onmousedown</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onbeforeunload</TableItem>
                    <TableItem>onmousemove</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onunload</TableItem>
                    <TableItem>onmouseout</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onresize</TableItem>
                    <TableItem>onmouseover</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onmouseup</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onscroll</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Table>
                <TableHeader>
                  <TableRow s="bold">
                    <TableHeaderItem>Form</TableHeaderItem>
                    <TableHeaderItem>Keyboard</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableItem>onblur</TableItem>
                    <TableItem>onkeydown</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onchange</TableItem>
                    <TableItem>onkeypress</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onfocus</TableItem>
                    <TableItem>onkeyup</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onreset</TableItem>
                    <TableItem>onmousemove</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onselect</TableItem>
                    <TableItem>onmouseout</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onsubmit</TableItem>
                    <TableItem>onmouseover</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            DOM API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/2.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Example3_1 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Touching the DOM is Evil
          </Heading>
          <List>
            <ListItem>It's Hard to test</ListItem>
            <ListItem>It's expensive</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Server Rendering
          </Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem>Load 1 HTML</ListItem>
            <ListItem>Load X CSS</ListItem>
            <ListItem>Load X JS</ListItem>
            <ListItem>Load X Picture</ListItem>
          </List>
          <Notes>
            <div>On each Page, load X element, draw 1 page</div>
            <div>Limit X load in parallal</div>
            <div>Network is slow</div>
            <div>Cache some data</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            SPA
          </Heading>
          <Notes>
            <div>Single Page Application</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Load 1 HTML</ListItem>
            <ListItem>Load X CSS</ListItem>
            <ListItem>Load X JS</ListItem>
            <ListItem>Load X Picture</ListItem>
          </List>
          <Notes>
            <div>Load html, js, css</div>
            <div>Create veiw</div>
            <div>After juste load data</div>
            <div>Cache app in browser</div>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2}>
            Why ?
          </Heading>
          <Notes>
            <div>Faster and more user friendly</div>
          </Notes>
        </Slide>
        <Slide>
          <List>
            <ListItem>Angular 5.2</ListItem>
            <ListItem>VueJS 2.5</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            ReactJS 16.2
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Open Source (MIT)</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>library view oriented</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Component
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Composable</ListItem>
            <Appear fid="1">
              <ListItem>Reusable</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Maintainable</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Testable</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component1.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component2.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeListComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component3_1.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeItemComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component3_2.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeItemComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component4.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeFormComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component5.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              ButtonComponent
            </Heading>
          </Appear>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require('raw-loader!../assets/l3-example/3.jsx')}
          ranges={[
            { loc: [0, 5] },
            { loc: [6, 9] },
            { loc: [10, 20] }
          ]}
          />
        <Slide transition={["fade"]} bgColor="primary">
          <Example3_3 text="Hello"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l3-example/4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/5.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            JSX
          </Heading>
          <Notes>
              <div>DSL</div>
              <div>Babel</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l3-example/6.jsx')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l3-example/7.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Lifecycle and API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>
              componentWillMount
            </ListItem>
            <ListItem>
              componentDidMount
            </ListItem>
            <ListItem>
              componentWillUnmount
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Virtual DOM
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>
              In-memory representation of the DOM
            </ListItem>
            <ListItem>
              render is call at every change of state
            </ListItem>
            <ListItem>
              React update the reald DOM
            </ListItem>
            <ListItem>
              It's Fast
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
