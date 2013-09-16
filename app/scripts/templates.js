define(['handlebars'], function(Handlebars) {

this["JS"] = this["JS"] || {};
this["JS"]["Templates"] = this["JS"]["Templates"] || {};

this["JS"]["Templates"]["author"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"original-author-image\" height=\"16\" width=\"16\" />\n<a href=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"original-author\">";
  if (stack2 = helpers.displayName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.displayName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>";
  return buffer;
  });

this["JS"]["Templates"]["blog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div class=\"blog-item feed-item ";
  if (stack1 = helpers.verb) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.verb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"time\">\n			<time datetime=\"";
  if (stack1 = helpers.published) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.published; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.published) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.published; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, depth0.published, options) : helperMissing.call(depth0, "date", depth0.published, options)))
    + "</time>\n		</div>\n		<div class=\"title\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> \n			<span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.verb || depth0.verb),stack1 ? stack1.call(depth0, depth0.verb, options) : helperMissing.call(depth0, "verb", depth0.verb, options)))
    + "</span> \n			";
  stack2 = helpers['if'].call(depth0, depth0.annotation, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.greater || depth0.greater),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems), "0", options) : helperMissing.call(depth0, "greater", ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems), "0", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n		";
  options = {hash:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType), "article", options) : helperMissing.call(depth0, "equals", ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType), "article", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.annotation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.annotation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n			";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n			";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			a <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.objectType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n			";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<em>+"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.plusoners)),stack1 == null || stack1 === false ? stack1 : stack1.totalItems)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n			";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		<div class=\"details\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<img class=\"gravatar\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\"30\" width=\"30\" />\n			</a>\n			<div class=\"commits\">\n				<ul>\n					";
  stack2 = helpers['with'].call(depth0, ((stack1 = ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.attachments)),stack1 == null || stack1 === false ? stack1 : stack1[0]), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</ul>\n			</div>\n		</div>\n		";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n					<li class=\"article\">\n						<img class=\"attachment\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.image),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n						<div class=\"content\">\n							<a href=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"name\">";
  if (stack2 = helpers.displayName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.displayName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n							<span class=\"url\">";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n						</div>\n					</li>\n					";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.verb, "share", options) : helperMissing.call(depth0, "equals", depth0.verb, "share", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"details\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<img class=\"gravatar\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.actor),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\"30\" width=\"30\" />\n			</a>\n			<div class=\"commits\">\n				<ul>\n					<li>\n						";
  stack2 = self.invokePartial(partials.author, 'author', ((stack1 = depth0.object),stack1 == null || stack1 === false ? stack1 : stack1.actor), helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n						<div class=\"original-message\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.trimMessage || depth0.trimMessage),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "trimMessage", depth0.title, options)))
    + "</div>\n					</li>\n				</ul>\n			</div>\n		</div>\n		";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JS"]["Templates"]["github"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"blog-item feed-item\">\n	";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "WatchEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "WatchEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<span class=\"octicon octicon-star\"></span>\n		";
  stack1 = self.invokePartial(partials.time, 'time', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> <span>starred</span> <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"css-truncate css-truncate-target\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.owner)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n		</div>\n	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "FollowEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "FollowEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<span class=\"octicon octicon-person-follow\"></span>\n		";
  stack1 = self.invokePartial(partials.time, 'time', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> <span>started following</span> <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n		</div>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.programWithDepth(8, program8, data, depth0),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "PushEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "PushEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program8(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<span class=\"mega-octicon octicon-git-commit\"></span>\n		";
  stack1 = self.invokePartial(partials.time, 'time', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> <span>pushed</span> to <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tree/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.substr || depth0.substr),stack1 ? stack1.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "substr", ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.substr || depth0.substr),stack1 ? stack1.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "substr", ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "</a> at <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"css-truncate css-truncate-target\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.owner)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n		</div>\n		<div class=\"details\">\n			";
  stack2 = self.invokePartial(partials['large-gravatar'], 'large-gravatar', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"commits pusher-is-only-committer\">\n				<ul>\n					";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.shas), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</ul>\n			</div>\n		</div>\n	";
  return buffer;
  }
function program9(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n					<li>\n						";
  stack1 = self.invokePartial(partials['small-gravatar'], 'small-gravatar', depth2, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<code>\n							<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth2.repository),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/commit/";
  if (stack2 = helpers[0]) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0[0]; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.trimCommitCode || depth0.trimCommitCode),stack1 ? stack1.call(depth0, depth0[0], options) : helperMissing.call(depth0, "trimCommitCode", depth0[0], options)))
    + "</a>\n						</code>\n						<blockquote>";
  if (stack2 = helpers[2]) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0[2]; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</blockquote>\n					</li>\n					";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "IssuesEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "IssuesEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		<span class=\"mega-octicon octicon-issue-closed\"></span>\n		";
  stack1 = self.invokePartial(partials.time, 'time', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.action)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> issue <a href=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.organization)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "#"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n		</div>\n		<div class=\"details\">\n			";
  stack2 = self.invokePartial(partials['large-gravatar'], 'large-gravatar', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.equals || depth0.equals),stack1 ? stack1.call(depth0, depth0.type, "IssueCommentEvent", options) : helperMissing.call(depth0, "equals", depth0.type, "IssueCommentEvent", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		<span class=\"mega-octicon octicon-comment-discussion\"></span>\n		";
  stack1 = self.invokePartial(partials.time, 'time', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"title\">\n			<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> <span>commented</span> on issue <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.issue_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> of ";
  stack2 = helpers['with'].call(depth0, depth0.repository, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.owner) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.owner; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JS"]["Templates"]["large-gravatar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"https://github.com/";
  if (stack1 = helpers.actor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.actor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<img class=\"gravatar\" height=\"30\" width=\"30\" src=\"https://0.gravatar.com/avatar/"
    + escapeExpression(((stack1 = ((stack1 = depth0.actor_attributes),stack1 == null || stack1 === false ? stack1 : stack1.gravatar_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n</a>";
  return buffer;
  });

this["JS"]["Templates"]["portfolio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div class=\"portfolio-piece\">\n		";
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

this["JS"]["Templates"]["small-gravatar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  });

this["JS"]["Templates"]["time"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"time\">\n	<time class=\"js-relative-date\" datetime=\"";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "date", depth0.created_at, options)))
    + "</time>\n</div>";
  return buffer;
  });

return this["JS"]["Templates"];

});