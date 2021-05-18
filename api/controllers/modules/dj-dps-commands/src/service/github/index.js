module.exports = [
	require("./create_provider"),
	require("./list_org_repos"),
	require("./get_JSON"),
	require("./get_content"),
	require("./get_tree"),
  // Repository
  require("./repository/create_repository"),
  require("./repository/get_repository"),
  require("./repository/update_repository"),
  require("./repository/delete_repository"),
]
