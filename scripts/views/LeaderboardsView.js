var LeaderboardsView = Backbone.View.extend({
	el: '#leaderboards-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'onProjectAdded'
		);
		this.projects = options.projects;
		this.projects.on('add', this.onProjectAdded);
	},

	onProjectAdded: function(project) {
		var view = new IndividualProjectView({model: project});
		console.log(view.$el);
		this.$el.append(view.$el);
	}
});