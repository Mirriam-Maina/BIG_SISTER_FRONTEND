import React, {Component} from 'react';
import {
  Button,
  Responsive,
  Segment,
  Visibility,
  Input
} from 'semantic-ui-react';
import section1image from '../images/section1image.jpg';
import './main.css';


const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class Sections extends Component {

  render(){
    return(
      <React.Fragment>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              className="segment1"
              inverted
              textAlign="center"
              vertical>
              <div className="welcome">WELCOME TO BIG SISTER</div>
              <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaerat veniam magnam eum doloremque eos velit enim. Similique ex reprehenderit mollitia odit temporibus, consectetur placeat eius nihil eveniet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at quaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam at qua</p>
              <Button className="btn-learn-more">LEARN  MORE</Button>
            </Segment>
            <Segment
              className="segment2"
              inverted
              textAlign="center"
              vertical>
              <div>
                <h2 className="segment2imageText">Who are we?</h2>
                <p className="p-segment2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis dignissimos recusandae
                  porro. Quae odio omnis laudantium recusandae autem asperiores quis ipsum incidunt cupiditate.
                  Perspiciatis ad delectus itaque expedita temporibus. Nam aliquam, quaerat ipsum temporibus tempore
                  repellendus a minus inventore quae ut ratione velit dolor molestiae doloribus voluptate iste, debitis
                  voluptatem obcaecati! Quidem provident impedit beatae ullam dolores ratione nulla consequuntur vitae
                  cupiditate voluptatum rerum eaque harum facilis, in vero atque ad blanditiis quibusdam sequi
                  temporibus dolor. Hic deleniti quaerat dolore repellat pariatur perspiciatis laborum, nisi
                  consequuntur eos, voluptatibus sit doloribus unde quasi repellendus, asperiores expedita? Ipsum
                  possimus autem iusto.
                </p>
              </div>
            </Segment>
            <Segment
              className="segment3"
              inverted
              textAlign="center"
              vertical>
              <div className="segment3Text">LEARNING</div>
            </Segment>
            <Segment
              className="segment4"
              inverted
              textAlign="center"
              vertical>
              <h2 className="segment4imageText">Learning</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis dignissimos recusandae
                porro. Quae odio omnis laudantium recusandae autem asperiores quis ipsum incidunt cupiditate.
                Perspiciatis ad delectus itaque expedita temporibus. Nam aliquam, quaerat ipsum temporibus tempore
                repellendus a minus inventore quae ut ratione velit dolor molestiae doloribus voluptate iste, debitis
                voluptatem obcaecati! Quidem provident impedit beatae ullam dolores ratione nulla consequuntur vitae
                cupiditate voluptatum rerum eaque harum facilis, in vero atque ad blanditiis quibusdam sequi temporibus
                dolor. Hic deleniti quaerat dolore repellat pariatur perspiciatis laborum, nisi consequuntur eos,
                voluptatibus sit doloribus unde quasi repellendus, asperiores expedita? Ipsum possimus autem iusto.
              </p>
              <Button className="btn-find-sister">Find a Big Sister</Button>
            </Segment>
            <Segment
              className="segment5"
              inverted
              textAlign="center"
              vertical>
              <div className="segmentText">Living</div>
            </Segment>
            <Segment
              className="segment6"
              inverted
              textAlign="center"
              vertical>
              <h2 className="segment2imageText">Living</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis dignissimos recusandae
                porro. Quae odio omnis laudantium recusandae autem asperiores quis ipsum incidunt cupiditate.
                Perspiciatis ad delectus itaque expedita temporibus. Nam aliquam, quaerat ipsum temporibus tempore
                repellendus a minus inventore quae ut ratione velit dolor molestiae doloribus voluptate iste, debitis
                voluptatem obcaecati! Quidem provident impedit beatae ullam dolores ratione nulla consequuntur vitae
                cupiditate voluptatum rerum eaque harum facilis, in vero atque ad blanditiis quibusdam sequi temporibus
                dolor. Hic deleniti quaerat dolore repellat pariatur perspiciatis laborum, nisi consequuntur eos,
                voluptatibus sit doloribus unde quasi repellendus, asperiores expedita? Ipsum possimus autem iusto.
              </p>
            </Segment>
            <Segment
              className="segment7"
              inverted
              textAlign="center"
              vertical>
              <div className="segmentText">Inspiring</div>
            </Segment>
            <Segment
              className="segment8"
              inverted
              textAlign="center"
              vertical>
              <h2 className="segment4imageText">Be Inspired Be Inspiring</h2>
              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis dignissimos recusandae porro.
                Quae odio omnis laudantium recusandae autem asperiores quis ipsum incidunt cupiditate. Perspiciatis ad
                delectus itaque expedita temporibus. Nam aliquam, quaerat ipsum temporibus tempore repellendus a minus
                inventore quae ut ratione velit dolor molestiae doloribus voluptate iste, debitis voluptatem
                obcaecati!
                {' '}
              </p>
              <Button className="btn-find-sister">Be a Big Sister</Button>
            </Segment>
            <Segment
              className="segment9"
              inverted
              textAlign="center"
              vertical>
              <h2 className="connect">Connect</h2>
              <p className="connect-text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis dignissimos recusandae porro.
                Quae odio omnis laudantium recusandae autem asperiores quis ipsum incidunt cupiditate.
                {' '}
              </p>
              <p>
                <Input placeholder="Your Email Address..." className="subscribe-box" />
              </p>
              <Button className="btn-subscribe">Subscribe</Button>
            </Segment>

          </Visibility>
        </Responsive>
      </React.Fragment>
    );
  }
}

export  default  Sections;
