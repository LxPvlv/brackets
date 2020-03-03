module.exports = function check(str, bracketsConfig) {
    const close = [];
    return str
        .split("")
        .every(bracket =>
            bracketsConfig.some(bc =>
                bracket !== bc[0]
                    ? false
                    : bc[0] === close[close.length - 1]
                    ? (close.pop(), true)
                    : (close.push(bc[1]), true)
            )
                ? true
                : bracket === close.pop()
        )
        ? !close.length
        : false;
};
