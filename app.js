//Init Github

const github = new Github;
const ui = new Ui;


// Search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if (userText !== '') {
		//Make HTTP call
		github.getUser(userText)
			.then( data => {
				if (data.profile.message === 'Not Found') {
					//Show alert
					ui.showAlert('User not found','alert alert-danger');
				} else {
					//Show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			});
	} else {
		//Clear profile
		ui.clearProfile();
	}
});