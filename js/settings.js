function show(general, profile, password, notification, privacy) {
    document.getElementById(general).style.display='block';
    document.getElementById(profile).style.display='none';
    document.getElementById(password).style.display='none';
    document.getElementById(notification).style.display='none';
    document.getElementById(privacy).style.display='none';
    return false;
  }



// For edit photo on profile section
function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
}
