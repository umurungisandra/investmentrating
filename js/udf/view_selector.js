		


		// ```````````````````````````````````````
		// 	View Select the login section
		// ```````````````````````````````````````
		$("#aLogin").on("click",function() {
			$("#divMainView").hide("slow");
			$("#divFormsView").show("slow");
			$("#divFormsView").unload();
			$("#divFormsView").load("");
		});
		// ```````````````````````````````````````
		// 	View Select the investor profile section
		// ```````````````````````````````````````
		$("#aInvestorProfile").on("click",function() {
			$("#divMainView").hide("slow");
			$("#divFormsView").show("slow");
			$("#divFormsView").unload();
			$("#divFormsView").load("");
		});
		// ```````````````````````````````````````
		// 	View Select the company profile section
		// ```````````````````````````````````````
		$("#aCompanyProfile").on("click",function() {
			$("#divMainView").hide("slow");
			$("#divFormsView").unload();
			$("#divFormsView").load("");
			$("#divFormsView").show("slow");
		});
		// ```````````````````````````````````````
		// 	View Select the user profile section
		// ```````````````````````````````````````
		$("#aUserProfile").on("click",function() {
			$("#divMainView").hide("slow");
			$("#divFormsView").unload();
			$("#divFormsView").load("");
			$("#divFormsView").show("slow");
		});
		// ```````````````````````````````````````
		// 	View Select the admin section
		// ```````````````````````````````````````
		$("#aAdminProfile").on("click",function() {
			$("#divMainView").hide("slow");
			$("#divFormsView").unload();
			$("#divFormsView").load("");
			$("#divFormsView").show("slow");
		});