// there is no angular.module here
// User is a simple Model constructor
function userFactory() {
	function User(name, address) {
		this.name = name;
		this.address = address;
	}

	User.prototype.getUserData = function () {
		return this.name + ', ' + this.address;
	};

	return User;
}

module.exports = userFactory;