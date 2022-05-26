function main() {
 slider()
}
var a = 1;
function slider() {
	$('#virtual'+a).fadeOut(1000);
	if (a>=3) {
	a=1;
	}
	else {
	a++;}

	$('#virtual'+a).fadeIn(1000);
	
    var b = setTimeout (slider ,3000);

}
function slideup() {
	
}
function slidedown() {

}
var i = 1;
function langu() {
if(i==1){
 $('#lang2').css({'display':'block'});
 $('#lang3').css({'background-image':'url(img/langb.png)'});
 i=0;
}
else {
  $('#lang2').css({'display':'none'});
 $('#lang3').css({'background-image':'url(img/lang.png)'});
  i=1;
}
}
