const host= 'http://laravel-api.loc'

window.onload = function() {

	document.addEventListener('click', function(event) {
		
		const data= {
			
			X: event.pageX, 
			Y: event.pageY
		};
		
		Fetch_post({
			data: data,
			url: '/sending-click-info',
			handleSuccess: HandleSuccess,
			handleError: HandleError
		});
	});
}

function HandleSuccess(res) {
	//console.log(res)
}

function HandleError(error) {
	console.log(error)
}

function Create_fetch_params(Data){

	return {
			method: 'post',
			credentials: "same-origin",
			body: JSON.stringify(Data),
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json, text-plain, */*",
				"X-Requested-With": "XMLHttpRequest",
			}//headers
	}//return	
}//function

function Fetch_post(params) {

	const 
		fetchParams= Create_fetch_params(params.data),
		url= host +'/api'+ params.url
		
	fetch( url, fetchParams )

	    .then( res => res.json() )

		.then(
		 
			result=> params.handleSuccess(result),
        
        	error=> params.handleError(error), 
  		)

}//function