import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Survey from 'survey-react';

import { actions as appActions } from 'reducers/application';

export class SurveyPage extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      submitSurvey: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    const json = `{
   {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Squestion1",
     "title": "Pick your favorite Cherry flavor",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "item1",
       "text": "TFA Cherry Extract"
      },
      {
       "value": "item2",
       "text": "WF Black Cherry Jelly Bean"
      },
      {
       "value": "item3",
       "text": "FLV Black Cherry"
      },
      {
       "value": "item16",
       "text": "INW Black Cherry For Pipe"
      },
      {
       "value": "item4",
       "text": "INW Cherries"
      },
      {
       "value": "item13",
       "text": "FA Cherry"
      },
      {
       "value": "item5",
       "text": "FA Black Cherry"
      },
      {
       "value": "item8",
       "text": "TFA Black Cherry"
      },
      {
       "value": "item6",
       "text": "FW Cherry Crush"
      },
      {
       "value": "item14",
       "text": "FW Cherry Berry"
      },
      {
       "value": "item7",
       "text": "MB Red Cherry"
      },
      {
       "value": "item10",
       "text": "FLV Cherry Filling"
      },
      {
       "value": "item11",
       "text": "FLV Cherry Blossom"
      },
      {
       "value": "item12",
       "text": "TFA Cherry Blossom"
      },
      {
       "value": "item15",
       "text": "CAP Tart Cherry"
      },
      {
       "value": "item17",
       "text": "TFA Maraschino Cherry"
      },
      {
       "value": "item9",
       "text": "FLV Rainier Cherry"
      },
      {
       "value": "item18",
       "text": "FLV Cherry Filling"
      }
     ],
     "otherText": "Something Else"
    }
   ]
  }
 ],
 "cookieName": "fotw-2020-01-28"
}
