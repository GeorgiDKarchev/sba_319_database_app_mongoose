#  API
Api Members 
# instructions for using API
This is free API 

# Live Links
www.api.com     - (test)

# API Entities
- Members


# Routes
Path:  /
Method:Get
Description : Root Route, return welcome message!


# API Routes
# members

Path: /api/members
Method :Get
Description: Return all members 

Path: /api/members
Method: POST
Body: {member_name: String, email: String password: String...}

Path : /api/members/:id
Method: PUT
Description:Update a member data by the member id
