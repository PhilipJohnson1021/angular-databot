export interface ClientRegister {
  adminId: String;
	organizationName: String;
	organizationCode: String;
	organizationCategory: String;
	adminName: String;
	adminRole: String;
	emailId: String;
	contactNumber: String;
	alternativeEmailId: String;
  password: String;
	userName: String;
  securityQuestions: Array<{question: String, answer: String}>;
};

export interface UserRegister {
  organizationId: String;
	userName: String;
	firstName: String;
	lastName: String;
	role: string;
	emailId: String;
	phone: String;
	alternateEmail: String;
	password: String;
	designation: String;
	location: String;
};

export interface SuperUserRegister {
	role: String;
	userName: String;
	emailId: String;
	password: String;
	contactNumber: string;
  };
  