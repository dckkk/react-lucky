// Login Actions
const profile = require('../store/profiles.json');

export const loginUser = (data) => {
    var profiles = profile.profiles
    , username = data.username
    , password = data.password
    , role = data.role;

    for (let item of profiles) {
        if (username == item.username && password == item.password && role == item.role) {
            sessionStorage.setItem("id", item.profile_id);
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("role", role);

            return 200;            
        } else {
            return 400;
        }
    }
    
}

export const logoutUser = () => {
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("role")

    return 200;
}