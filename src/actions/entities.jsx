// Entity Actions
var data = require('../store/tables.json');
localStorage.setItem("data", JSON.stringify(data));

export const getData = (key, userId) => {
    var exp = new RegExp (key)
    , result = []
    , res = {}

    data = JSON.parse(localStorage.getItem("data"))
    for (let i in data) {
        for (let items of data[i]) {
            if (key) {
                if (items.name.match(exp)) {
                    var name = items.name
                    var isLiked = checkLike(userId, items.likes)
                    res = {
                        "name": name,
                        "isLiked": isLiked
                    }
                    result.push(res)
                }
            } else {
                var name = items.name
                var isLiked = checkLike(userId, items.likes)
                res = {
                    "name": name,
                    "isLiked": isLiked
                }
                result.push(res)
            }
        }
    }

    return result;
}
// item.likes.map((like) => {
                    
// })
export const like = (userId, name, type) => {
    data = JSON.parse(localStorage.getItem("data"))
    
    for (let i in data) {
        for (let item of data[i]) {
            if (item.name == name) {
                if (type == "unlike") {
                    for (let i in item.likes) {
                        if (item.likes[i] !== null) {
                            if (item.likes[i].profile_id == userId) {
                                delete item.likes[i];
                            }
                        }
                    }
                } else {
                    item.likes.push({"profile_id": userId});
                }
            }
        }
    }
    
    localStorage.setItem("data", JSON.stringify(data));

    return true;
}

export const countLike = () => {
    let result = []
    , res = {};
    data = JSON.parse(localStorage.getItem("data"))

    data.tables.map(data => {
        data.count = 0;
        data.likes.map(like => {
            if (like) {
                data.count += 1;
            }
        })
        res = {
            "name": data.name,
            "likes": data.count
        }
        result.push(res);
    })

    return result;
}

const checkLike = (userId, obj) => {
    var result = false;
    for (let i in obj) {
        if (obj[i] !== null) {
            if (userId == obj[i].profile_id) {
                result = true
            }
        }
    }

    return result;
}