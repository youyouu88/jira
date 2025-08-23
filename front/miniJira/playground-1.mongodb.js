// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("jira");

db.createCollection("department");
db.department.insertOne({departmentID  : "1002", departmentName : "services clients"});
