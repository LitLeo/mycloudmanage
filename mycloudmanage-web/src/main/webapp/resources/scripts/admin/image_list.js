/**
 *  *
 * @author xuyizhen Dec 7, 2014 10:47 AM
 */

$(document).ready(function(){	
  
	$(".remove").click(function() {
			if(confirm("该镜像可能有无数个子镜像，确定删除？")){
					remove("/admin/image/remove.do",{vmUuid:$(this).attr('vmUuid')},"/admin/image/list?currentPage=1");
					}
	});
	$(".prePage").click(function(){
	     showPrePage("/admin/image/list",$("#page").attr("currentPage"));
	});
	$(".nextPage").click(function(){
	     showNextPage("/admin/image/list",$("#page").attr("currentPage"),$("#page").attr("totalPage"));
	});
	$(".firstPage").click(function(){
	     showFirstPage("/admin/image/list",$("#page").attr("currentPage"));
	});
	$(".lastPage").click(function(){
	     showLastPage("/admin/image/list",$("#page").attr("currentPage"),$("#page").attr("totalPage"));
	});
	
});

 	

 	
   		
		
   	