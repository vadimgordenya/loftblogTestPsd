$(document).ready(function() {

	var count = 6;

$('#js__cheked').change(function () {
	$('.cheked__text1').css('color','green').css('font-weight', 'bold');
	$('.text__about-js').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__js').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__about').css('display','none');
	}
	}, 1000);
});
$('#jq__cheked').change(function () {
	$('.cheked__text2').css('color','green').css('font-weight', 'bold');
	$('.text__about-jq').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__jq').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__base').css('display','none');
	}
	}, 1000);
});
$('#base__cheked').change(function () {
	$('.cheked__text3').css('color','green').css('font-weight', 'bold');
	$('.text__about-base').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__base').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__about').css('display','none');
	}
	}, 1000);
});
$('#respons1__cheked').change(function () {
	$('.cheked__text4').css('color','green').css('font-weight', 'bold');
	$('.text__about-respons').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__respons').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__about').css('display','none');
	}
	}, 1000);
});
$('#respons2__cheked').change(function () {
	$('.cheked__text5').css('color','green').css('font-weight', 'bold');
	$('.text__about-btn').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__btn').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__about').css('display','none');
	}
	}, 1000);
});
$('#respons3__cheked').change(function () {
	$('.cheked__text6').css('color','green').css('font-weight', 'bold');
	$('.text__about-gallery').css('background-color', '#ecf4e2');
	count--;
	setTimeout(function (){
		$('.list__gallery').hide();
		if(count === 0) {
		$('.complite').css('display','block');
		$('.courses__title').css('display','none');
		$('.courses__about').css('display','none');
	}
	}, 1000);
});



});
