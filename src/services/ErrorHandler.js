export function createErrorHandler(msg, returnValue = null) {
    return function(res) {
        if (res.status !== 200) {
            alert(msg);
            return returnValue;
        }

        return res.json();
    };
}
