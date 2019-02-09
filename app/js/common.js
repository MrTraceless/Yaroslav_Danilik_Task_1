$(function() {

	// Custom JS
	$("#all").click(function () {
		$('input:checkbox').not(this).prop('checked', this.checked);
	});
});
