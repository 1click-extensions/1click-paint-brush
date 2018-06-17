//console.log('ssss');
$(function(){
	var html = '<div class="resize-toolbar" style="text-align:center;">';
	html += '<p>' + chrome.i18n.getMessage('create_new_image') + '</p>';
	//html += '<p>' + 'Warning: you can\'t  cancel resizing!' + '</p>';
	html += '<label>' + chrome.i18n.getMessage('width') + ':</label>';
	html += '<input type="text" id="resize-width" name="resize-width" value="700"/>';
	html += '<label>' + chrome.i18n.getMessage('height') + ':</label>';
	html += '<input type="text" id="resize-height" name="resize-height" value="700"/>';
	html += '<button type="button" id="resize-submit" >' + chrome.i18n.getMessage('create') + '</button>';
	html += '</div>';
	$('#content').append(html);
	$('.resize-toolbar :input').unbind();
	$('.resize').unbind('click').click(function(){
		$('.resize-toolbar').show();
	}).trigger('click');
	$('#resize-submit').click(function(){
		var width = parseInt($('#resize-width').val()),
			height = parseInt($('#resize-height').val());
		if(width && height){
			console.log({
				data:'createImg',
				width:width,
				height:height,
			})
			chrome.runtime.sendMessage({
				data:'createImg',
				width:width,
				height:height,
			});
			//$('.resize-toolbar').hide();
		}
		else{
			alert(chrome.i18n.getMessage('fill_height_and_width'));//Please fill height and width with numbers only');
		}
	})

})