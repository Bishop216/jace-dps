module.exports = [
	require("./create_provider"),
  // Repository
  require("./repository/create_repository"),
  require("./repository/get_repository"),
  require("./repository/update_repository"),
  require("./repository/delete_repository"),
  require("./repository/list_org_repositories"),
  require("./repository/get_repository_content"),
  // Branch
  require("./branch/list_branches"),
  require("./branch/get_branch"),
  // Tree
  require("./tree/get_tree"),
  require("./tree/create_tree"),
  // Commit
  require("./commit/create_commit"),
  require("./commit/get_commit"),
  require("./commit/list_commits"),
  // Reference
  require("./reference/create_reference"),
  require("./reference/delete_reference"),
  require("./reference/get_reference"),
  require("./reference/list_references"),
  require("./reference/update_reference")
]
