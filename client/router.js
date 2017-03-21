FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});
FlowRouter.route('/docs', {
  name: "docs",
  action: function() {
    BlazeLayout.render("docLayout", {content: "docs"});
  }
});
FlowRouter.route('/doc-detail', {
  name: "doc_detail",
  action: function() {
    BlazeLayout.render("docLayout", {content: "doc_details"});
  }
});
FlowRouter.route('/doc-list', {
  name: "doc_list",
  action: function() {
    BlazeLayout.render("docLayout", {content: "doc_list"});
  }
});
FlowRouter.route('/price', {
  name: "livechat",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "price"});
  }
});
FlowRouter.route('/blog', {
  name: "blog",
  action: function() {
    BlazeLayout.render("docLayout", {content: "docs"});
  }
});
FlowRouter.route('/live-chat', {
  name: "livechat",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "livechat"});
  }
});
FlowRouter.route('/customers', {
  name: "customers",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "customers"});
  }
});
FlowRouter.route('/demos', {
  name: "demos",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "demos"});
  }
});

FlowRouter.route('/posts/:postId', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postItem"});
  }
});
