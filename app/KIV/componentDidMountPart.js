// componentDidMount() {
//   var thisObject = this;
//   setTimeout(function() {
//     var user = firebase.auth().currentUser;
//     var displayName;
//     if (user) {
//       displayName = user.displayName;
//       thisObject.setState({displayName: displayName})
//     } else {
//       thisObject.setState({displayName: ""})
//     }
//   }.bind(this), 0)
// }


// _updateProfile() {
//   var user = firebase.auth().currentUser;
//   var displayName;
//   if (user) {
//     displayName = user.displayName;
//     this.setState({displayName: displayName})
//   } else {
//     this.setState({displayName: "noUser"})
//   }
// }
