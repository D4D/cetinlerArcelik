var CampaignService = function() {

    var url;

    this.initialize = function(serviceURL) {
//        alert('campaignService init');
        url = serviceURL ? serviceURL : "http://localhost:5000/campaigns";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }


}