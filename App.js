/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Razorpay from "react-native-customui";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const optionsNetbanking = {
  currency: 'INR',
  amount: '100',
  contact: '9999999999',
  key_id: 'rzp_test_1DP5mmOlF5G5ag',
  email: 'a@example.com',
  method: 'netbanking',
  bank: 'UTIB',
};

const optionsCard = {
  currency: 'INR',
  amount: '100',
  contact: '9999999999',
  key_id: 'rzp_test_1DP5mmOlF5G5ag',
  email: 'a@example.com',
  method: 'card',
  'card[number]': '4111111111111111',
  'card[name]': 'Razorpay',
  'card[expiry_month]': '01',
  'card[expiry_year]': '24',
  'card[cvv]': '123'
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, onChangeText] = React.useState("");


  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
        <Text
          style={[
            styles.sectionTitleMain,
            {
              color: isDarkMode ? Colors.white : Colors.black,
              margin: 12
            },
          ]}>
          Razorpay React Native
        </Text>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
                margin:10
              },
            ]}>
            Payment Methods With Preset Payload And Test Key
          </Text>
          <TouchableHighlight 
                style ={{
                  marginStart:12,
                  marginEnd:12
                }}>
          <Button style={styles.button} title='Netbanking' onPress={()=>{
            startRazorpayPayment(optionsNetbanking);
          }}/>
          </TouchableHighlight>
          <TouchableHighlight 
                style ={{
                  marginStart:12,
                  marginEnd:12
                }}>
          <Button style={styles.button} title='Cards' onPress={()=>{
            startRazorpayPayment(optionsCard);
          }}/>
          </TouchableHighlight>
          <TouchableHighlight 
                style ={{
                  marginStart:12,
                  marginEnd:12
                }}>
          <Button style={styles.button} title='Wallet' onPress={()=>{
            const options = {
              currency: 'INR',
              amount: '100',
              contact: '9999999999',
              key_id: 'rzp_test_1DP5mmOlF5G5ag',
              email: 'a@example.com',
              method: 'wallet',
              wallet: 'airtelmoney'
            }
            startRazorpayPayment(options);
          }}
          />
          </TouchableHighlight>
          <TouchableHighlight 
                style ={{
                  marginStart:12,
                  marginEnd:12
                }}>
          <Button 
            style={styles.button}
            title='UPI Intent'
            onPress={()=>{
              const options = {
                currency: 'INR',
                amount: '100',
                contact: '9999999999',
                key_id: 'rzp_test_1DP5mmOlF5G5ag',
                email: 'a@example.com',
                method: 'upi',
                '_[flow]':'intent'
              }
              startRazorpayPayment(options);
            }}
          />
          </TouchableHighlight>
          <TouchableHighlight 
                style ={{
                  marginStart:12,
                  marginEnd:12
                }}>
          <Button 
            style={styles.button}
            title='UPI Collect: Success'
            onPress={()=>{
              const options = {
                currency: 'INR',
                amount: '100',
                contact: '9999999999',
                key_id: 'rzp_test_1DP5mmOlF5G5ag',
                email: 'a@example.com',
                method: 'upi',
                vpa: 'success@razorpay'
              }
              startRazorpayPayment(options);
            }}
          />
          </TouchableHighlight>
          <TouchableHighlight 
                style ={{
                   marginStart:12,
                   marginEnd:12
                }}>
          <Button 
            style={styles.button}
            title='UPI Collect: Failure'
            onPress={()=>{
              const options = {
                currency: 'INR',
                amount: '100',
                contact: '9999999999',
                key_id: 'rzp_test_1DP5mmOlF5G5ag',
                email: 'a@example.com',
                method: 'upi',
                vpa: 'failure@razorpay'
              }
              startRazorpayPayment(options);
            }}
          />
          </TouchableHighlight>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
              margin: 12
            },
          ]}>
          If you want to use a custom payload with your key, paste the JSON Object below and hit "Pay Now"
        </Text>
          <TextInput 
            multiline
            numberOfLines={10}
            editable
            placeholder='Custom Payload'
            onChangeText={text => onChangeText(text)}
            style={styles.input}
          />
          <TouchableHighlight 
                style ={{
                   margin:12
                }}>
            <Button style={[{
              margin:12
            }]} title='Pay Now' onPress={()=>{
              startRazorpayPayment(JSON.parse(text))
            }} />
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function startRazorpayPayment(options){
  Razorpay.open(options)
  .then((data)=>{
    alert(JSON.stringify(data));
    console.log(data);
  }).catch((error)=>{
    alert(JSON.stringify(error));
    console.log(error);
  });
}

const styles = StyleSheet.create({
  sectionTitleMain: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
