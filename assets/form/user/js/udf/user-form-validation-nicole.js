//validation-nicole.js

$(document).ready(function(){

	/*form 1 validation*/
	//$(".create1").click(function(){
	//  if(validateCollection("create1")){
	//    $(".btn-create1").show()
	//  }else{
	//    $(".btn-create1").hide()
	//  }
	//})

	/*form 2 validation*/
	$(".create2").keyup(function(){
	  if(validateEmail($(".create2-email").val())){
	    $(".create2-email").addClass("validate")
	    $(".create2-email-check").show()
	  }else{
	    $(".create2-email").removeClass("validate")
	    $(".create2-email-check").hide()
	  }

	  if(validateTextBox($(".create2-password").val(), 5)){
	    $(".create2-password").addClass("validate")
	    $(".create2-password-check").show()
	  }else{
	    $(".create2-password").removeClass("validate")
	    $(".create2-password-check").hide()
	  }

	  if(validateEmail($(".create2-email").val()) && validateTextBox($(".create2-password").val(), 5)){
	    $(".btn-create2").show()
	  }else{
	    $(".btn-create2").hide()
	  }
	})

	/*form 3 validation*/
	$(".create3").keyup(function(){
	  if(validateTextBox($(".create3-forename").val(), 2)){
	    $(".create3-forename").addClass("validate")
	    $(".create3-forename-check").show()
	  }else{
	    $(".create3-forename").removeClass("validate")
	    $(".create3-forename-check").hide()
	  }

	  if(validateTextBox($(".create3-surname").val(), 2)){
	    $(".create3-surname").addClass("validate")
	    $(".create3-surname-check").show()
	  }else{
	    $(".create3-surname").removeClass("validate")
	    $(".create3-surname-check").hide()
	  }

	  if(validateTextBox($(".create3-forename").val(),2) && validateTextBox($(".create3-surname").val(),2)){
	    $(".btn-create3").show()
	  }else{
	    $(".btn-create3").hide()
	  }
	})

	/*form 4 validation*/
	$(".create4").keyup(function(){
	   //console.log(validateMultiSelect("create4-country"))
	   //console.log(validatePhone($(".create4-mobile").val()))
	  if(validatePhone($(".create4-mobile").val())){
	    $(".create4-mobile").addClass("validate")
	    $(".create4-mobile-check").show()
	  }else{
	    $(".create4-mobile").removeClass("validate")
	    $(".create4-mobile-check").hide()
	  }
	  if(validateMultiSelect("ddlUserCountry")){
	  	$(".create4-country-check").show()
	  }else{
	  	$(".create4-country-check").hide()
	  }
		if(validateMultiSelect("ddlUserCountry") && validatePhone($(".create4-mobile").val())){
	    $(".btn-create4").show()
	  }else{
	    $(".btn-create4").hide()
	  }
	})

	$(".create4").change(function(){
	   //console.log(validateMultiSelect("create4-country"))
	   //console.log(validatePhone($(".create4-mobile").val()))
	  if(validatePhone($(".create4-mobile").val())){
	    $(".create4-mobile").addClass("validate")
	    $(".create4-mobile-check").show()
	  }else{
	    $(".create4-mobile").removeClass("validate")
	    $(".create4-mobile-check").hide()
	  }
	  if(validateMultiSelect("ddlUserCountry")){
	  	$(".create4-country-check").show()
	  }else{
	  	$(".create4-country-check").hide()
	  }
	if(validateMultiSelect("ddlUserCountry") && validatePhone($(".create4-mobile").val())){
	    $(".btn-create4").show()
	  }else{
	    $(".btn-create1").hide()
	  }
	})

	$(".create5").keyup(function(){
	  if(validateTextBox($(".create5-company").val(),2)){
	     $(".create5-company-check").show()
	      $(".btn-create5").show()
	  }else{
	     $(".create5-mobile-check").hide()
	     $(".btn-create5").hide()
	  }
	})

	$(".create2").keyup()
})