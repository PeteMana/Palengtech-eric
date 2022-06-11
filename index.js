import 'react-native-gesture-handler';
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App.js';
import { name as appName } from './app.json';
import { AuthProvider } from './src/context/AuthContext';
import { AxiosProvider } from './src/context/AxiosContext';
import React from 'react';

const Root = () => {
    return (
        <AuthProvider>
            <AxiosProvider>
                <App />
            </AxiosProvider>
        </AuthProvider>
    );
};


AppRegistry.registerComponent(appName, () => Root);
