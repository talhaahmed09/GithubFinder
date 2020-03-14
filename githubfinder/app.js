//init github
const github = new Github;
//init UI
const ui = new UI;


//Search input
document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup' ,(e) => {
    //Get the input
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('User not found!','alert alert-danger')
            }else {
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);  
            }
        })
        
    }
    else {
        //clear profile
        ui.clearProfile();
    }
});