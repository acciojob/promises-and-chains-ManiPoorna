//your JS code here. If required.
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	if(name==="" || age=== ""){
		alert("All fields are required!")
		return;
	}
	const result = new Promise((resolve,reject)=>{
		if (parseFloat(age)>18) {
			setTimeout(()=>{
				resolve(`Welcome, ${name}. You can vote.`)
			},4000)
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
	})
	result.then((res)=>{
		alert(res)
	})
	.catch(err=>alert(err))
})