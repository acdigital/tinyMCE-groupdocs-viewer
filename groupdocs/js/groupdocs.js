tinyMCEPopup.requireLangPack();

var GroupdocsDialog = {
	init : function() {
		var f = document.forms[0];

		// Get the selected contents as text and place it in the input
		f.groupdocs_file_id.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
		f.height.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
		f.width.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
		//f.somearg.value = tinyMCEPopup.getWindowArg('some_custom_arg');
//                		// Update form
//		tinymce.each(tinyMCEPopup.getWindowArg('data'), function(value, key) {
//			setVal(key, value);
//		});
	},

	insert : function() {
		// Insert the contents from the input into the document
                var file_id = document.forms[0].groupdocs_file_id.value;
                var height =  document.forms[0].height.value;
                var width = document.forms[0].width.value;
                var iframe = '<iframe src="https://apps.groupdocs.com/document-viewer/embed/'+file_id+'" frameborder="0" width="'+width+'" height="'+height+'">'+
                                    '<!--<p>Click <a href=">here</a> to download the document.</p>-->'+
                                '</iframe>';
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, iframe);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(GroupdocsDialog.init, GroupdocsDialog);
