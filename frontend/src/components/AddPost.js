import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class AddPost extends Component {
  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <Card border='primary'>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title your post" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" placeholder="Your post" />
              </Form.Group>
              <div style={{ display: 'flex', alignContent: 'space-between' }}>
                <Button style={{flex:1}} variant="primary" type="submit">
                  Submit
                </Button>
                <div style={{flex:4 }}/>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(AddPost)