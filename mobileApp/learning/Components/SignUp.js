import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Button } from 'react-native';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.7, backgroundColor: 'white', width: "80%", paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 27, marginVertical: 5, fontWeight: 'bold' }}>Sign Up</Text>
                <Text>Please fill in this form to create an account!</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TextInput
                        style={{
                            height: 45,
                            // borderColor: 'gray',
                            // borderWidth: 1,
                            backgroundColor: 'lightgray',
                            flex: 0.5,
                            paddingHorizontal: 10,
                            marginEnd: 5
                        }}
                        placeholder="First Name"
                        onChangeText={text => setFirstName(text)}
                        defaultValue={firstName}
                    />
                    <TextInput
                        style={{
                            height: 45,
                            // borderColor: 'gray',
                            // borderWidth: 1,
                            backgroundColor: 'lightgray',
                            flex: 0.5,
                            paddingHorizontal: 10,
                            marginStart: 5
                        }}
                        placeholder="Last Name"
                        onChangeText={text => setLastName(text)}
                        defaultValue={lastName}
                    />
                </View>
                <TextInput
                    style={{
                        height: 45,
                        // borderColor: 'gray',
                        // borderWidth: 1,
                        backgroundColor: 'lightgray',
                        paddingHorizontal: 10,
                        marginVertical: 10
                    }}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    defaultValue={email}
                />
                <TextInput
                    style={{
                        height: 45,
                        // borderColor: 'gray',
                        // borderWidth: 1,
                        backgroundColor: 'lightgray',
                        paddingHorizontal: 10,
                        marginVertical: 10

                    }}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    defaultValue={password}
                />
                <TextInput
                    style={{
                        height: 45,
                        // borderColor: 'gray',
                        // borderWidth: 1,
                        backgroundColor: 'lightgray',
                        paddingHorizontal: 10,
                        marginVertical: 10
                    }}
                    placeholder="Confirm Password"
                    onChangeText={text => setConfirmPassword(text)}
                    defaultValue={confirmPassword}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={() => setSelection(!isSelected)}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Do you like React Native?</Text>
                    </View>
                </View>
                <Button
                    onPress={() => console.log(isSelected)}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});