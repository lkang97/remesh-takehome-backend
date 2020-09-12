# Remesh Takehome Assessment

# Backend Routes

1. Conversations

   - POST "/conversations"
     - This endpoint will create a new conversation
   - GET "/conversations"
     - This endpoint will grab all conversations
   - GET "/conversations/:id"
     - This endpoint will grab all messages for a particular conversation by id

2. Messages

   - POST "/messages"
     - This endpoint will create a new message
   - GET "/messages/:id/thoughts"
     - This endpoint will grab all thoughts for a particular message

3. Thoughts

   - POST "/thoughts"
     - This endpoint will create a new thought

# Data Schema

### **Conversations**

| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| title          |  string   |              not null |
| startDate      | timestamp |              not null |

### **Messages**

| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| text           |  string   |              not null |
| dateTime       | timestamp |              not null |

### **Thoughts**

| attribute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| text           |  string   |              not null |
| dateTime       | timestamp |              not null |
