# Prompt input component for react elements.
Open modal with input field based on react native elements.

Usage:
```js
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Prompt } from 'react-native-elements-prompt';

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
