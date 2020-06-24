import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import { TiThumbsUp } from "react-icons/ti"
import Button from 'react-bootstrap/Button'

export class CommentCard extends Component {
  render() {
    return (
      <div style={{paddingTop: 20}}>
        <Card border='primary'>
          <Card.Body>
          <div style={{display: 'flex', alignContent:'space-between'}}>
              <Card.Title style={{flex:1}}><h4>Author</h4></Card.Title>
              <p>Timestamp</p>
            </div>
            <Media>
              <Media.Body>
                <p>body</p>
              </Media.Body>
            </Media>
          </Card.Body>
          <Card.Footer>
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
              <div style={{ flex: 3 }} />
              <Button><TiThumbsUp /></Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(CommentCard)