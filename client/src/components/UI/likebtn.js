import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';

export default class likebtn extends Component {
    render () {
        return (

          <FacebookProvider appId="2401284699888073">
            <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
          </FacebookProvider>
        )
    }
}