export interface User {
    id: number;
    twitchId: string;
    username: string;
    avatar: string;
    accessToken?: string;
    refreshToken?: string;
    exp: number;
}