var Tank = SolidObject.extend({
  init: function(name){
    this.name = name;
  },
  texture: function(){
    return this.name;
  }
});
