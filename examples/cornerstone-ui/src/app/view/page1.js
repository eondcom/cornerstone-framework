define([
	'jquery',
	'underscore',
	'backbone',
	'template!view/page1',
	'style!view/page1'
], function ($, _, Backbone, template) {
	return Backbone.View.extend({

		el: 'section#page1',

		render: function () {
			this.$el.html(template());
			return this;
		},

		events: {
			'click button.next': 'nextPage'
		},

		nextPage: function () {
			location.href = '#page2';
		}
	});
});
