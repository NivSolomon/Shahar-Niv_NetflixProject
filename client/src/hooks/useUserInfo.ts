import { useSelector } from 'react-redux';
import { IUserInfo } from '../types/interfaces';

type UserInfoState = {
    userInfo: IUserInfo;
}

const useUserInfo = (): IUserInfo => {
    return useSelector((state: UserInfoState) => state.userAuth.userInfo);
}

export default useUserInfo;
