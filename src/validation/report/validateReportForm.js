import Validator from "validator";
import isEmpty from "../isEmpty";

function validateReportForm(data) {
  let errors = {};

  data.type = !isEmpty(data.type) ? data.type : "";
  data.details = !isEmpty(data.details) ? data.details : "";
  data.date = !isEmpty(data.date) ? data.date : "";

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type is required";
  }

  if (Validator.isEmpty(data.details)) {
    errors.details = "Details are required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date is required";
  } else if (!Validator.isISO8601(data.date)) {
    errors.date = "Invalid date format";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateReportForm;
