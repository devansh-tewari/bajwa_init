function message(final){
  window.open('http://wa.me/917015019751?text='+final+'')
}
main(){
  var name = Document.getElementById('name');
  var num = Document.getElementById('tel');
  var mes = Document.getElementById('message');
  var final = name+ " ( "+num+" ) "+"\n"+mes;
  message(final);
}
