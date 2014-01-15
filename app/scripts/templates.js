define(['handlebars'], function(Handlebars) {

this["JS"] = this["JS"] || {};
this["JS"]["Templates"] = this["JS"]["Templates"] || {};

Handlebars.registerPartial("author", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"original-author-image\" height=\"16\" width=\"16\" />\n<a href=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"original-author\" target=\"_blank\">";
  if (stack2 = helpers.displayName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.displayName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>";
  return buffer;
  }));

Handlebars.registerPartial("large-blog-gravatar", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img class=\"gravatar\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\"30\" width=\"30\" />";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }));

Handlebars.registerPartial("large-github-gravatar", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">\n	<img class=\"gravatar\" height=\"30\" width=\"30\" src=\"https://0.gravatar.com/avatar/"
    + escapeExpression(((stack1 = ((stack1 = depth0.actor_attributes),stack1 == null || stack1 === false ? stack1 : stack1.gravatar_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n</a>";
  return buffer;
  }));

Handlebars.registerPartial("small-github-gravatar", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span title=\"";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<img height=\"16\" width=\"16\" src=\"https://0.gravatar.com/avatar/"
    + escapeExpression(((stack1 = ((stack1 = depth0.actor_attributes),stack1 == null || stack1 === false ? stack1 : stack1.gravatar_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n</span>";
  return buffer;
  }));

Handlebars.registerPartial("time", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"time\">\n	<time datetime=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "date", depth0, options)))
    + "</time>\n</div>";
  return buffer;
  }));

this["JS"]["Templates"]["blog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"blog-item feed-item ";
  if (stack1 = helpers.verb) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.verb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	";
  stack1 = self.invokePartial(partials.time, 'time', depth0.published, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"title\">\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['Blog-showVerb'] || depth0['Blog-showVerb']),stack1 ? stack1.call(depth0, depth0.verb, options) : helperMissing.call(depth0, "Blog-showVerb", depth0.verb, options)))
    + "</span>\n		";
  stack2 = helpers['if'].call(depth0, depth0.annotation, {hash:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  stack2 = ((stack1 = helpers.greater || depth0.greater),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems), "0", options) : helperMissing.call(depth0, "greater", ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems), "0", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	";
  options = {hash:{},inverse:self.program(20, program20, data),fn:self.program(16, program16, data),data:data};
  stack2 = ((stack1 = helpers.equalsEither || depth0.equalsEither),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType), "article", "video", options) : helperMissing.call(depth0, "equalsEither", ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType), "article", "video", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.annotation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.annotation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program9(depth0,data) {
  
  var stack1, stack2, options;
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['Blog-trimTitle'] || depth0['Blog-trimTitle']),stack1 ? stack1.call(depth0, ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.content), options) : helperMissing.call(depth0, "Blog-trimTitle", ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.content), options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			a ";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program12(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<em>+"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	<div class=\"details\">\n		";
  stack1 = self.invokePartial(partials['large-blog-gravatar'], 'large-blog-gravatar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"external\">\n			";
  stack2 = helpers['with'].call(depth0, ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0]), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	</div>\n	";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, depth0.image, {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<div class=\"content\">\n				<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"name\" target=\"_blank\">";
  if (stack1 = helpers.displayName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n				<span class=\"url\">";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			</div>\n			";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<img class=\"attachment\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n			";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.verb, "share", options) : helperMissing.call(depth0, "equals", depth0.verb, "share", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div class=\"details\">\n		";
  stack1 = self.invokePartial(partials['large-blog-gravatar'], 'large-blog-gravatar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"original-share\">\n			";
  stack2 = self.invokePartial(partials.author, 'author', ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.actor), helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"original-message\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['Blog-trimMessage'] || depth0['Blog-trimMessage']),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "Blog-trimMessage", depth0.title, options)))
    + "</div>\n		</div>\n	</div>\n	";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JS"]["Templates"]["github"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"github-item feed-item\">\n	";
  stack1 = self.invokePartial(partials.time, 'time', depth0.created_at, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "WatchEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "WatchEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>starred</span>\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.owner)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "FollowEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "FollowEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>started following</span>\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(13, program13, data),fn:self.programWithDepth(10, program10, data, depth0),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "PushEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "PushEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>pushed</span> to\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tree/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.substr || depth0.substr),stack1 ? stack1.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "substr", ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.substr || depth0.substr),stack1 ? stack1.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "substr", ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "</a> at\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n		<div class=\"details\">\n			";
  stack2 = self.invokePartial(partials['large-github-gravatar'], 'large-github-gravatar', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"commits pusher-is-only-committer\">\n				<ul>\n					";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.shas), {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</ul>\n			</div>\n		</div>\n	";
  return buffer;
  }
function program11(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n					<li class=\"commit\">\n						";
  stack1 = self.invokePartial(partials['small-github-gravatar'], 'small-github-gravatar', depth2, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<code>\n							<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth2.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/commit/";
  if (stack2 = helpers[0]) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0[0]; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['Code-trimCommitCode'] || depth0['Code-trimCommitCode']),stack1 ? stack1.call(depth0, depth0[0], options) : helperMissing.call(depth0, "Code-trimCommitCode", depth0[0], options)))
    + "</a>\n						</code>\n						<blockquote class=\"original-message\">";
  if (stack2 = helpers[2]) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0[2]; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</blockquote>\n					</li>\n					";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(17, program17, data),fn:self.program(14, program14, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "IssuesEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "IssuesEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.action)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> issue\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.organization)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "#"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.programWithDepth(24, program24, data, depth0),fn:self.program(18, program18, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "IssueCommentEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "IssueCommentEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>commented</span> on issue\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " of\n			";
  stack2 = helpers['with'].call(depth0, depth0.repository, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program19(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.issue_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n				";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "link", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.owner) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.owner; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program24(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(25, program25, data, depth1),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "CreateEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "CreateEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program25(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			<span>";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.fork), {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span> repository\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "link", ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n		<div class=\"details\">\n			";
  stack2 = self.invokePartial(partials['large-github-gravatar'], 'large-github-gravatar', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"repo-description\">\n				";
  stack2 = self.invokePartial(partials['small-github-gravatar'], 'small-github-gravatar', depth2, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				<p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n			</div>\n		</div>\n	";
  return buffer;
  }
function program26(depth0,data) {
  
  
  return "forked";
  }

function program28(depth0,data) {
  
  
  return "created";
  }

function program30(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JS"]["Templates"]["portfolio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div class=\"portfolio-item\">\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.uri, options) : helperMissing.call(depth0, "link", depth0.uri, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<div class=\"content\">\n			<h3>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.link || depth0.link),stack1 ? stack1.call(depth0, depth0.uri, options) : helperMissing.call(depth0, "link", depth0.uri, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</h3>\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.either || depth0.either),stack1 ? stack1.call(depth0, depth0.client, depth0.company, options) : helperMissing.call(depth0, "either", depth0.client, depth0.company, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n			<ul class=\"technologies\">\n			";
  stack2 = helpers.each.call(depth0, depth0.technologies, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</ul>\n		</div>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=\"/images/portfolio/";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

function program4(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<div class=\"created\">Created";
  stack1 = helpers['if'].call(depth0, depth0.client, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.company, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n			";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " for ";
  if (stack1 = helpers.client) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.client; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " while at ";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "";
  buffer += "\n				<li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n			";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

return this["JS"]["Templates"];

});