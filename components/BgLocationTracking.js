import React from 'react';
import { Alert } from 'react-native';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import url, { BuildPost } from '../networking/Http';
import { InitWS, Send } from '../networking/WebSocket';

export function UpdateMyCurrentLocation(successFn, errorFn) {
    BackgroundGeolocation.getCurrentLocation(successFn, errorFn)
}

export function StartBgTracking(userID) {

    InitWS(
        userID,
        () => {
            console.log(".....opened")
        },
        (e) => {
            // a message was received
            console.log(e.data);
        },
        (e) => {
            // an error occurred
            console.log(e.message);
        },
        (e) => {
            // connection closed
            console.log(e.code, e.reason);
        },
    )

    BackgroundGeolocation.configure({
        desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
        stationaryRadius: 50,
        distanceFilter: 50,
        notificationTitle: 'Background tracking',
        notificationText: 'enabled',
        debug: true,
        startOnBoot: false,
        stopOnTerminate: true,
        locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
        interval: 10000,
        fastestInterval: 5000,
        activitiesInterval: 10000,
        stopOnStillActivity: false,
        url: url.UploadLocationURL,
        httpHeaders: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-FINDNOW-NAME-ID': url.RequestHeader,
        },
        // customize post properties
        postTemplate: {
            lat: '@latitude',
            lon: '@longitude',
            uid: userID
        }
    });

    BackgroundGeolocation.on('location', (location) => {
        // handle your locations here
        // to perform long running operation on iOS
        // you need to create background task
        BackgroundGeolocation.startTask(taskKey => {
            // execute long running task
            // eg. ajax post location
            // IMPORTANT: task has to be ended by endTask
            BackgroundGeolocation.endTask(taskKey);
        });
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
        // handle stationary locations here
        // Actions.sendLocation(stationaryLocation);
    });

    BackgroundGeolocation.on('error', (error) => {
        console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
        console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
        console.log('[INFO] BackgroundGeolocation service has been stopped');
    });

    BackgroundGeolocation.on('authorization', (status) => {
        console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
        if (status !== BackgroundGeolocation.AUTHORIZED) {
            // we need to set delay or otherwise alert may not be shown
            setTimeout(() =>
                Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
                    { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
                    { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
                ]), 1000);
        }
    });

    BackgroundGeolocation.on('background', () => {
        console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
        console.log('[INFO] App is in foreground');
    });

    BackgroundGeolocation.on('abort_requested', () => {
        console.log('[INFO] Server responded with 285 Updates Not Required');

        // Here we can decide whether we want stop the updates or not.
        // If you've configured the server to return 285, then it means the server does not require further update.
        // So the normal thing to do here would be to `BackgroundGeolocation.stop()`.
        // But you might be counting on it to receive location updates in the UI, so you could just reconfigure and set `url` to null.
    });

    BackgroundGeolocation.checkStatus(status => {
        console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
        console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
        console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

        // you don't need to check status before start (this is just the example)
        if (!status.isRunning) {
            BackgroundGeolocation.start(); //triggers start on start event
        }
    });

    // you can also just start without checking for status
    // BackgroundGeolocation.start();
}

export function StopBgTracking() {
    // unregister all event listeners
    BackgroundGeolocation.events.forEach(event => BackgroundGeolocation.removeAllListeners(event));
}