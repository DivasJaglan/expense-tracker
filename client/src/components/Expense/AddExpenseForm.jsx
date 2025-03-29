/* eslint-disable react/prop-types */
import { useState } from "react";
import EmojiPickerPopup from "../EmojiPickerPopup";
import Input from "../Inputs/Input";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value });
  return (
    <div className="dark:text-amber-50">
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={expense.category}
        onChange={(e) => handleChange("category", e.target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      <Input
        value={expense.amount}
        onChange={(e) => handleChange("amount", e.target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={expense.date}
        onChange={(e) => handleChange("date", e.target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
