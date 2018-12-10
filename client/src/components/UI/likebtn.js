import styled from "styled-components";
import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';

const Button = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
`;

export default class Likebtn extends Component {
    render () {
        return (
          <Button>
          <FacebookProvider appId="2401284699888073">
            <Like href="http://www.facebook.com" colorScheme="dark" />
          </FacebookProvider>
          </Button>
        )
    }
}