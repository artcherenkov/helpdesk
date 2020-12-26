import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number,
  topic: PropTypes.string,
  client: PropTypes.string,
  type: PropTypes.string,
  product: PropTypes.string,
  department: PropTypes.string,
  responsible: PropTypes.string,
  status: PropTypes.string,
  dueDate: PropTypes.string,
  actualDueDate: PropTypes.string,
  lastAnswer: PropTypes.string,
  priority: PropTypes.string,
  isExpired: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  deletedAt: PropTypes.oneOf([PropTypes.string, PropTypes.null]),
}).isRequired;
