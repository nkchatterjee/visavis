import React, { Component } from 'react';
import { Button, Container, Form, Row, Col, FormControl } from "react-bootstrap";
import ChatMessage from './ChatMessage.jsx';

class Chat extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getMatchChats(this.props.match.id);
  }

  // add user email and log in to my state
  render() {
    const { chatMessage, chatOnChange  } = this.props;
    const chatMessages = [];
    const chats = this.props.matchChats;
		console.log('TCL: Chat -> render -> chats', chats)

    for (let i = 0; i < chats.length; i += 1) {

      chatMessages.push(<ChatMessage
        key={i}
        userId={this.props.userId}
        msgFrom={chats[i].fullname}
        msgFromId={chats[i].user_id}
        message={chats[i].message}
        timestamp={chats[i].timestamp}
      />);
    }

    return (
      <Container>
        <Row id='chat-row'>
          <Col id='chat-main' md={8} sm={12}>
            <div id='chat-messages' margin='1rem'>
              {chatMessages}
            </div>
            <div margin='1rem'>
              <FormControl as="textarea" rows="3" placeholder='' onChange={chatOnChange} id='chatMessage' value={chatMessage} />
            </div>
            <Form className="justify-content-end" inline>
            <Button className="chat-btns" variant="outline-info">Submit</Button>
        </Form>
          </Col>
        </Row>
        <Form className="justify-content-center" inline>
        <Button className="chat-btns" variant="success" size='lg'>✓</Button>
        <Button className="chat-btns" variant="danger" size='lg'>X</Button>
        </Form>
      </Container>
    )
  }
}

export default Chat;