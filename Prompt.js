import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Modal, TextInput, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class Prompt extends React.Component {
    
    state = {
        visible: false,
        inputValue:''
    }

    _onSubmit = () => {
        this.props.onSubmit( this.state.inputValue );
    }

    _onCancel = () => {
        this.props.onCancel();
    }

    render () {
        const margin = 10; // Global Margin between elements
        return (
            <Modal
                animationType={ this.props.animationType }
                transparent={false}
                visible={ this.props.visible }
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: margin
                    }}>
                    <Text h3 style={{ ...this.props.title.style, margin }}>
                        { this.props.title.text }
                    </Text>
                    <TextInput
                        style={{ ...this.props.input.style, margin }}
                        keyboardType={ this.props.input.keyboardType }
                        autoFocus={true}
                        maxLength={ this.props.input.maxLength }
                        placeholder={ this.props.input.placeholder }
                        onChangeText={(inputValue) => {
                                this.setState({inputValue})
                        }}
                    />
                    <Button
                        style={{ margin }}
                        backgroundColor={ this.props.submitButton.color }
                        large
                        rounded
                        title={ this.props.submitButton.text }
                        onPress={ this._onSubmit }
                    />
                    <Button
                        style={{ margin }}
                        backgroundColor={ this.props.cancelButton.color }
                        large
                        rounded
                        title={ this.props.cancelButton.text }
                        onPress={ this._onCancel }
                    />
                </View>
            </Modal>
        )
    }
}
// Prop types
Prompt.propTypes = {
    visible: PropTypes.bool.isRequired,
    animationType: PropTypes.oneOf(
        [
            'none',
            'slide',
            'fade'
        ]
    ),
    title: PropTypes.shape({
        text: PropTypes.string,
        style: ViewPropTypes.style
    }),
    input: PropTypes.shape({
        keyboardType: PropTypes.oneOf(
            [
                'default', 
                'number-pad', 
                'decimal-pad', 
                'numeric', 
                'email-address', 
                'phone-pad'
            ]
        ), 
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        style: ViewPropTypes.style
    }),
    submitButton: PropTypes.shape({
        text: PropTypes.string,
        color: PropTypes.string
    }),
    cancelButton: PropTypes.shape({
        text: PropTypes.string,
        color: PropTypes.string
    }),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

// Prop default values
Prompt.defaultProps = {
    animationType: 'slide',
    title: {
        text: '',
        style: {
            color: '#55a304'
        }
    },
    input: {
        keyboardType: 'default',
        placeholder: 'Input value',
        maxLength: 15,
        style: { fontSize: 48 },
    },
    submitButton: {
        text: 'Submit',
        color: '#55a304'
    },
    cancelButton: {
        text: 'Cancel',
        color: '#FF5723'
    }
}