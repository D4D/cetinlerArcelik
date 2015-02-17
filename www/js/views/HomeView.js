var HomeView = function (service) {

	this.initialize = function () {
		alert('homeView init');
        this.$el = $('<div/>');
        this.render();
    };

	this.render = function() {
//		alert('homeView render');
		this.$el.html( this.template() );
		$('.content', this.$el).html();
		alert('homeView rendered');
		return this;
    };

    this.initialize();
}
HomeView.prototype.template = Handlebars.compile( $("#home-view-tpl").html() );
