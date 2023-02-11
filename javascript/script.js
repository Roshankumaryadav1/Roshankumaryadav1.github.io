function validation(){
	var fname = document.forms['contact']['firstname'].value;
	var lname = document.forms['contact']['lastname'].value;

	if (fname==""|lname=="")
		{
		alert("First Name and last name can't be empty");
		}

	else
	{
		alert("Message send sucessfully");
	}
}
