function set_country_code(value)
{
	$("#hidden_country_code").val(value);
}


function mobile_no_enquiry(field_id,succss_msg,form_source)
{
	$('.loading').show();
	var mobile=$("#"+field_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	//alert("mobile--"+mobile+"country_code--"+country_code+"template--"+template+"lead_source--"+lead_source+"property_id--"+property_id+"city_id--"+city_id+"lead_method--"+lead_method+"refer_url--"+refer_url+"lead_origin--"+lead_origin+"request_url--"+request_url+"domain_url--"+domain_url+"browser--"+browser)
	$.ajax({
				async: false,
		        type: "POST",
		        url: domain_url+"/index.php/Common/mobile_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'form_source':form_source  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+field_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);
		          	}
		        }
    		});
}


function complete_enquiry_form(name_id,email_id,mobile_id,succss_msg,form_source)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
		        type: "POST",
		        url: domain_url+"/index.php/common/complete_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);

		          	}
		        }
    		});
}
function enquiry_form(title,form_source)
{
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
        type: "POST",
        url: domain_url+"/index.php/Enquiryform/get_enquiry_form",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#popupModal").html(result);
			$("#popupModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        }
	});
}


function multi_enquiry_form(title,form_source,property_id,city_id)
{
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
        type: "POST",
        url: domain_url+"/index.php/Enquiryform/get_multiple_template_enquiry",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#popupModal").html(result);
			$("#popupModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        }
	});
}

function get_a_call_back(title,form_source)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
        type: "POST",
        url: domain_url+"/index.php/Enquiryform/get_a_call_back",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        }
	});
}
function gtag_report_conversion(url) 
{
 /* var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-987629693/egrVCO-F638Q_ZD41gM',
      'event_callback': callback
  });
  return false;*/
}



function complete_enquiry_form_mutipro(name_id,email_id,mobile_id,succss_msg,form_source,pro_id)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=pro_id;
	var city_id=$("#city_id_"+pro_id).val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
		        type: "POST",
		        url: domain_url+"/index.php/common/complete_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);

		          	}
		        }
    		});
}

function download_brochure(title,form_source)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
        type: "POST",
        url: domain_url+"/index.php/Enquiryform/download_brochure",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        }
	});
}

function download_brochure_multi(title,form_source, property_id)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	$.ajax({
        type: "POST",
        url: domain_url+"/index.php/Enquiryform/download_brochure",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        }
	});
}

function mobile_no_enquiry_multi(field_id,succss_msg,form_source, property_id)
{
	$('.loading').show();
	var mobile=$("#"+field_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	//alert("mobile--"+mobile+"country_code--"+country_code+"template--"+template+"lead_source--"+lead_source+"property_id--"+property_id+"city_id--"+city_id+"lead_method--"+lead_method+"refer_url--"+refer_url+"lead_origin--"+lead_origin+"request_url--"+request_url+"domain_url--"+domain_url+"browser--"+browser)
	$.ajax({
				async: false,
		        type: "POST",
		        url: domain_url+"/index.php/Common/mobile_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'form_source':form_source  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+field_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);
		          	}
		        }
    		});
}