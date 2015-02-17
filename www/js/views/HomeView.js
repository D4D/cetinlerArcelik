var HomeView = function (service) {

	this.initialize = function () {
//		alert('homeView init');
        this.$el = $('<div/>');
        this.render();
    };

	this.render = function() {
//		alert('homeView render');
		this.$el.html( app.templates.home() );
		$('.content', this.$el).html();
		alert('homeView rendered');
		return this;
    };

    this.initialize();
}
