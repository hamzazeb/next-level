import React, { useContext, useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles/styles";
import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from 'react-native-phone-number-input';
import { getPatientIdByContactNo } from "../db/APIs";


export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const phoneInput = useRef(null);
  const phoneNumberConfirmationAlert = () =>
    Alert.alert(
      "Verify Phone Number",
      "We will be verifying the phone number:\n\n" + phoneNumber + "\n\nIs it ok? or you want to edit this number?",
      [
        {
          text: "Edit",
          onPress: () => {
            console.log("Edit pressed");

          },
        },
        { text: "OK", onPress: () => { console.log("OK Pressed"); login(); } }
      ],
      { cancelable: false }
    );


  const isPhoneNumber = (value) => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    console.log("checkValid", checkValid,)
    setValid(checkValid ? checkValid : false);
  }

  const login = () => {

    getPatientIdByContactNo(phoneNumber, 132)
      .then((result) => {
        console.log("new api", result);
        console.log("length", result.patient.length);
        if (result.patient.length > 0) {
          navigation.navigate("HomeScreen", {
            contactNo: phoneNumber,
          });
        } else alert("No record found againt this id");
      })
      .catch((error) => console.error(error));
  };


  return (
    <SafeAreaView style={[styles.SafeAreaStyle,]}>
      <View style={[{ flex: 1 }]}>
        <Image
          source={require("../assets/img/login-img.png")}
          style={{
            opacity: 0.8,
            width: "100%",
            height: 250,
            top: 0,
            position: "absolute",
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/img/myLogo.png")}
            style={{
              width: 250,
              height: 250,
              top: 50,
            }}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 35, marginHorizontal: Platform.OS === "ios" ? 43 : 37, }}>

          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="first"
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
              isPhoneNumber(text);

            }}
            countryPickerProps={{ withAlphaFilter: true }}
            disabled={disabled}
            //withDarkTheme
            // withShadow
            autoFocus={true}

            containerStyle={{
              backgroundColor: Colors.transparent,
              justifyContent: "center",
              paddingHorizontal: 2,
              width: "100%",
              height: 59,

            }}
            countryPickerButtonStyle={{
              width: "30%",
              borderBottomWidth: 2,
              borderBottomColor: inputFocused
                ? Colors.white
                : Colors.baseColorDarker2,
              borderLeftWidth: 2,
              borderTopWidth: 2,
              borderTopColor: inputFocused
                ? Colors.baseColorDarker2
                : Colors.white,
              borderColor: inputFocused
                ? Colors.baseColorDarker2
                : Colors.white,
              margin: 0,
              backgroundColor: inputFocused
                ? Colors.baseColorDarker
                : Colors.baseColor,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderRightColor: Colors.baseColorDarker2,
              paddingLeft: 11,
              paddingRight: 5,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
            }}
            textContainerStyle={
              {
                borderBottomWidth: 2,
                borderBottomColor: inputFocused
                  ? Colors.white
                  : Colors.baseColorDarker2,
                borderRightWidth: 2,
                borderTopWidth: 2,
                borderTopColor: inputFocused
                  ? Colors.baseColorDarker2
                  : Colors.white,
                borderColor: inputFocused
                  ? Colors.baseColorDarker2
                  : Colors.white,
                margin: 0,
                borderBottomWidth: 1,
                paddingLeft: 11,
                paddingRight: 15,
                borderTopRightRadius: 40,
                borderBottomRightRadius: 40,
                flexDirection: 'row',
                justifyContent: 'center',
              }
            }

            codeTextStyle={{
              color: Colors.titleColor,
            }}

            textInputStyle={{
              color: Colors.titleColor,
              marginLeft: -6,
              paddingBottom: .5,
              paddingTop: 1,
            }}
            placeholder={"3001234567"}
          />
          <View style={{ marginTop: Platform.OS === "ios" ? 11 : 7 }}>
            <Button
              buttonStyle={{
                height: 56,
                backgroundColor: Colors.primaryColor,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: valid ? Colors.primaryLight : Colors.baseColor,
                borderBottomColor: valid ? Colors.primaryDark : Colors.baseColorDarker,
                borderTopColor: valid ? Colors.primaryLight : Colors.baseColor,
              }}
              titleStyle={{
                fontSize: 16,
                color: Colors.white
              }}
              title="Sign In"
              disabled={!valid}
              onPress={() => phoneNumberConfirmationAlert()}
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
