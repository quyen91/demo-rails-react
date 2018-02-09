class Todo < ApplicationRecord
  enum status: {
    working: 0,
    completed: 1
  }
end
