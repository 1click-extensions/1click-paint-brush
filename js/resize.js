console.log('ssss');
$(function(){
	var html = '<div class="resize-toolbar" style="margin-top:100px;text-align:center;">';
	html += '<p>' + 'Warning: you can\'t  cancel resizing!' + '</p>';
	html += '<label>' + 'Width' + ':</label>';
	html += '<input type="text" id="resize-width" name="resize-width" value="700"/>';
	html += '<label>' + 'Height' + ':</label>';
	html += '<input type="text" id="resize-height" name="resize-height" value="700" />';
	html += '<button type="button" id="resize-submit" >' + 'Resize' + '</button>';
	html += '</div>';
	$('#header').append(html);
	$('#resize-width').val(700);
	$('#resize-height').val(700);
	$('.resize-toolbar :input').unbind();
	$('.resize').unbind('click').click(function(){
		$('.resize-toolbar').show();
	}).trigger('click');
	$('#resize-submit').click(function(){
		var width = parseInt($('#resize-width').val()),
			height = parseInt($('#resize-height').val());
		if(width && height){
			$('canvas')[1].width = width;
			$('canvas')[1].height = height;
			editor.reloadCanvas()
			//$('.resize-toolbar').hide();
		}
		else{
			alert('Please fill height and width with numbers only');
		}
	})

})