export function createUser(user){
    return { type: "CREATE_USER", user}
}

export function actionListUsers(users){
    return { type: "LIST_USERS", users }
}

export function actionObtainInfo(user){
    return { type: "INFO_USER", user }
}

export function actionObtainInfoCache(user){
    return { type: "INFO_USER", user}
}