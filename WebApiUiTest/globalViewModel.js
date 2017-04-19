(function (WebApiTest){
	WebApiTest.ViewModel = function () {
		debugger;
		var viewModel = this;
		viewModel.Title = ko.observable("Hello World!");
	}
}(window.WebApiTest = window.WebApiTest || {}));