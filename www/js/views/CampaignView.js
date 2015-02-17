var CampaignView = function (service) {

	this.initialize = function () {
		alert('> campaignView init');
        this.$el = $('<div/>');
        this.render();
    };

	this.render = function() {
		alert('> campaignView render');
		this.$el.html( this.template() );
		$('.content', this.$el).html(  );
		return this;
    };

    this.initialize();
}
CampaignView.template = Handlebars.compile( $("#campaign-view-tpl").html() );
