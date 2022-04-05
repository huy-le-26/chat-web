class ConversationInfo {
  name;

  container = document.createElement('div');

  txtName = document.createElement('span');
  btnLogOut = document.createElement("button");

  constructor() {
    
    this.txtName.innerHTML = "Chọn đi...";
    this.btnLogOut.innerHTML = "Logout";
    this.btnLogOut.addEventListener("click", this.handleLogOut);

    this.container.appendChild(this.txtName);
    this.container.appendChild(this.btnLogOut);

  }

  setName = (name) => {
    this.name = name;
    this.txtName.innerHTML = name;
  }

  handleLogOut = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successful");
      }).catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }
}

export { ConversationInfo };