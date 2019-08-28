export function setLoginInfoInLocalStorage(profile_object,Zi){
    
    localStorage.setItem('user_name', profile_object.name);
    localStorage.setItem('user_image', profile_object.imageUrl);
    localStorage.setItem('user_google_id', profile_object.googleId);
    localStorage.setItem('access_token', Zi.access_token);
}

export function setLogoutInfoInLocalStorage(){
    localStorage.clear();
}

export function checkIsAuthenticated(){
    const user_google_id = localStorage.getItem('user_google_id');
    if(user_google_id != undefined){
        return true;
    }
    return false;
}

export default {
    setLoginInfoInLocalStorage,
    setLogoutInfoInLocalStorage,
    checkIsAuthenticated,
}