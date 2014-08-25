var myModule = (function(){
	var x = 10;
	function _logX(){
		console.log('Logging',x);
	}
	return {
		y:20,
		bar: 	function(){
			console.log(x);
			_logX();
			console.log(this.y);
		}
	}
})();

myModule.bar();