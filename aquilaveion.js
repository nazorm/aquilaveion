const getData = () => {
	fetch('https://hirng-x2021.glitch.me/api', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((resp) => resp.json())
		.then((d) => {
			console.log(d);
			displayData(d);
		});
};

const displayData = (d) => {
	document.querySelector('.header-text').innerHTML = d.name;
	document.querySelector('.instagram').href = d.social_media.instagram;
	document.querySelector('.twitter').href = d.social_media.twitter;
	document.querySelector('.snapchat').href = d.social_media.snapchat;
	document.querySelector('.mail').href = d.social_media.email;
};
