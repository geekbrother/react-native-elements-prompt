# React native prompt.
[![npm version](https://badge.fury.io/js/react-native-elements-prompt.svg)](https://badge.fury.io/js/react-native-elements-prompt)  

### Full screen prompt with input field for react-native.  
Based on react native elements buttons and react native modal.

## Demo:

![alt Demo](https://github.com/geekbrother/react-native-elements-prompt/raw/master/demo.gif)

## Installation:
NPM installation.

```
npm install --save react-native-elements-prompt
```


## Props:
Required props:
* visible: bool
* onSubmit: func( inputValue )
* onCancel: func()

Optional props:
 * Full list of props, see in example. // TODO: add list of optional props to Readme.

## Usage:
How to use it in a react-native component:

```js
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Prompt from 'react-native-elements-prompt';

export default class Component extends React.Component {

    state = {
      promptValue: '',
      showPrompt: false
    }
    
    _onPromptSubmit = ( inputValue ) => {
      this.setState({
        promptValue: inputValue,
        showPrompt: false
      })
    }
    _showPrompt = () => {
      this.setState({
        showPrompt: true
      })
    }
    _hidePrompt = () => {
      this.setState({
        showPrompt: false
      })
    }
    
  render() {
      return (
        <View>  
          <Prompt
            visible={this.state.showPrompt}
            animationType='slide'
            title={{
              text:'Input something',
              style: {
                color:'grey'
              }
            }}
            input={{
              keyboardType:'numeric',
              placeholder:'some text',
              maxLength: 5,
              style: {
                fontSize: 48
              }
            }}
            submitButton={{
              text:'OK',
              color:'orange'
            }}
            cancelButton={{
              text:'Cancel'
              color:'red'
            }}
            onSubmit={ this._onPromptSubmit }
            onCancel={ this._hidePrompt }
          />  
          <Button
            title='Show Prompt'
            onPress={ this._showPrompt }
          />   
        </View>
      )
   }
}
```
