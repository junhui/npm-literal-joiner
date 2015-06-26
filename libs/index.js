var lj = function(obj, separator, maxDepth) {
    maxDepth = maxDepth || Infinity;
    maxDepth--;
    var result = [];
    for (var key in obj) {
        result.push(key);
        if (typeof obj[key] === 'object') {
            if (maxDepth > 0) {
                result.push(lj(obj[key], separator, maxDepth));
            } else {
                result.push(JSON.stringify(obj[key]));
            }
        } else {
            result.push(obj[key]);
        }
    }
    return result.join(separator || '');
};

module.exports = lj;
