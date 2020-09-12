# Remesh Takehome Assessment

## Data Schema

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
