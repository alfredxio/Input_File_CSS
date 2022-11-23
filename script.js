function uploadFile(target) {
	document.getElementById("uploadedfile").innerHTML = target.files[0].name;
	alert("Like you asked!!");
}