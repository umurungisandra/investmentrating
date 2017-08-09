		// ```````````````````````````````````````
		// 	View Select the home section
		// ```````````````````````````````````````
		$("#aHome").on("click",function() {
			$("#divContent").unload();
			$("#divContent").load("forms/home/index.html");
			$("#divNavigation").animate({height:"60px"},"slow");
		});
		// ```````````````````````````````````````
		// 	View Select the home section
		// ```````````````````````````````````````

// ****************************************************************************

		// ```````````````````````````````````````
		// 	View Select the Admin Section
		// ```````````````````````````````````````
		$("#aAdmin").click(function() {
			$("#divContent").unload();
			$("#divContent").load("forms/admin/index.html","slow");
			$("#divNavigation").animate({height:"60px"},500);
			setTimeout(function(){$("#divNavigation").show()},500);
			//$("#divNavigation").animate({height:"60px"},"slow");
		});
		// ```````````````````````````````````````
		// 	View Select the home section
		//
// ****************************************************************************

		// ```````````````````````````````````````
		// 	View Select the Investor Section
		// ```````````````````````````````````````
		$("#aInvestors").click(function() {
			$("#divContent").unload();
			$("#divContent").load("forms/dashboard/index.html","slow");
			$("#divNavigation").animate({height:"60px"},500);
			setTimeout(function(){$("#divNavigation").show()},500);
		});
		// ```````````````````````````````````````
		// 	View Select the Investor section
		// 
// ****************************************************************************

		// ```````````````````````````````````````
		// 	View Select the Companies Section
		// ```````````````````````````````````````
		$("#aCompanies").click(function() {
			$("#divContent").unload();
			$("#divContent").load("forms/companies/index.html","slow");
			$("#divNavigation").animate({height:"60px"},500);
			setTimeout(function(){$("#divNavigation").show()},500);
		});
		// ```````````````````````````````````````
		// 	View Select the Companies section
		// 
// ****************************************************************************

		// ```````````````````````````````````````
		// 	View Select the Home Section
		// ```````````````````````````````````````
		$("#btnLogin").click(function() {
			$("#divContent").unload();

			$("#divContent").load("forms/login/index.html");
			// -----------animate Footer------------------------
			$("#divNavigation").animate({height:"0px"},500);
			setTimeout(function(){$("#divNavigation").hide()},500);

			// -----------animate Footer------------------------
			$("#fFooter").animate({height:"0px;"},500);
			setTimeout(function(){$("#fFooter").hide()},500);
		});
		// ```````````````````````````````````````
		// 	View Select the Login Section
		// ```````````````````````````````````````
