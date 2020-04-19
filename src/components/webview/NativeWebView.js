import React from 'react';
import 'react-native-get-random-values';
import { WebView } from 'react-native-webview';

function NativeWebView() {
    return (
        <WebView
            source={{ uri: 'https://github.com/mayank8aug/ReactNative-Redux-Saga-Boilerplate' }}
        />
    );
}

export default NativeWebView;