module.exports = function check(str, bracketsConfig) {
    const close = [];
    return str
        .split("")
        .every(bracket =>
            bracket === close[close.length - 1]
                ? close.pop()
                : bracketsConfig.some(bc =>
                      bracket === bc[0] && close.push(bc[1])
                  )
        )
        ? !close.length
        : false;
};
