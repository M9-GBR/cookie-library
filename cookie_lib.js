/**
 * The CookieSaver class. You can use the pre-defined instance of this class: 'cookieSaver' instead.
 */
class CookieSaver {
    /**
     * Sets a cookie. If the cookie is present, it can be used to change its value.
     * @param {string} name The name of the cookie.
     * @param {any} value The content of the cookie.
     * @param {number} days The amount of days the cookie should last. Default 1.
     * @param {string} path The directory or path the cookie should be saved in. Default ' / '.
     */
    set(name, value, days = 1, path = '/') {
        let date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

        let expires = "expires=" + date.toUTCString()
        document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + `;path=${path}`
    }

    /**
     * Sets multiple cookies. If any cookie in the set is present, it can be used to change their values. 
     * @param {object} cookies Key-value pairs where the key is the cookie name and value is the cookie value.
     * @param {number} days The amount of days the set of cookies should last. Default 1.
     * @param {string} path The directory or path the set of cookies should be saved in. Default ' / '.
     */
    setAll(cookies, days = 1, path = '/') {
        for (const cookie in cookies) {
            let date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

            let expires = "expires=" + date.toUTCString()
            document.cookie = cookie + "=" + JSON.stringify(cookies[cookie]) + ";" + expires + `;path=${path}`
        }
    }

    /**
     * Gets the value of a cookie in the current path or directory.
     * @param {string} name The name of the cookie the value is stored in.
     * @returns {any | null} The cookie value if present and null if the cookie is not found.
     */    
    get(name) {
        let cookies = document.cookie.split(";")

        for (const c of cookies) {
            if (c.split("=")[0].trim() == name) {
                return JSON.parse(c.split("=")[1])
            }
        }

        return null
    }

    /**
     * Gets all cookies in the current path or directory
     * @returns {{name: value} | {}} Key-value pairs of cookies, where the key is the cookie name and value is the cookie value
     */
    getAll() {
        let cookieObj = {}

        document.cookie.split(";").forEach(cookie => {
            cookieObj[cookie.split("=")[0].trim()] = JSON.parse(cookie.split("=")[1])
        })

        return cookieObj
    }

    /**
     * Removes a cookie stored in the current path or directory.
     * @param {string} name The cookie to be removed.
     */
    remove(name = '') {
        document.cookie = `${name}=;expires=Thus, 01 Jan 1970 00:00:00 GMT; path=/`
    }

    /**
     * Removes all cookies in the current path or directory.
     */
    removeAll() {
        document.cookie.split(";").forEach(cookie => {
            let cName = cookie.split("=")[0].trim()
            document.cookie = `${cName}=;expires=Thus, 01 Jan 1970 00:00:00 GMT; path=/`
        })
    }

    /**
     * Checks whether a cookie is present in the current path or directory.
     * @param {string} name The name of the cookie to be checked.
     * @returns {boolean} True if the cookie is present or False if cookie does not exist.
     */
    exists(name) {
        let cookies = document.cookie.split(";")

        for (const c of cookies) {
            if (c.split("=")[0].trim() == name) {
                return true
            }
        }

        return false
    }
}

/**
 * For easier usage of browser cookies.
 */
const cookieSaver = new CookieSaver()