var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function() {
		this.projects = new ProjectsCollection();
		this.loadingView = new LoadingView({
			projects: this.projects
		});
		this.homeView = new HomeView({
			projects: this.projects
		});
		this.playView = new PlayView({
			projects: this.projects
		});
		this.settingsView = new SettingsView({
			projects: this.projects
		});
		this.leaderboardsView = new LeaderboardsView({
			projects: this.projects
		});

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'loading': 'loading',
				'home': 	'home',
				'play': 	'play',
				'leaderboards': 'leaderboards',
				'settings': 	'settings',
				'': 'loading',
			},

			loading: function() {
			console.log('loading screen');
			self.hideAllPages();
			self.loadingView.$el.show();
			setTimeout(function() {
				self.loadingView.$el.hide();
				self.homeView.$el.show();
			}, 4000);

		},
			home: function() {
				self.hideAllPages();
				self.homeView.$el.show();
			},

			play: function() {
				self.hideAllPages();
				self.playView.$el.show();
						},

			leaderboards: function() {
				self.hideAllPages();
				self.leaderboardsView.$el.show();
			},

			settings: function() {
				self.hideAllPages();
				self.settingsView.$el.show();
			}
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();

	}
});
