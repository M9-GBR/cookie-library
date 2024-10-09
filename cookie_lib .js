function setCookie(name, value, days) {
    let date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

    let expires = "expires=" + date.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

function getCookie(name) {
    let cookies = document.cookie.split(";")

    for (const c of cookies) {
        if (c.split("=")[0].trim() == name) {
            return c.split("=")[1]
        }
    }

    return null
}

function clearAllCookies() {
    document.cookie.split(";").forEach(cookie => {
        let cName = cookie.split("=")[0].trim()
        document.cookie = `${cName}=;expires=Thus, 01 Jan 1970 00:00:00 GMT; path=/`
    })
}

function clearCookie(name) {
    document.cookie = `${name}=;expires=Thus, 01 Jan 1970 00:00:00 GMT; path=/`
}

function cookieExists(name) {
    let cookies = document.cookie.split(";")

    for (const c of cookies) {
        if (c.split("=")[0].trim() == name) {
            return true
        }
    }

    return false
}

function getAllCookies() {
    let cookieObj = {}

    document.cookie.split(";").forEach(cookie => {
        cookieObj[cookie.split("=")[0].trim()] = cookie.split("=")[1]
    })

    return cookieObj
}