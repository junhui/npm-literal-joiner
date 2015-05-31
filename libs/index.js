var lj = function(obj, separator){
	var result = [];
	for(var key in obj){
		result.push(key);
		if(typeof obj[key] === 'object'){
			result.push(lj(obj[key], separator));
		}
		else{
			result.push(obj[key]);
		}
	}
	return result.join(separator || '');
};

module.exports = lj;
