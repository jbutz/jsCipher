var jsCipher = (function() {
	var jsCipher = {};
	var slice = Array.prototype.slice;
	var nativeForEach = Array.prototype.forEach;
	jsCipher.optionsData = {};
	var defaults = {
		explainSteps: false,
		showSteps: false
	}

	jsCipher.fn = {};

	//--------------------------------------------------------------------
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
	//--------------------------------------------------------------------
	//--------------------------------------------------------------------
	//--------------------------------------------------------------------
	jsCipher.init = function(defaults)
	{
		if(defaults != undefined && defaults != "" && defaults != null && defaults.length != 0)
		{
			jsCipher.optionsData = jsCipher._extend(jsCipher.optionsData, defaults);
		}
	}
	jsCipher.option = function(key, value)
	{
		if(jsCipher.optionsData == undefined)
		{
			jsCipher.optionsData = {};
		}
		if(value != undefined)
		{
			// Set
			jsCipher.optionsData[key] = value;
			return true;
		}
		else
		{
			if(jsCipher.optionsData.hasOwnProperty(key))
			{
				return jsCipher.optionsData[key];
			}
			else
			{
				return undefined;
			}
		}
	}
	jsCipher.setOptions = function(json)
	{
		jsCipher.optionsData = jsCipher._extend(jsCipher.optionsData, json);
	}
	
	jsCipher._cmethod = function(method, func, value)
	{
		var x = jsCipher;
		if(x.fn.hasOwnProperty(method))
		{
			return x.fn[method].call(func,value);
		}
		else
		{
			if(window.console && window.console.log)
			{
				console.log("Error","No cipher method '"+method+"'.");
				return undefined;
			}
		}
	}

	jsCipher.encipher = function(method, value)
	{
		return jsCipher._cmethod(method,"encipher",velue);
	}

	jsCipher.decipher = function(method, value)
	{
		return jsCipher._cmethod(method,"decipher",velue);
	}
	//--------------------------------------------------------------------
	
	jsCipher.optionsData = jsCipher._defaults(jsCipher.optionsData, defaults);

	return jsCipher
})();
