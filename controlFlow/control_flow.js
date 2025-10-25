let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if  (userRole ==="manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel="no access granted";
}

console.log("access Level;", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if(userRole=== "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    } 
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Adminstrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus)

//DIETARY SERVICES
let memberType = "non";
let authorization;

switch (memberType){
    case "employee":
        authorization = "Dietary Services";
        break;
    case "enrolled member":
        authorization = "Dietary Services and one on one with a dietician";
        break;
    case "subscriber":
        authorization = "Partial Dietary Services"
        break;
    default:
        authorization = "Subscribe for dietary services"
        break;
}

console.log("Dietary Authorization:",authorization)