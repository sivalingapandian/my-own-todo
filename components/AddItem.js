import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styled from "styled-components";

export default function AddItem(props) {
    const [item, setItem] = useState('');
    return (
        <ComponentContainer>
            <InputContainer>
                <Input placeholder="Add Task..." onChangeText={(textVal) => {
                    setItem(textVal);
                }} />
            </InputContainer>
            <SubmitButton
                onPress={() => {
                    props.addItem(item);
                }}
            >
                <Text>Submit</Text>
            </SubmitButton>
        </ComponentContainer>
    );
}

const styles = StyleSheet.create({
    addView: {
        flex: 0.2,
        justifyContent: 'center',
    }
});

//styles
const ComponentContainer = styled.View`
flex-direction: row;
`;

const InputContainer = styled.View`
flex-direction: row;
border-radius: 10px;
`;

const Input = styled.TextInput`
font-size: 20px;
background-color: white;
width: 300px;
margin-right: 20px;
padding: 10px;
margin-bottom: 20px;
border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
width: 50px;
justify-content: center;
align-items: center;
background-color: whitesmoke;
margin-bottom: 20px;
border-radius: 50px;
`;