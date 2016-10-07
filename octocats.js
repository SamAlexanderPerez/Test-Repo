function Octocat(name,arms){
  this.n=name;
  this.a=arms;
  this.slap=function(){
    for(var s=0;s<this.a;s++){
      console.log("SLAP");
    }
  };
}
var octocat1=new Octocat(Alex,5);
var octocat2=new Octocat(Steve,4);
var octocat3=new Octocat(John,7);
