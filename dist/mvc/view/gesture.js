define(["backbone","underscore","jquery","jquery.hammer"],function(e,t,n){return e.View.extend({constructor:function(r,i){var s=n(this.el),o=[];this.events&&t.each(this.events,function(e,n){var r=n.match(/^(\S+)\s*(.*)$/),i=r[1],u=r[2];console.log(s.__proto__),t.contains(["hold","tap","doubletap","transformstart","transform","transformend","dragstart","drag","dragend","swipe","release"],i)&&o.push(u)}),t.each(t.uniq(o),function(e,t){(e?s.find(e):s).hammer({prevent_default:!0})}),e.View.apply(this,arguments)}})})