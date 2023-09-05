import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {AuthService} from "../auth.service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async (config) => {
        let accessToken = await AsyncStorage.getItem('token');
        let refreshToken = await AsyncStorage.getItem('refreshToken');

        if (accessToken) {
            const decodedToken = jwtDecode(accessToken);
            const now = Date.now() / 1000;
            if (decodedToken.exp < now) {
                const tokens = await AuthService.reqRefreshToken(accessToken, refreshToken);
                await AsyncStorage.setItem("token", tokens.data.accessToken);
                await AsyncStorage.setItem("refreshToken", tokens.data.refreshToken);
            }
        }

        accessToken = await AsyncStorage.getItem('token');
        if (accessToken) {
            config.headers.token = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
