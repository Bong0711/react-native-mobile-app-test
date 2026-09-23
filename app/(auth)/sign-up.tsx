import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Link} from "expo-router";

const signUp = () => {
    return (
        <View>
            <Text>signUp</Text>
            <Link href="/(auth)/sign-in">Sign In</Link>
        </View>
    );
};

export default signUp;

const styles = StyleSheet.create({});