var jsCipher = (function() {
	var jsCipher = {};
	var slice = Array.prototype.slice;
	var nativeForEach = Array.prototype.forEach;

	jsCipher._each = function(obj, iterator, context)
	{
		if (obj == null) return;
		if (nativeForEach && obj.forEach === nativeForEach)
		{
			obj.forEach(iterator, context);
		}
		else if (obj.length === +obj.length)
		{
			for (var i = 0, l = obj.length; i < l; i++)
			{
				if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
			}
		}
		else 
		{
			for (var key in obj)
			{
				if (hasOwnProperty.call(obj, key))
				{
					if (iterator.call(context, obj[key], key, obj) === breaker) return;
				}
			}
		}
	};
	//--------------------------------------------------------------------
	jsCipher._extend = function(obj) {
		jsCipher._each(slice.call(arguments, 1), function(source) {
			for (var prop in source) {
				if (source[prop] !== void 0) obj[prop] = source[prop];
			}
		});
		return obj;
	};
	//--------------------------------------------------------------------
	jsCipher._defaults = function(obj)
	{
		jsCipher._each(slice.call(arguments, 1), function(source)
		{
			for (var prop in source)
			{
				if (obj[prop] == null) obj[prop] = source[prop];
			}
		});
		return obj;
	};
	//--------------------------------------------------------------------
	jsCipher.test1 = function()
	{
		console.log("Test 1");
	};

	jsCipher.test2 = function()
	{
		console.log("Test 2");
	};
	
	return jsCipher
})();
