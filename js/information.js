// 身份证
$(function(){
	$(".IDface").click(function(){
		$("#IDcardface").click()
		$("#IDcardface").on("change",function(){
			var obj = getObjectURL(this.files[0]);
			$(".IDface img").prop("src",obj);
			$(".IDface p").css("display","none");
		});
	});
});
$(function(){
	$(".IDback").click(function(){
		$("#IDcardback").click()
		$("#IDcardback").on("change",function(){
			var obj = getObjectURL(this.files[0]);
			$(".IDback img").prop("src",obj);
			$(".IDback p").css("display","none");
		});
	});
});
function getObjectURL(file) {
				var url = null;
				if (window.createObjectURL != undefined) { //basic
					url = window.createObjectURL(file);
				} else if (window.URL != undefined) { //mozilla(firefox) 
					url = window.URL.createObjectURL(file);
				} else if (window.webkitURL != undefined) { //webkit or chrome
					url = window.webkitURL.createObjectURL(file);
				}
				return url;
			}
			
		