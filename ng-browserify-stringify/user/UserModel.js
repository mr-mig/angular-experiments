// real-world usage example
// wrap model constructor into factory function

function User(name, address) {
	this.name = name;
	this.address = address;
}

User.prototype.getUserData = function () {
	return this.name + ', ' + this.address;
};

// I put exports at the bottom
module.exports = function ($log) {
	return User;
};

