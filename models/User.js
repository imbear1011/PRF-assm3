"use strict";
class User {
  constructor(firstName, lastName, userName, password, pageSize, category) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.pageSize = pageSize;
    this.category = category;
  }
}
//
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
